import LOGO from '../assets/Images/azmat_logo.png'
import { LiaCcVisa, LiaPaypal, LiaCcMastercard } from "react-icons/lia";
import { SiAmericanexpress,SiMinutemailer } from "react-icons/si";

function Footer() {
    return (
        <>
            <div className='flex container mx-auto gap-4 justify-around'>
                <div>
                    <h1>
                        <img className='h-12 w-auto object-contain' src={LOGO} alt="" />
                        <span>7882 Rd reliance gidc park chock, new york</span>
                        <div className='flex gap-3 *:text-2xl'>
                            <LiaCcVisa />
                            <LiaPaypal />
                            <LiaCcMastercard />
                            <SiAmericanexpress />
                            </div>
                    </h1>
                </div>
                {/* section 2 */}
                <div>
                    <h1>My Account</h1>
                    <ul>
                        <li><a href="">About us</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Blog </a></li>
                        <li><a href="">MyCart </a></li>
                        <li><a href="">MyWishlist</a></li>
                    </ul>
                </div>
                {/* section 3 */}
                <div>
                    <h1>Information</h1>
                    <ul>
                        <li><a href="">Faqs</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Payment policy</a></li>
                        <li><a href="">Return policy</a></li>
                        <li><a href="">Terms & condition</a></li>
                    </ul>
                </div>
                {/* section 4 */}
                <div>
                    <h1>Follow up</h1>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Pinterest</a></li>
                        <li><a href="">Youtube</a></li>
                    </ul>
                </div>
                {/* section 5 */}
                <div>
                    <h1>Subscribe newsletter</h1>
                    <p>Sign up for special perks starting now with a 10% off coupon!</p>
                    <div className='flex gap-4'>
                    <input type="text" className='border rounded' />
                    <button><SiMinutemailer className='text-2xl'/></button>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <h1>Call Store</h1>
                            <p>9678542145</p>
                        </div>
                        <div>
                            <h1>Email</h1>
                            <p>demo@demo.com</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-brand text-center p-2'>&copy; 2025, Ecommerce by qodexTM</div>
        </>
    )
}

export default Footer