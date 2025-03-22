import React from 'react'

const CreateAd = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 p-6">
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Post an Advertisement
      </h2>

      <form className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ad title"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Price (GHs)</label>
          <input
            type="number"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-gray-700 font-medium mb-2">Description</label>
          <textarea
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter ad description"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Upload Image</label>
          <input
            type="file"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Category</label>
          <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select a category</option>
            <option value="property">Property</option>
            <option value="cars">Cars</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-1/2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Ad
          </button>
        </div>
      </form>
    </div>
  </div>

  )
}

export default CreateAd