import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";
import { IoPricetagsSharp } from "react-icons/io5";
import { TbBrandAppgallery } from "react-icons/tb";

function AdminNavbar() {
  const Navigate = useNavigate()
  function handleLogout(){
    localStorage.removeItem('bearer')
    Navigate('/')
  }
  return (
    <>
      <nav className="w-1/5 h-screen p-2 bg-gray-200">
        <div className="flex justify-between">
        <h6 className="text-2xl">Azmat</h6>
        <button className='lg:hidden ml-3' onClick={()=>{setSwipeSlider(!swipeSlider)}}><GiHamburgerMenu /></button>
        </div>
        <div>
          <ul>
            <NavLink to="/admin">
              <li className="flex item-center text-xl border-b border-zinc-300 py-3 gap-2">
                <AiFillDashboard className="m-1" />
                <span className="">Dashboard</span>
              </li>
            </NavLink>
            <NavLink to="/admin/products">
              <li className="flex item-center text-xl border-b border-zinc-300 py-3 gap-2">
                <IoPricetagsSharp className="m-1" />
                <span>Product</span>
              </li>
            </NavLink>
            <NavLink to="/admin/orders">
              <li className="flex item-center text-xl border-b border-zinc-300 py-3 gap-2">
                <TbBrandAppgallery className="m-1" />
                <span>Orders</span>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="flex item-center text-xl border-b border-zinc-300 py-3 gap-2">
          <button className="hover:cursor-pointer" onClick={()=>{handleLogout()}} >Logout</button>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
