import LOGO from '../assets/Images/azmat_logo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import { NavLink } from 'react-router';
>>>>>>> c50aec245ec182ec3db61a251003ad24177adc1e

function Navbar() {
    const [swipeSlider,setSwipeSlider] = useState(false)
    return (
        <>
            <div className='bg-brand shadow-lg'>
                <nav className="flex justify-between py-4">
                    <button className='lg:hidden ml-3' onClick={()=>{setSwipeSlider(!swipeSlider)}}><GiHamburgerMenu /></button>
                    {/* links */}
                        <ul className={`lg:flex justify-center items-center lg:ml-2 text-xl lg:*:px-5 ${swipeSlider? 'flex-col absolute bg-white w-1/2 h-dvh top-0 left-0 *:border-b *:border-b-zinc-400 *:p-3' : 'hidden'}`}>
                            <li className={`${swipeSlider? '':'hidden'} flex justify-end items-center` }> <button onClick={()=>{setSwipeSlider(!swipeSlider)}}><RxCross2 className='m-2'/></button> </li>
<<<<<<< HEAD
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/products'>Products</NavLink></li>
                            <li><NavLink to='/about'>About Us</NavLink></li>
                            <li> <NavLink to='/contact'>Contact</NavLink></li>
=======
                            <li>
                                <NavLink to='/'>Home</NavLink> </li>
                            <li><NavLink to='/about'>About Us</NavLink></li>
                            <li>Blog</li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
>>>>>>> c50aec245ec182ec3db61a251003ad24177adc1e
                        </ul>
                    {/* LOGO */}
                    <div className='flex items-center pl-2'>
                        <NavLink to='/'>
                        <img className='h-10 w-auto object-contain' src={LOGO} alt="" />

                        </NavLink>
                    </div>
                    <div className='flex gap-x-8 px-10 justify-center items-center text-2xl'>
<<<<<<< HEAD
                        <NavLink to='/profile'><VscAccount/></NavLink> 
                        <NavLink to='/cart'><MdOutlineShoppingCart/></NavLink> 
                        
=======
                        <VscAccount className='' />
                        <NavLink to='/cart'><MdOutlineShoppingCart className=''/></NavLink>
>>>>>>> c50aec245ec182ec3db61a251003ad24177adc1e
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;