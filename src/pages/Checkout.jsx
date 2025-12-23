import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";

function Checkout() {
  const [products, setProducts] = useState([]);
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
  }, []);
  function calculateTotalAmount(products) {
    let total = 0;
    products.forEach((element) => {
      total += element.productdetails.price * element.quantity;
    });
    setTotalAmount(total);
  }
  return (
    <>
      <header className="flex justify-center border-b border-gray-400">
        <div className="flex justify-between content-center items-center w-2/3 p-6">
          <span>
            <NavLink to="/" className="font-bold text-3xl cursor-pointer">
              Azmat
            </NavLink>
          </span>
          <NavLink to="/cart" className="text-3xl">
            <MdOutlineShoppingCart />
          </NavLink>
        </div>
      </header>
      <main className="flex">
        {/* Left div */}
        <div className="flex justify-end w-1/2 border-r border-gray-400">
          <div className=" w-2/3 px-8 ">
            <div className="">
              <h3 className="font-semibold text-l my-2">Address</h3>
              <div className=" border-2 px-4 py-2 my-2">jdoijwedjowdo</div>
              <div className=" border-2 px-4 py-2 my-2">jdoijwedjowdo</div>
              <div className=" border-2 px-4 py-2 my-2">jdoijwedjowdo</div>
              <NavLink className="text-blue-500 my-2">
                <u>+ Add Address</u>
              </NavLink>
            </div>
            <div>
              <h3 className="font-semibold text-l my-2">Delivery</h3>
              <div>
                <form>
                  <div>
                    <input
                      type="text"
                      placeholder="full name"
                      className="w-full my-2 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full my-2 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Appartment"
                      className="w-full my-2 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                  <div className="flex justify-between">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-10/31 my-2 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="w-10/31 my-2 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Pincode"
                      className="w-10/31 my-2 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                      minLength={6}
                      maxLength={6}
                    />
                  </div>
                </form>
              </div>
              <div>
                <h3 className="font-semibold text-l my-2">Payment</h3>
                <p className="text-gray-500 my-2">
                  All transactions are secure and encrypted.
                </p>
                <div>
                  <div className="font-semibold w-full my-2">
                    <input type="radio" name="payment" /> CoD
                  </div>
                  <div className="font-semibold w-full my-2">
                    <input type="radio" name="payment" disabled /> UPI
                  </div>
                </div>
              </div>
              <button className="w-full my-2 bg-amber-400 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition-colors">
                Pay now
              </button>
            </div>
          </div>
        </div>
        {/* Right div */}
        <div className="flex justify-start w-1/2 px-4 py-2 bg-brand">
          <div className="w-2/3 px-4 py-2">
            <div className="max-h-60 flex flex-col">
              <div className="overflow-auto">
                {/* <Checkout_Card /> */}
                {products.map((item) => (
                  <div key={item.productdetails.id} className="flex h-20 justify-center items-center">
                    <div className="w-2/8 flex justify-center items-center h-[90%] ">
                      <div className="h-[90%] w-4/5 flex items-center justify-center ">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0581/4311/3271/files/honey-pro-5_128x128.jpg?v=1726036794"
                          alt="null"
                          className="max-h-full max-w-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="w-4/8 pl-2">
                      <div>{item.productdetails.title}</div>
                      <div>color/weight</div>
                    </div>
                    <div className="w-2/8 flex justify-end">
                      <span>{item.productdetails.price}</span>
                    </div>
                  </div>
                ))}                
              </div>
            </div>
            <div className="pl-8 pt-10">
              <div className="flex justify-between">
                <p>Sub total : {products.length} items </p>

                <p>Rs {totalAmount}</p>
              </div>
              <div className="flex justify-between py-2">
                <p>Shipping</p>
                <span className="">free</span>
              </div>
              <div className="flex justify-between border-t py-2">
                <p>Total</p>
                <span>Rs {totalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Checkout;
