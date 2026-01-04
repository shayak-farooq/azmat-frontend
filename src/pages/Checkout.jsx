import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { use, useEffect, useState } from "react";

function Checkout() {
  //user details
  const [user, setUser] = useState("");
  //Payment method
  const [paymentMethod, setPaymentMethod] = useState("COD");
  //products
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  //adddres
  const [addresses, setAddresses] = useState([]);
  const [addressFormData, setaddressFormData] = useState({
    country: "",
    state: "",
    city: "",
    area: "",
    building: "",
    landmark: "",
    pincode: "",
    phone: "",
  });
  function handleFormInputs(addressid) {
    setaddressFormData(addresses.find((item) => item._id === addressid));
  }
  const navigate = useNavigate();
  useEffect(() => {

    const token = localStorage.getItem("bearer");
    if (token == null) {
      navigate("/login");
      return;
    }
    fetch("http://localhost:3000/api/cart/getcart", {
      method: "GET",
      headers: {
        authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status == 401) {
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setAddresses(data.addresses);
        setaddressFormData(data.addresses[0]);
        setUser(data.name);
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
  function handleCheckOut(){
    const token = localStorage.getItem("bearer");
    if (paymentMethod == 'COD'){
      fetch('http://localhost:3000/api/orders',{
        method:"POST",
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json" 
        },
        body:JSON.stringify({
          products,
          addressFormData,
          paymentMethod
        })
      })
      .then(res=>{
        if(res.status == 201){
          navigate('/orders')
        }
        return res.json()
      })
      .then(result=> console.log(result))
    }
    console.log(addressFormData);
    console.log(paymentMethod);
    console.log(products);
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
      <main className="flex flex-col-reverse md:flex-row">
        {/* Left div */}
        <div className="flex justify-start md:justify-center w-full md:w-1/2 md:border-r border-gray-400">
          <div className="w-full md:w-2/3 px-4 md:px-8">
            <div className="">
              <h3 className="font-semibold text-l my-2">Address</h3>
              {addresses.map((item) => (
                <div
                  key={item._id}
                  className="border border-gray-300 rounded px-4 py-2 my-2"
                >
                  <button
                    onClick={() => handleFormInputs(item._id)}
                    className="hover:cursor-pointer w-full"
                  >
                    <div className="flex ">
                      <span className="font-medium capitalize">
                        {item.area}{" "}
                      </span>
                      <span>, {item.city}</span>
                    </div>
                    <div className="flex text-xs capitalize">
                      <span>{item.state} </span>
                      <span>, {item.pincode}</span>
                    </div>
                  </button>
                </div>
              ))}
              <NavLink to="/addresses" className="text-blue-500 my-2">
                <span className="underline">+ Add Address</span>
              </NavLink>
            </div>
            <div>
              <h3 className="font-semibold text-l my-2">Delivery</h3>
              <div>
                {addressFormData !== undefined ? (
                  <form>
                    <div>
                      <input
                        type="text"
                        readOnly
                        value={user}
                        className="w-full my-2 bg-white border capitalize border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        readOnly
                        value={addressFormData.phone}
                        className="w-full my-2 bg-white border capitalize border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        readOnly
                        value={addressFormData.country}
                        placeholder="full name"
                        className="w-full capitalize my-2 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        readOnly
                        value={addressFormData.state}
                        placeholder="Address"
                        className="w-full my-2 capitalize bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <input
                        type="text"
                        readOnly
                        value={addressFormData.city}
                        placeholder="City"
                        className="w-1/2 my-2 mr-2 capitalize bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                      <input
                        type="text"
                        readOnly
                        value={addressFormData.area}
                        placeholder="Area, Street, Sector"
                        className="w-1/2 my-2 capitalize bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <div className="flex justify-between">
                      <input
                        type="text"
                        readOnly
                        value={addressFormData.building}
                        placeholder="Flat / House / Building"
                        className="w-10/31 my-2 capitalize bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        required
                      />
                      <input
                        type="text"
                        readOnly
                        value={addressFormData.landmark}
                        placeholder="Landmark"
                        className="w-10/31 my-2 capitalize bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        required
                      />
                      <input
                        type="text"
                        value={addressFormData.pincode}
                        readOnly
                        placeholder="Pincode"
                        className="w-10/31 my-2 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        required
                        minLength={6}
                        maxLength={6}
                      />
                    </div>
                  </form>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-l my-2">Payment</h3>
                <p className="text-gray-500 my-2">
                  All transactions are secure and encrypted.
                </p>
                <div>
                  <div className="font-semibold w-full my-2">
                    <input
                      className="cursor-pointer"
                      type="radio"
                      name="payment"
                      value="COD"
                      id="COD"
                      checked={paymentMethod === "COD"}
                      onChange={() => setPaymentMethod("COD")}
                    />
                    <label htmlFor="COD" className="cursor-pointer">
                      
                      Cash On Delivery (COD)
                    </label>
                  </div>
                  <div className="font-semibold w-full my-2">
                    <input
                      className="cursor-pointer"
                      type="radio"
                      name="payment"
                      value="UPI"
                      id="UPI"
                      disabled
                      checked={paymentMethod === "UPI"}
                      onChange={() => setPaymentMethod("UPI")}
                    />
                    <label htmlFor="UPI" className="cursor-pointer">
                      UPI
                    </label>
                  </div>
                </div>
              </div>
              <button onClick={()=>handleCheckOut()} className="w-full my-2 bg-amber-400 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition-colors">
                {paymentMethod == "COD" ? "Place Order" : "Pay now"}
              </button>
            </div>
          </div>
        </div>
        {/* Right div */}
        <div className="flex justify-start w-full md:w-1/2 px-4 md:px-6 py-2 bg-brand">
          <div className="w-full md:w-2/3 px-2 md:px-4 py-2">
            <div className="max-h-60 flex flex-col">
              <div className="overflow-auto">
                {/* <Checkout_Card /> */}
                {products.map((item) => (
                  <div
                    key={item.productdetails._id}
                    className="flex h-20 justify-center items-center"
                  >
                    <div className="w-2/8 flex justify-center items-center h-[90%] ">
                      <div className="h-[90%] w-4/5 flex items-center justify-center ">
                        <img
                          src={`http://localhost:3000/images/${item.productdetails.productImages[0]}`}
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
