import { Outlet } from "react-router-dom";
import AdminNavbar from "../admin/Components/AdminNavbar";

export default function AdminLayout() {
  return (
    <>
    <div className="flex">
    <AdminNavbar/>
      <Outlet />
    </div>
    </>
  );
}
