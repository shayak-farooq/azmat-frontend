import SingleProduct from "../components/Cards/singleProduct"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"

function Products() {
    const [islistView, setListView] = useState(false)
    return (
        <>
            <Navbar />
            <section className="flex px-32 py-24">
                {/* left section --> filters etc */}
                <section className="w-3xs bg-black h-dvh">

                </section>
                {/* right section -->all products */}
                <section className="flex-2">
                    <div className="pb-4 border-b border-zinc-300">
                        <button onClick={() => { setListView(!islistView) }}>{islistView ? "Grid View" : "List View"}</button>
                    </div>
                    <div className="m-2 flex">
                        <div className="">
                            <img src="" alt="Product image" />
                        </div>
                        <div>
                            <h2>Name/title</h2>
                            <span>Rs:100</span>
                            <span>★★★★★</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur </p>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}
export default Products