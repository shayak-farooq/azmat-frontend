import { useEffect, useState } from "react";
import ProductImage from "../assets/Images/product.jpeg";
import { useNavigate } from "react-router-dom";

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
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("bearer");
    fetch("http://localhost:3000/api/cart/getcart", {
      method: "GET",
      headers: {
        authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status == 401) {
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        console.log("products", data.products);
        calculateTotalAmount(data.products);
      });
  }, [state]);
  function calculateTotalAmount(products) {
    let total = 0;
    products.forEach((element) => {
      total += element.productdetails.price * element.quantity;
    });
    setTotalAmount(total);
  }
  async function handleRemove(productid) {
    const token = localStorage.getItem("bearer");
    const response = await fetch(
      `http://localhost:3000/api/cart/removeitem/${productid}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    if (response.status == 200) {
      setState(state + 1)
      // setProducts((prev) =>
      //   prev.filter((product) => product.productdetails._id !== productid)
      // );
    }
  }
  async function handleQuantity(value,quantity, productid) {
    if (value == 1) {
      quantity++;
    }
    if (value == -1) {
      quantity--;
    }
    console.log(quantity);
    const token = localStorage.getItem("bearer");
    const response = await fetch(
      `http://localhost:3000/api/cart/updatequantity/${productid}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ quantity }),
      }
    );
    const result = response.json();
    console.log(result);
    if (response.status == 200) {
      setState(state + 1);
    }
  }
  return (
    <>
      <div className="lg:flex flex-col items-center justify-center pt-32">
        {/* Product info */}
        <div className="bg-brand rounded-xl mx-10 ">
          <ul>
            {/* product heading */}
            <li>
              <ul className="lg:grid grid-cols-5 hidden">
                <li className="text-center px-15 py-3 border-r border-zinc-300">
                  <div>Product item</div>
                </li>
                <li className="text-center px-15 py-3 border-r border-zinc-300">
                  <div>Price</div>
                </li>
                <li className="text-center px-15 py-3 border-r border-zinc-300">
                  <div>Quantity</div>
                </li>
                <li className="text-center px-15 py-3 border-r border-zinc-300">
                  <div>Total price</div>
                </li>
              </ul>
            </li>
            {/* added products */}
            <li>
              <ul className="lg:grid grid-cols-5 *:border-zinc-300 ">
                {/* product details */}
                <li className="lg:border-r lg:border-t border-b text-center py-3 lg:px-15 px-5 ">
                  <div className="flex">
                    <div className="">
                      <img
                        src={ProductImage}
                        alt="product image"
                        className=""
                        width="60px"
                      />
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
                  <div className=" inline-flex rounded-xl border border-zinc-300 bg-white ">
                    <button className="px-3 py-2">-</button>
                    <span className="border-x border-zinc-300 px-3 py-2">
                      2
                    </span>
                    <button className="px-3 py-2">+</button>
                  </div>
                </li>
                {/* Total Price */}
                <li className=" lg:flex justify-center items-center py-3 lg:border-t lg:border-b lg:px-15 px-5">
                  2000
                </li>
              </ul>
              <ul>
                {products ? (
                  <li>
                    {products.map((item) => (
                      <ul
                        key={item.productdetails._id}
                        className="lg:grid grid-cols-5 *:border-zinc-300 "
                      >
                        <li className="lg:border-r lg:border-t border-b text-center py-3 lg:px-15 px-5 ">
                          <div className="flex">
                            <div className="">
                              {/* <img
                              src={ProductImage}
                              alt="product image"
                              className=""
                              width="60px"
                            /> */}
                            </div>
                            <div>
                              <div>{item.productdetails.title}</div>
                              <div>other details</div>
                            </div>
                          </div>
                        </li>
                        <li className="lg:flex justify-center items-center lg:border-r lg:border-t border-b py-3 lg:px-15 px-5">
                          {item.productdetails.price}
                        </li>
                        <li className="lg:flex justify-center items-center lg:border-r lg:border-t border-b py-3 lg:px-15 px-5">
                          <div className=" inline-flex rounded-xl border border-zinc-300 bg-white ">
                            <button
                              className="px-3 py-2"
                              onClick={() => {
                                handleQuantity(-1,item.quantity, item.productdetails._id);
                              }}
                              disabled={item.quantity == 1}
                            >
                              -
                            </button>
                            <span className="border-x border-zinc-300 px-3 py-2">
                              {item.quantity}
                            </span>
                            <button
                              className="px-3 py-2"
                              onClick={() => {
                                handleQuantity(1,item.quantity, item.productdetails._id);
                              }}
                              disabled={
                                item.quantity == item.productdetails.inStock
                              }
                            >
                              +
                            </button>
                          </div>
                        </li>
                        <li className=" lg:flex justify-center items-center py-3 lg:border-t lg:border-b lg:px-15 px-5">
                          {item.productdetails.price * item.quantity}
                        </li>
                        <li className=" lg:flex justify-center items-center py-3 lg:border-t lg:border-b lg:px-15 px-5">
                          <button
                            onClick={() => {
                              handleRemove(item.productdetails._id);
                            }}
                            className="bg-red-600 px-3 py-2 rounded-xl text-white hover:cursor-pointer"
                          >
                            Remove item
                          </button>
                        </li>
                      </ul>
                    ))}
                  </li>
                ) : (
                  <div>No products</div>
                )}
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap my-4 justify-center mx-10">
          {/* special instructions */}
          {/* <div className="bg-brand flex flex-col px-10 pb-5 rounded-xl w-full mb-4">
            <h6 className="m-3 pb-2 border-b border-zinc-300">
              Special instructions for seller
            </h6>
            <textarea
              name=""
              id=""
              className="bg-white outline-none rounded"
              rows={4}
            ></textarea>
          </div> */}
          {/* checkout btn */}
          <div className="bg-brand flex flex-col px-10 pb-5 rounded-xl w-full ">
            <h6 className="m-3 pb-2 border-b border-zinc-300">Total amount</h6>
            <span className="pb-4 text-zinc-500">
              shipping is calculated at checkout
            </span>
            <div className="flex justify-between pb-3">
              <p>Total Amount</p>
              <span>{totalAmount}</span>
            </div>
            <button onClick={()=>{navigate('/checkout')}} className="hover:bg-amber-400 bg-amber-600 text-white font-semibold py-2 rounded-lg transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
