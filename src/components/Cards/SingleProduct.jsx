import productImage from '../../assets/Images/product.jpeg'
import { GrFormView } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa6";
function SingleProduct(){
    return(
        <>
        <div className='inline-block mx-3'>         
        <div className='bg-brand flex flex-col items-center'>
            <div className='w-[400px] h-[500px] bg-white flex justify-center items-center'>
            <img src={productImage} alt="" className='rounded-2xl w-1/2 h-1/2' />
            </div>
            <div>
                <p>Name</p>
                <p>Price</p>
                <p>rating</p>
                <div>
                    <div className='inline-block bg-white mx-2 h-8 w-8 hover:bg-amber-500'>
                    {/* quickview */}
                    <button className='text-3xl'><GrFormView className='p-0.5' /></button>
                    </div>
                    <div className='inline-block bg-white mx-2 h-8 w-8 hover:bg-amber-500'>
                    {/* cart */}
                    <button className='text-3xl'><FaCartPlus className='p-1.5'/></button>

                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default SingleProduct