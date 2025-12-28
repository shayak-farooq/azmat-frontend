import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuCirclePlus } from "react-icons/lu";

const initialFormData = {
  country: "",
  state: "",
  city: "",
  area: "",
  building: "",
  landmark: "",
  pincode: "",
  phone: "",
};

function Addresses() {
  const navigate = useNavigate();

  const [savedData, setSavedData] = useState({});
  const [formData, setFormData] = useState(initialFormData);
  const [editingId, setEditingId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const token = localStorage.getItem("bearer");

    fetch("http://localhost:3000/api/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setSavedData(data));
  }, []);

  /* ================= HANDLERS ================= */
  const handleChange = (e) =>  setFormData({ ...formData, [e.target.name]: e.target.value });

  const openAddForm = () => {
    setIsFormOpen(!isFormOpen);
    setEditingId(null);
    setFormData(initialFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("bearer");

    const url = editingId
      ? `http://localhost:3000/api/user/address/${editingId}`
      : "http://localhost:3000/api/user/address";

    const response = await fetch(url, {
      method: editingId ? "PUT" : "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      setSavedData(data);
      setIsFormOpen(false);
      setEditingId(null);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("bearer");

    const response = await fetch(
      `http://localhost:3000/api/user/address/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      setSavedData(data);
    }
  };

  const handleEdit = (id) => {
    const address = savedData.address.find(item => item._id === id);
    const phone = savedData.phone
    console.log(phone);
    setFormData(savedData.address.find(item => item._id === id));
    setEditingId(id);
    setIsFormOpen(!isFormOpen);
    
  };
  /* ================= RENDER ================= */
  return (
    <section className="pt-24 flex flex-col items-center">
      <h1 className="text-4xl font-medium uppercase mb-12">Your addresses</h1>

      <div className="w-4/5">
        <button
          onClick={() => navigate(-1)}
          className="text-amber-600 underline mb-4"
        >
          Back
        </button>
      </div>

      {/* ================= ADDRESS LIST ================= */}
      {savedData.address?.length > 0 && (
        <div className="w-4/5 my-5">
          {savedData.address.map(item => (
            <div
              key={item._id}
              className="flex justify-between items-center p-8 my-4 border border-dotted border-zinc-300"
            >
              <div>
                <p className="capitalize">{savedData.name}</p>
                <p>{item.area}, {item.city}</p>
                <p>{item.state}, {item.country}, {item.pincode}</p>
              </div>

              <div className="flex gap-5">
                <button onClick={() => handleEdit(item._id)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= ADD ADDRESS BUTTON ================= */}
      <div className="w-4/5 p-8 border border-dotted border-zinc-300 flex justify-center">
        <button
          onClick={openAddForm}
          className="text-zinc-400 hover:text-amber-700 flex flex-col items-center"
        >
          <LuCirclePlus className="text-5xl" />
          <span className="font-bold mt-4">Add New Address</span>
        </button>
      </div>

      {/* ================= FORM ================= */}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="w-4/5 pt-10 space-y-3">
          {[
            ["country", "Country/Region"],
            ["state", "State"],
            ["city", "Town/City"],
            ["area", "Area, Street, Sector"],
            ["building", "Flat / House / Building"],
            ["landmark", "Landmark"],
            ["pincode", "Pincode"],
            ["phone", "Phone Number"],
          ].map(([name, placeholder]) => (
            <input
              key={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-1/2 my-2 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-400"
              required={["country", "state", "city", "building", "pincode", "phone"].includes(name)}
            />
          ))}

          <button className="float-right">
            {editingId ? "Update address" : "Add address"}
          </button>
        </form>
      )}
    </section>
  );
}

export default Addresses;
