function QuickView() {
    return (
        <>
            <section className="flex flex-col items-center justify-center h-screen">
                <h1>Quickview</h1>
                <div className="bg-brand flex">
                    <div>
                        <img src="" alt="Product image" />
                    </div>
                    <div className="">
                        <div>
                            <h2>Brand</h2>
                            <h2>Title</h2>
                            <span>Price</span>
                        </div>
                        <div>
                            <div>
                                <label >Weight:</label>
                                <select name="" id="">
                                    <option value="100gm">100gm</option>
                                    <option value="500gm">500gm</option>
                                    <option value="1kg">1kg</option>
                                </select>
                            </div>
                            <div>
                                <button className='px-3 py-2'>-</button>
                                <span className='border-x border-zinc-300 px-3 py-2'>2</span>
                                <button className='px-3 py-2'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuickView    