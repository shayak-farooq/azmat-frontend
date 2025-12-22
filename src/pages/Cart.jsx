import { useEffect, useState } from 'react'
import ProductImage from '../assets/Images/product.jpeg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Cart() {
  // const [shippingAddress ,setShippingAddress] = useState({
  //   shippingNote : '',
  //   country : '',
  //   state :'',
  //   town:'',
  //   name: '',
  //   phone:'',
  //   pincode:'',
  //   houseNumber:'',
  //   area:'',
  //   landmark:''
  // })
  // const handleChange = (e)=>{
  //   setShippingAddress({...shippingAddress,[e.target.name]:e.target.value})
  // }
  const [products,setProducts] = useState()
  useEffect(()=>{
    const token = localStorage.getItem('bearer')
    fetch('http://localhost:3000/api/cart/getcart',{
      method:'GET',
      headers:{
        "authorization":`bearer ${token}`,
        'content-type':'application/json'
      }
    })
    .then(res=>{
        console.log(res);
        return res.json()
      })
      .then(data =>{
        setProducts(data.products)
        console.log(data.products);
        console.log(data.products[0].productid);
        console.log(data.products[0].productid.title);
      })
  },[])
  return (
    <>
      <div className="lg:flex flex-col items-center justify-center pt-32">
        {/* Product info */}
        <div className="bg-brand rounded-xl mx-10 ">
          <ul>
            {/* product heading */}
            <li>
              <ul className="lg:grid grid-cols-4 hidden">
                <li className="text-center px-15 py-3 border-r border-zinc-300"><div>Product item</div></li>
                <li className="text-center px-15 py-3 border-r border-zinc-300"><div>Price</div></li>
                <li className="text-center px-15 py-3 border-r border-zinc-300"><div>Quantity</div></li>
                <li className="text-center px-15 py-3"><div>Total price</div></li>
              </ul>
            </li>
            {/* added products */}
            <li>
              <ul className="lg:grid grid-cols-4 *:border-zinc-300 ">
                {/* product details */}
                <li className="lg:border-r lg:border-t border-b text-center py-3 lg:px-15 px-5 ">
                  <div className="flex">
                    <div className=''>
                      <img src={ProductImage} alt="product image" className='' width='60px'/>

                    </div>
                    <div>
                      <div>Product name</div>
                      <div>other details</div>
                    </div>

                  </div>
                </li>
                {/* price */}
                <li className="lg:flex justify-center items-center lg:border-r lg:border-t border-b py-3 lg:px-15 px-5">
                  1000
                </li>
                {/* quantity */}
                <li className="lg:flex justify-center items-center lg:border-r lg:border-t border-b py-3 lg:px-15 px-5">
                  <div className=' inline-flex rounded-xl border border-zinc-300 bg-white '>
                  <button className='px-3 py-2'>-</button>
                  <span className='border-x border-zinc-300 px-3 py-2'>2</span> 
                  <button className='px-3 py-2'>+</button>
                  </div>
                </li>
                {/* Total Price */}
                <li className=" lg:flex justify-center items-center py-3 lg:border-t lg:border-b lg:px-15 px-5">
                  2000
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap my-4 justify-center mx-10">
          {/* special instructions */}
          <div className='bg-brand flex flex-col px-10 pb-5 rounded-xl w-full mb-4'>
            <h6 className='m-3 pb-2 border-b border-zinc-300'>Special instructions for seller</h6>
            <textarea name="" id="" className='bg-white outline-none rounded' rows={4}></textarea>
          </div>          
          {/* checkout btn */}
          <div className='bg-brand flex flex-col px-10 pb-5 rounded-xl w-full '>
            <h6 className='m-3 pb-2 border-b border-zinc-300'>Total amount</h6>
            <span className='pb-4 text-zinc-500'>Taxes and shipping calculated at checkout</span>
            <div className='flex justify-between pb-3'>
              <p>Total Amount</p>
              <span>2000</span>
            </div>
            <button className='hover:bg-amber-400 bg-amber-600 text-white font-semibold py-2 rounded-lg transition-colors'>Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart 