import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


export default function Nav({fixed}) {
    if(Auth.loggedIn()) {
        return (
            <>
                <div className="flex flex-wrap w-full py-2">
                    <div className="w-full px-4">
                        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded">
                            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                                <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                                    <a
                                        className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
                                        href="/"
                                    >
                                        Vacci-Date
                                        <Icon icon="cil:heart" />
                                    </a>
                                </div>
                                <div
                                    className="lg:flex flex-grow items-center"
                                    id="example-navbar-info"
                                >
                                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                        <li className="nav-item">
                                            <Link to ="/matches" className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-white hover:opacity-75">My Matches</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/dashboard" className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-white hover:opacity-75">Dashboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/profile" className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-white hover:opacity-75">Edit Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-white hover:opacity-75"
                                                href="/" onClick={() => Auth.logout()}
                                            > 
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </>      
        );
    } else {
        return (
            <>
                <div className="flex flex-wrap w-full py-2">
                    <div className="w-full px-4">
                        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded">
                            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                                <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                                    <a
                                        className="px-2 py-2 flex flex-col items-center text-xl font-bold leading-snug text-white hover:opacity-75"
                                        href="/"
                                    >
                                        Vacci-Date
                                        <Icon icon="cil:heart" />
                                    </a>
                                </div>
                                <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-end">
                                    <ul className="flex flex-col">
                                        <li className="nav-item">
                                            <Link to="/login" className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-white hover:opacity-75">Login</Link>
                                            <Icon icon="icomoon-free:profile" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
};
