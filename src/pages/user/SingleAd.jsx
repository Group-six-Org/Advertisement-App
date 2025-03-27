import React, { useState } from "react";
import macbook from "../../assets/macbook.jpg";
import { useEffect } from "react";
import { apiGetSingleAdvert } from "../../services/adverts";
import { useParams } from "react-router";

const AdvertDetails = () => {
  const [ad, setAd] = useState({});
  const { id } = useParams();
  const getAdd = async () => {
    try {
      const res = await apiGetSingleAdvert(id);
      setAd(res.data);
      console.log("loading was successful");
      //console.log(res.data);
    } catch (err) {
      console.log(err);
      //alert("fetch failed");
    }
  };
  useEffect(() => {
    getAdd();
  }, [id]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 h-full">
          <img
            src={`https://res.cloudinary.com/dw2xxofdt/image/upload/${ad.pictures?.[0]}`}
            alt="macbook"
            className="w-full h-full object-cover"
          />
        </div>

        {/* dosomething@info.onion */}
        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{ad.title}</h2>
            <p className="text-lg text-gray-700 mb-4">$ {ad.price}</p>
            <p className="text-gray-600 mb-6">{ad.description}</p>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertDetails;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import { apiGetSingleAdvert } from "../../services/adverts";

// const AdvertDetails = () => {
//   const [ad, setAd] = useState(null); // ✅ Use null initially to handle loading state
//   const { id } = useParams();

//   useEffect(() => {
//     const getAdd = async () => {
//       try {
//         const res = await apiGetSingleAdvert(id);
//         setAd(res.data);
//         console.log("Fetched ad details:", res.data);
//       } catch (err) {
//         console.error("Fetch failed:", err);
//       }
//     };
//     getAdd();
//   }, [id]); // ✅ Add id as a dependency

//   if (!ad) {
//     return (
//       <p className="text-center text-gray-700 text-lg">Loading ad details...</p>
//     ); // ✅ Show loading state
//   }

//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="w-1/2 h-full">
//           <img
//             src={ad.image} // ✅ Use API image
//             alt={ad.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="w-1/2 p-6 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-bold mb-2">{ad.title}</h2>{" "}
//             {/* ✅ Use API title */}
//             <p className="text-lg text-gray-700 mb-4">${ad.price}</p>{" "}
//             {/* ✅ Use API price */}
//             <p className="text-gray-600 mb-6">{ad.description}</p>{" "}
//             {/* ✅ Use API description */}
//           </div>
//           <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdvertDetails;
