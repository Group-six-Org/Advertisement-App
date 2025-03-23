import React from "react";
// import images from "./../assets/images/blender.jpg"
// import image2 from "./../assets/images/car.jpg"

const Dashoverv = () => {
  //   return (

  //     <div>
  //          <div>

  //             <div>
  //             <h1>Latest Trending</h1>
  //             <p>Get The Best discount this festive season</p>
  //             </div>

  //             <div class="grid grid-cols-5 grid-rows-5 gap-4">
  //               <div >
  //                 <img src={images} alt="image" />
  //               </div>
  //                <div >
  //                 <img src={image2} alt="image" />
  //               </div>
  //               <div >4</div>
  //               <div class="row-start-2">5</div>
  //               <div class="row-start-2">6</div>
  //               <div class="row-start-2">7</div>
  //               <div class="row-start-2">8</div>
  //           </div>

  //          </div>

  //     </div>
  //   )

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Vendor</h1>
        <p className="text-gray-600">
          Here's a summary of your advertisements.
        </p>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {[
          { title: "Total Ads", value: 25, color: "bg-blue-500" },
          { title: "For Rent", value: 18, color: "bg-green-500" },
          { title: "For Sale", value: 5, color: "bg-yellow-500" },
          { title: "Total Views", value: 2300, color: "bg-purple-500" },
        ].map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} text-white p-6 rounded-lg shadow-md`}
          >
            <h2 className="text-xl font-semibold">{stat.title}</h2>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Ads Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Ads</h2>
        <ul>
          {[
            {
              title: "Luxury Car for Sale",
              status: "Active",
              date: "March 20, 2025",
            },
            {
              title: "Apartment for Rent",
              status: "Pending",
              date: "March 18, 2025",
            },
          ].map((ad, index) => (
            <li key={index} className="border-b py-3 flex justify-between">
              <span className="font-medium">{ad.title}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  ad.status === "Active"
                    ? "bg-green-200 text-green-700"
                    : "bg-yellow-200 text-yellow-700"
                }`}
              >
                {ad.status}
              </span>
              <span className="text-gray-500">{ad.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions Section */}
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
          Create New Ad
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700">
          Manage My Ads
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700">
          View Analytics
        </button>
      </div>
    </div>
  );
};

export default Dashoverv;
