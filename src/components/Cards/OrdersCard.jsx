import React, { useState } from "react";

function OrdersCard({order}) { 
  console.log(order);
  const [products,setProducts] = useState()
  let prod = order.productdetails.map(item => (item.productid))
  console.log(prod);
  return (
    <div className="flex w-full justify-between">
      <div>
        image
        {/* <img src="" alt="" /> */}
      </div>
      <div className="flex flex-col">
        <span>name</span>
        <span>Weight</span>
      </div>
      <div>
        <span>Price</span>
      </div>
      <div>order status</div>
      <div>
        <span>delivery Date</span>
      </div>
    </div>
  );
}

export default React.memo(OrdersCard);
