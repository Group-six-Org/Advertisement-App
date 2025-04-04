import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useNavigate } from "react-router";
import { apiGetSingleAdvert, apiUpdateAvert } from "../services/adverts";

const EditForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ad, setAd] = useState({});

  const getAd = async () => {
    try {
      const response = await apiGetSingleAdvert(id);
      alert("Edit was successfull");
      setAd(response.data);
    } catch (error) {
      console.log(error);
      alert("failed");
    }
  };

  useEffect(() => {
    getAd();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    try {
      const response = await apiUpdateAvert(id, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          EDIT AD
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Title Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Title</label>
            <input
              name="title"
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter ad title"
              required
              defaultValue={ad.title}
            />
          </div>

          {/* Price Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Price (GHs)
            </label>
            <input
              name="price"
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
              required
              defaultValue={ad.price}
            />
          </div>

          {/* Description Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              type="text"
              required
              defaultValue={ad.description}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter ad description"
            ></textarea>
          </div>

          {/* Image Upload Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Upload Image
            </label>
            <input
              name="pictures"
              type="file"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Category</label>
            <select name="category" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Real Estate">Real Estate</option>
            </select>
          </div>

          {/* Buttons Section (centered with reduced width) */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-3/4 md:w-1/2 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 text-base"
            >
              Edit Ad
            </button>
            <Link to="/dashboard" className="w-3/4 md:w-1/2">
              <button
                type="button"
                className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 text-base"
              >
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
