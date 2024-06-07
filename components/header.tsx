'use client';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import {auth} from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { createContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from 'flowbite-react';
import {AnimatePresence, motion} from 'framer-motion'
import ClickAwayListener from "react-click-away-listener";
import { redirect } from "next/navigation";


interface HeaderProps {
    alt?: boolean;
}

const Header: React.FC<HeaderProps> = ({alt=false}) => {

    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = async() => {
        try{
            const result = await signInWithRedirect(auth, googleProvider);
            //console.log(result.user.displayName)
        } catch(error){
            console.log(error)
        }
    }

    const [user] = useAuthState(auth);

    const loginGoogle = () => {
        console.log(user)
        console.log("login with google called");
        GoogleLogin();
    }

    const logoutGoogle = () => {
        console.log("signout")
        auth.signOut();
        console.log(user)
        redirect("/")
    }

    const [dropdown, setDropDown] = useState(false)



  return (
    <div className="w-full h-[15vh] flex flex-row justify-center ">

        <div className={`"lg:w-[80%] md:w-[90%] flex flex-row ${alt ? 'justify-center' : 'justify-end'} items-center lg:gap-8 md:gap-4"`}>
                
                {alt && (
                    <div className="flex flex-row items-center lg:justify-evenly md:justify-start  md:gap-2 lg:gap-2 w-[95%]">
                        <div className="flex flex-row lg:gap-4 md:gap-2">
                            <p className="lg:text-4xl md:text-2xl md:font-regular lg:font-semibold">S</p>
                            <p className="lg:text-4xl md:text-2xl md:font-regular lg:font-semibold">/</p>
                            <p className="lg:text-4xl md:text-2xl md:font-regular lg:font-semibold text-main">Library</p>
                        </div>
                        <input className="lg:w-[80%] md:w-[80%] h-14 lg:rounded-xl md:rounded-lg border-solid border-2 border-black focus:scale-105 transition-transform "/>
                    </div>
                )}


                <a href="/">
                    <button className="text-xl  font-light active:scale-90 transition-transform">Home</button>
                </a>
                <a href="/sell">
                    <button className="text-xl  font-light active:scale-90 transition-transform">Sell</button>
                </a>

                {!user && (
                    <button onClick={loginGoogle} className="bg-white h-10 rounded-3xl w-56 border-solid border-2 border-black hover:bg-gray-200 active:scale-90 transition-transform">
                    <div className="flex flex-row justify-evenly items-center ">
                        <FcGoogle />
                        <p>Continue With Google</p>
                    </div>
                </button>
                )}
                {user && (
                    
                    <div className="flex flex-col h-12 justify-center">
                            <button onClick={() => {setDropDown(!dropdown)}} className="text-main 
                            focus:ring-2 focus:outline-none rounded-lg h-[100%]
                            flex flex-row items-center  ring-slate-100" type="button">
                                <p className=" w-[100%] flex flex-row justify-start text-xl font-light text-decoration-line: underline">{user.displayName}</p>
                                
                            </button>

                            <AnimatePresence>
                            {dropdown && (
                                <ClickAwayListener onClickAway={() => {setDropDown(!dropdown)}}>
                                    
                                        <motion.div 
                                        animate={{opacity:1}}
                                        initial={{opacity:0.7}}
                                        exit={{opacity:0}}
                                        
                                        >
                                            <div id="dropdown" className="z-10 absolute top-[10.5%] right-[4%] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                                                <li>
                                                    <a href="/dashboard" className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        <p className="text-lg">Your Dashboard</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/bag" className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        <p className="text-lg">Your bag</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/purchases" className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        <p className="text-lg">Your purchases</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/likes" className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        <p className="text-lg">Your Likes</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/settings" className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        <p className="text-lg">Settings</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div onClick={logoutGoogle} className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        <p className="text-lg">Logout</p>
                                                    </div>      
                                                </li>
                                                
                                                </ul>
                                            </div>
                                        </motion.div>
                                    
                                </ClickAwayListener>
                            )}
                            </AnimatePresence>
                            
                        </div>
                )}

                
        </div>
    </div>
  )
}

export default Header