function QuickView({ hidden, setHidden }) {
  return (
    <>
      <section
        className={hidden ? "hidden" : "absolute inset-0 bg-black/40 z-10"}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-brand w-1/3 h-1/2 p-3 rounded-xl">
            <div className=" flex justify-between border-b border-gray-300">
              <h1>Quickview</h1>
              <button
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                X
              </button>
            </div>

            <div className="flex pt-3">
              <div className="border border-gray-300 rounded-xl w-1/2 ">
                <img src="" alt="Product image" />
              </div>
              <div className="w-1/2 border">
                <div className="border-b">
                  <h2 className="">Brand</h2>
                  <h2>Title</h2>
                  <span>Price</span>
                </div>
                <div>
                  <div>
                    <label>Weight:</label>
                    <select name="" id="">
                      <option value="100gm">100gm</option>
                      <option value="500gm">500gm</option>
                      <option value="1kg">1kg</option>
                    </select>
                  </div>
                  <div>
                    <button className="px-3 py-2">-</button>
                    <span className="border-x border-zinc-300 px-3 py-2">
                      2
                    </span>
                    <button className="px-3 py-2">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuickView;
