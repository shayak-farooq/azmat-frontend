import LOGO from '../assets/Images/azmat_logo.png'
import { LiaCcVisa, LiaPaypal, LiaCcMastercard } from "react-icons/lia";
import { SiAmericanexpress } from "react-icons/si";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    const [toggleSections2, setToggleSections2] = useState(true)
    const [toggleSections3, setToggleSections3] = useState(true)
    const [toggleSections4, setToggleSections4] = useState(true)
    return (
        <>
            <div className='md:flex flex-wrap container mx-auto gap-4 justify-around md:py-24 px-10 *:'>
                {/* section-1 */}
                <div className='flex-1 pt-10 pl-5 sm:pb-3'>
                    <h1>
                        <NavLink to='/'>
                        <img className='h-12 w-auto object-contain' src={LOGO} alt="" />
                        </NavLink>
                        <div className='py-5'>
                            <span className='text-zinc-500'>7882 Rd reliance gidc park chock, new york</span>
                        </div>
                        <div className='flex gap-3 *:text-2xl'>
                            <LiaCcVisa />
                            <LiaPaypal />
                            <LiaCcMastercard />
                            <SiAmericanexpress />
                        </div>
                    </h1>
                </div>
                {/* section 2 */}
                <div className="md:flex-1 md:pt-10 md:pl-5 relative">
                    <h1 className='pb-5'>My account</h1>
                    <ul className={`*:text-zinc-500 *:pb-1 md:block ${toggleSections2 ? "hidden" : ""}`}>
                        <li><NavLink to="/about">About us</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/contact">Contact us</NavLink></li>
                        <li><NavLink to="/cart">MyCart</NavLink></li>
                    </ul>
                    <button onClick={() => { setToggleSections2(!toggleSections2) }} className='md:hidden absolute right-5 top-0'>{toggleSections2 ? "+" : "-"}</button>
                </div>
                {/* section 3 */}
                <div className='flex-1 md:pt-10 md:pl-5 relative'>
                    <h1 className='pb-5'>Information</h1>
                    <ul className={`*:text-zinc-500 *:pb-1 md:block ${toggleSections3 ? "hidden" : ""}`}>
                        <li><a href="">Faqs</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Payment policy</a></li>
                        <li><a href="">Return policy</a></li>
                        <li><a href="">Terms & condition</a></li>
                    </ul>
                    <button onClick={() => { setToggleSections3(!toggleSections3) }} className='md:hidden absolute right-5 top-0'>{toggleSections3 ? "+" : "-"}</button>

                </div>
                {/* section 4 */}
                <div className='flex-1 md:pt-10 md:pl-5 relative'>
                    <h1 className='pb-5'>Follow up</h1>
                    <ul className={`*:text-zinc-500 *:pb-1 md:block ${toggleSections4 ? "hidden" : ""}`}>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Pinterest</a></li>
                        <li><a href="">Youtube</a></li>
                    </ul>
                    <button onClick={() => { setToggleSections4(!toggleSections4) }} className='md:hidden absolute right-5 top-0'>{toggleSections4 ? "+" : "-"}</button>

                </div>
                {/* section 5 */}
                <div className='flex-2 md:pt-10 md:px-5 container '>
                    <h1 className=''>Subscribe newsletter</h1>
                    <p className='text-zinc-500 text-sm pb-5'>Sign up for special perks starting now with a 10% off coupon!</p>
                    <div className='pb-5 w-full'>
                        <div className='flex relative'>
                            <input type="text" className='flex-1 border border-zinc-500 rounded p-1.5' />
                            <button className='absolute right-0 top-1/2 -translate-y-1/2 border-l border-l-zinc-500 h-full flex items-center justify-center px-1.5'><MdOutlineMarkEmailRead className='text-2xl' /></button>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <h1>Call Store</h1>
                            <p className='text-zinc-500'>9678542145</p>
                        </div>
                        <div>
                            <h1>Email</h1>
                            <p className='text-zinc-500'>demo@demo.com</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-brand text-center p-2 text-zinc-500'>&copy; 2025 Azmat , All Rights Reserved.</div>
        </>
    )
}

export default Footer