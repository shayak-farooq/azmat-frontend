import LOGO from '../assets/Images/azmat_logo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

function Navbar() {
    const [swipeSlider,setSwipeSlider] = useState(false)
    return (
        <>
            <div className='bg-brand shadow-lg'>
                <nav className="flex justify-between py-4 container">
                    <button className='lg:hidden ml-3' onClick={()=>{setSwipeSlider(!swipeSlider)}}><GiHamburgerMenu /></button>
                    {/* links */}
                        <ul className={`lg:flex justify-center items-center lg:ml-2 text-xl lg:*:px-5 ${swipeSlider? 'flex-col absolute bg-white w-1/2 h-dvh top-0 left-0 *:border-b *:border-b-zinc-400 *:p-3' : 'hidden'}`}>
                            <li className={`${swipeSlider? '':'hidden'} flex justify-end items-center` }> <button onClick={()=>{setSwipeSlider(!swipeSlider)}}><RxCross2 className='m-2'/></button> </li>
                            <li>
                                <NavLink to='/'>Home</NavLink> </li>
                            <li><NavLink to='/about'>About Us</NavLink></li>
                            <li>Blog</li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    {/* LOGO */}
                    <div className='flex items-center pl-2'>
                        <img className='h-10 w-auto object-contain' src={LOGO} alt="" />
                    </div>
                    <div className='flex gap-x-8 px-10 justify-center items-center text-2xl'>
                        <VscAccount className='' />
                        <NavLink to='/cart'><MdOutlineShoppingCart className=''/></NavLink>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;