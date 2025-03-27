import React from "react";
import macbook from "../../assets/macbook.jpg";

const AdvertDetails = () => {
  // if (!advert)
  //   return <p className="text-center text-xl">No advert selected.</p>;

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-1/2 h-full">
          <img
            src={macbook}
            alt="macbook"
            className="w-full h-full object-cover"
          />
        </div>

        {/* dosomething@info.onion */}
        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Apple Macbook Pro</h2>
            <p className="text-lg text-gray-700 mb-4">$ 200.0</p>
            <p className="text-gray-600 mb-6">This is a fake@macbook.onion</p>
          </div>
          <button className="add-to-cart" onClick={() => onAddToCart(advert)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertDetails;
