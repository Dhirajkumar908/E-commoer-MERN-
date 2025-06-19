import { useState, useEffect } from "react";
import API from "../api/api";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const token = localStorage.getItem("token");

  const fetchProduct = () => {
    API.get("/list_product", {
      headers: { Authorization: token },
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.error("Failed to fetch product", e.response?.data?.message);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleChanges = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    API.post("/addproduct", data, {
      headers: { Authorization: token },
    })
      .then((res) => {
        alert("Product added: " + res.data.message);
        setForm({
          name: "",
          description: "",
          price: "",
          category: "",
          image: null,
        });
        fetchProduct();
      })
      .catch((e) => {
        console.error("Failed to add product", e.response?.data?.message || e.message);
      });
  };

  const handleDelete = async (id) => {
    try {
      const res = await API.delete(`/product/delete/${id}`,{headers:{Authorization:token}});
      alert(res.data.message);
      fetchProduct(); // Refresh the list after deletion
    } catch (e) {
      alert(e.response?.data?.message || e.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Product Dashboard</h2>

      {/* Form */}
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChanges}
          placeholder="Product Name"
          required
          className="border px-3 py-2 rounded"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChanges}
          placeholder="Product price"
          required
          className="border px-3 py-2 rounded"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChanges}
          placeholder="Product category"
          required
          className="border px-3 py-2 rounded"
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChanges}
          className="border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChanges}
          placeholder="Product description"
          required
          className="border px-3 py-2 rounded md:col-span-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded md:col-span-2"
        >
          Add
        </button>
      </form>

      {/* Product Table */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod._id}>
              <td className="p-2 border">
                <img
                  src={`http://localhost:3000/${prod.image}`}
                  className="w-16 h-16 object-cover"
                  alt={prod.name}
                />
              </td>
              <td className="p-2 border">{prod.name}</td>
              <td className="p-2 border">₹{prod.price}</td>
              <td className="p-2 border">{prod.category}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleDelete(prod._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
