import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../admin/Components/AdminNavbar";
import { useState,useEffect } from "react";

export default function AdminLayout() {
  const [authorized, setAuthorized] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("bearer");
    if (!token) {
      if (!token) {
        setAuthorized(false);
        return;
      }
    }
    fetch("http://localhost:3000/api/admin/login", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      setAuthorized(response.status == 200)
    })
    .catch(() => setAuthorized(false));
  }, []);

  if (authorized === null) {
    return <div className="p-6">Checking admin access...</div>;
  }
  if (!authorized) {
    return navigate('/')
  }
  return (
    <>
      <div className="flex">
        <AdminNavbar />
        <Outlet />
      </div>
    </>
  );
}
