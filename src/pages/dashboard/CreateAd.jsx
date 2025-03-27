import React from "react";
import { apiAddAdvert } from "../../services/adverts";

const CreateAd = () => {
  const handleSubmit = async (event) => {
    //prevent Dedault submit behavior//
    event.preventDefault();
    // show loading indicator //
    //collect formData //
    const formData = new FormData(event.target);
    //post data to backend //

    try {
      // const response = await apiAddAdvert(formData);
      const response = await apiAddAdvert(formData);
      console.log(response);
      alert("Add was added successfully");
    } catch (error) {
      console.log(error);
      alert("failed");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Post Advertisement
        </h2>
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Title</label>
            <input
              name="title"
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter ad title"
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
                name="pictures"  // Updated to match the expected backend field name
                type="file"
                accept="image/*"  // Corrected to ensure only images can be selected
                multiple  // Allows selecting up to 3 images
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

          </div>
          {/* Category Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Category</label>
            <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="category">
            {/* <option value="Select Category">Select Category</option>               */}
              <option value="Electronics">Electronics</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Real Estate">Real Estate</option>
            </select>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700"
            >
              Submit Ad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAd;
