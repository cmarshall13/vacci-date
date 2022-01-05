
import React from 'react';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { UNLIKE_USER} from '../utils/mutations';
import { QUERY_ALL_USERS, QUERY_USER } from '../utils/queries';
import { UserInputError } from 'apollo-server-express';

const Matches = () => {

    const { data: allData, error: allError, loading: allLoading } = useQuery(QUERY_ALL_USERS,{
        pollInterval: 500,
    });
    const { data: meData, error: meError, loading: meLoading } = useQuery(QUERY_USER,{
        pollInterval: 500,
    });

  const [unlikeUser] = useMutation(UNLIKE_USER);


  if (allLoading || meLoading) {
    return <h2>LOADING...</h2>;
    };

  if(allError || meError) {
    return <h2>Error!</h2>
  };

  const handleUnlikeUser = async (_id) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      await unlikeUser({variables: {_id: _id}});

    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  console.log(meData.me);

  return (
    <>
      <div fluid className='text-light bg-dark'>
        <div>
          <h1>Viewing matches!</h1>
        </div>
      </div>
      <div>
        <h2>
          {meData.me.matches.length
            ? `Viewing ${meData.me.matches.length} saved ${meData.me.matches.length === 1 ? 'match' : 'matches'}:`
            : 'You have no matches!'}
        </h2>
        <div>
          {allData.all.map((user) => {
              if (user.matches.includes(meData.me._id)) {
                return (
                    <div key={user._id} border='dark'>
                      {user.img ? <img src={user.img} alt={`The cover for ${user.firstname}`} variant='top' /> : null}
                      <div>
                        <div>{user.firstname}</div>
                        <p className='small'>{user.age}</p>
                        <p className='small'>{user.gender}</p>
                        <div>{user.aboutme}</div>
                        <button className='btn-block btn-danger' onClick={() => handleUnlikeUser(user._id)}>
                          Unlike user
                        </button>
                      </div>
                    </div>
                  );   
              }
          })}
        </div>
      </div>
    </>
  );
};
export default Matches;