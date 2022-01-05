import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


const Home = () => {
    return (
        <div className="flex items-center justify-around">
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-2">
                <div className="col-span-2 p-4">
                    <p className="w-1/2 flex flex-col absolute justify-center items-center text-6xl font-bold text-white pt-5 pl-20 md:pt-10 md:pl-20 lg:pt-4 lg:pl-5">
                        Where vaccinated singles meet. 
                        <br></br>
                        Safely.
                    </p>
                    <img className="rounded h-auto w-full" src="./images/disco-love.png" alt="couple laying with disco ball"></img>
                </div>
                <div className="pt-3">
                    <img className="rounded h-auto w-full" src="./images/women-kiss.png" alt="couple kissing"></img>
                </div>
                <div className="p-4">
                    <img className="rounded h-auto w-full" src="./images/coffee-hearts.png" alt="cafe latte with hearts"></img>
                    <br></br>
                    <button 
                        className="outline rounded hover:outline-pink-400/[.75] outline-offset-3 bg-pink-500 text-white text-5xl"
                        type="button"
                    >
                        <Link to ="/signup">
                            Sign Up
                        </Link>
                        <Icon icon="ic:round-keyboard-double-arrow-right" />
                    </button>
                </div>
                <div className="col-span-2 p-4">
                    <img className="rounded h-auto w-full" src="./images/masks.png" alt="multi colored masks"></img>
                </div>
                <div className="col-span-2 p-4">
                    <img className="rounded h-auto w-full" src="./images/same-sex.png" alt="couple kissing"></img>
                </div>
            </div>
        </div>
    );
};

export default Home;
    