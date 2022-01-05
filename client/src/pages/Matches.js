import React from 'react';
import Auth from '../utils/auth';
import { QUERY_ALL_USERS, QUERY_USER } from '../utils/queries';
import { UNLIKE_USER } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';



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

    if (allError) {
        return `Error! ${allError.message}`;
    };
    if (meError) {
        return `Error! ${meError.message}`;
    };
    const handleUnlikeUser = async (Id) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          await unlikeUser({variables: {_id: Id}});
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <div className="container">
        <h2>
          {meData.me.matches.length
            ? `Viewing ${meData.me.matches.length} matches ${meData.me.matches.length === 1 ? 'user' : 'users'}:`
            : 'You have no matches :('}
        </h2>
        <div>
            {allData.all.map((user) => {
                if(user.matches.includes(meData.me._id)){
                    return( <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                {user.img ? <img className="w-full" src={user.img} alt="User Profile picture"/> : <div></div>}    
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-1">{user.firstname}</div>
                                    <div className="font-bold text-l mb-2">{user.age}, {user.gender}</div>
                                    <p className="text-gray-700 text-base">
                                    {user.aboutme}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 flex justify-between">
                                <button onClick={() => handleUnlikeUser(user._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-1/3 rounded">
                                    Unlike
                                </button>
                                </div>
                            </div>
                    )
                }

            })}
        </div>
            
        </div>
    );
};

export default Matches;