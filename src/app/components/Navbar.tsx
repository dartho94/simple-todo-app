"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    //This is for mini screen
    const [navActive, setNavActive] = useState(false);

    return (
        <div className="flex justify-between items-center w-full h-12 px-4 fixed nav">
            <div><h1>Logo</h1></div>
            <ul className="hidden md:flex">
                <li key='home' className="nav-links px-4 cursor-pointer capitalize text-xl text-gray-500 hover:text-gray-400 duration-200 link-underline ">
                    <Link href='/'>Home</Link>
                </li>
                <li key='profile' className="nav-links px-4 cursor-pointer capitalize text-xl text-gray-500 hover:text-gray-400 duration-200 link-underline ">
                    <Link href='/profile'>Profile</Link>
                </li>
                <li key='login' className="nav-links px-4 cursor-pointer capitalize text-xl border-l-2 border-gray-300 text-gray-500 hover:text-gray-400 duration-200 link-underline ">
                    <Link href='/login'>Login</Link>
                </li>
                <li key='signup' className="nav-links px-5 cursor-pointer capitalize text-xl rounded-lg bg-gray-300 text-gray-500 hover:text-white duration-200 link-underline ">
                    <Link href='/signup'>Signup</Link>
                </li>
            </ul>
        </div>
    )
}