import LOGO from '../assets/Images/azmat_logo.png'
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
    return (
        <>
            <div className='bg-brand shadow-lg'>
                <nav className="flex justify-between py-4 container mx-auto">
                    {/* links */}
                        <ul className="flex justify-center items-center ml-2 text-xl *:px-5">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    {/* LOGO */}
                    <div className='flex items-center'>
                        <img className='h-10 w-auto object-contain' src={LOGO} alt="" />
                    </div>

                    <div className='flex gap-x-8 px-10 justify-center items-center text-2xl'>
                        <VscAccount className='' />
                        <MdOutlineShoppingCart className=''/>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;