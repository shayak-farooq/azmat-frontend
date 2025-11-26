import LOGO from '../assets/Images/azmat_logo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from 'react';

function Navbar() {
    const [swipeSlider,setSwipeSlider] = useState(false)
    return (
        <>
            <div className='bg-brand relative shadow-lg'>
                <nav className="flex justify-between py-4 container mx-auto ">
                    {/* links --> desktop view */}
                        <ul className="lg:flex justify-center items-center ml-2 text-xl *:px-5 hidden">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    {/* LOGO */}
                    <div className='flex items-center pl-2'>
                        <img className='h-10 w-auto object-contain' src={LOGO} alt="" />
                    </div>
                    <div className='flex gap-x-8 px-10 justify-center items-center text-2xl'>
                    <button className='lg:hidden' onClick={()=>{setSwipeSlider(!swipeSlider)}}><GiHamburgerMenu /></button>
                        <VscAccount className='' />
                        <MdOutlineShoppingCart className=''/>
                    </div>
                </nav>
                {/* links --> mobile view */}
                       {swipeSlider? "" : <ul className="top-0 absolute w-1/2 bg-white h-dvh">
                            <li className='border-b border-b-zinc-300 pl-4 py-3 flex justify-end items-center pr-4'><button className='' onClick={()=>{setSwipeSlider(!swipeSlider)}}>X</button></li>
                            <li className='border-b border-b-zinc-300 pl-4 py-3'>HOME</li>
                            <li className='border-b border-b-zinc-300 pl-4 py-3'>ABOUT US</li>
                            <li className='border-b border-b-zinc-300 pl-4 py-3'>BLOG</li>
                            <li className='border-b border-b-zinc-300 pl-4 py-3'>CONTANT</li>
                        </ul>}
            </div>
        </>
    );
}

export default Navbar;