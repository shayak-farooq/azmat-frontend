
function QuickView(props) {
  if (props.hidden) return null;

  return (
    <section
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
      onClick={() => props.setHidden(true)} 
    >
      {/* Card */}
      <div
        className="bg-white w-[700px] rounded-xl shadow-lg p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-lg font-semibold">Quickview</h1>
          <button
            onClick={() => props.setHidden(true)}
            className="text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex gap-6 pt-6">
          {/* Image */}
          
          <div className="relative w-1/2 border rounded-xl flex items-center justify-center p-4">
            <img
              src={`http://localhost:3000/images/${props.images[0]}`}
              alt="Product"
              className="max-h-56 object-contain"
            />
          
            {props.item.state && (
            //Todo background should be blured
            <div className="absolute top-1/2 bg-white border border-gray-400 rounded-xl py-2 px-7">
              {props.item.text}
            </div>)}
            </div>
          {/* Details */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="border-b pb-3">
              <p className="text-sm text-gray-500">Azmat</p>
              <h2 className="text-lg font-semibold">{props.title}</h2>
              <div className="flex gap-2 items-center">
                <span className="text-orange-500 font-semibold">Rs. {props.price}</span>
                {/* <span className="text-gray-400 line-through text-sm">Rs 158</span> */}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <label className="block text-sm mb-1">Weight: {props.netWeight < 3
                ? `${props.netWeight} Kg`
                : props.netWeight > 100
                ? `${props.netWeight} gm`
                : `${props.netWeight} Kg`}</label>
              </div>

              {/* <div>
                <label className="block text-sm mb-1">Quantity:</label>
                <div className="flex items-center border rounded-md w-fit">
                  <button className="px-3 py-2 text-lg">−</button>
                  <span className="px-4 py-2 border-x">1</span>
                  <button className="px-3 py-2 text-lg">+</button>
                </div>
              </div> */}
            </div>

            <button onClick={()=>{props.addToCart(props.productid)}} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickView;
