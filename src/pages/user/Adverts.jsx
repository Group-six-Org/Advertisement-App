import React, { useEffect, useState } from "react";
import AddsCard from "../../components/AddsCard";
import carImage from "../../assets/imagen-lexus.jpg";
// import houseImage from "../../assets/house.jpeg";
// import ipadImage from "../../assets/iPad.webp";
// import newCar from "../../assets/newcar.jpeg";

import { apiGetAllAdverts } from "../../services/adverts";
import SingleAd from "./SingleAd";

const Adverts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [adverts, setFecthAds] = useState([]);

  const fetchAdds = async () => {
    try {
      const res = await apiGetAllAdverts();
      alert("loading was successful");
      setFecthAds(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      alert("fetch failed");
    }
  };

  useEffect(() => {
    fetchAdds();
  }, []);
  // const adverts = [
  //   { image: newCar, title: "Car@frosty.onion", category: "Cars", price: 10 },
  //   {
  //     image: houseImage,
  //     title: "personal@house.onion",
  //     category: "House",
  //     price: 20,
  //   },
  //   {
  //     image: ipadImage,
  //     title: "electronic@iPad.onion",
  //     category: "Electronic",
  //     price: 30,
  //   },
  //   {
  //     image: newCar,
  //     title: "doSomething@car.onion",
  //     category: "Car",
  //     price: 40,
  //   },
  //   {
  //     image: houseImage,
  //     title: "House@tvalley.onion",
  //     category: "House",
  //     price: 50,
  //   },
  //   {
  //     image: ipadImage,
  //     title: "new@ipad.onion",
  //     category: "Electronic",
  //     price: 10,
  //   },
  //   { image: newCar, title: "latest@car.onion", category: "Cars", price: 20 },
  //   {
  //     image: houseImage,
  //     title: "my@house.onion",
  //     category: "House",
  //     price: 30,
  //   },
  //   {
  //     image: ipadImage,
  //     title: "some@apple.ipad",
  //     category: "Electronic",
  //     price: 40,
  //   },
  //   { image: newCar, title: "that@car.onion", category: "Car", price: 50 },
  //   {
  //     image: houseImage,
  //     title: "frosty@car.onion",
  //     category: "Car",
  //     price: 10,
  //   },
  //   {
  //     image: ipadImage,
  //     title: "ipad@frosty.onion",
  //     category: "Electronic",
  //     price: 20,
  //   },
  // ];

  const categories = [
    "All",
    "Beauty Supplies",
    "Electronics",
    "Home & Kitchen",
    "Vehicles",
  ];
  const prices = ["All", "0-200", "210-400", "410-1100"];

  const filteredAdverts = adverts.filter((advert) => {
    const matchesSearch = advert.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || advert.category === selectedCategory;
    const matchesPrice =
      selectedPrice === "All" ||
      (selectedPrice === "0-200" && advert.price <= 200) ||
      (selectedPrice === "210-400" &&
        advert.price > 200 &&
        advert.price <= 400) ||
      (selectedPrice === "410-1100" && advert.price > 400);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div
      id="mainContainer"
      className="flex flex-col bg-blue-100 min-h-screen p-5"
    >
      <div>
        <div className=" custom-shape-divider-top-1701256467">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h2 id="allAdds" className="text-xl font-bold text-center mt-40">
          Browse all Ads @AdMingle.onion
        </h2>
        <div className="search-area flex flex-col align-center justify-center md:flex-row gap-4 mt-20">
          <div className="categories-side flex gap-4">
            <select
              className="p-2 border rounded"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              className="p-2 border rounded"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              {prices.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="title@search.onion"
              className="p-2 border rounded w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 p-4">
        {/* {adverts.map((advert) => (
          <AddsCard
            key={advert.id}
            image={advert.pictures[1]}
            title={advert.title}
            category={advert.category}
            price={advert.price}
          />
        ))} */}
        {filteredAdverts.map((advert) => (
          <AddsCard key={advert.id} advert={advert} />
        ))}
      </div>
      <button className="myButton">load more...</button>
      <h3 className="mt-10 text-center text-[70px] font-extrabold italic">
        Latest...
      </h3>
      <div className="mt-10">
        <img src={carImage} alt="dosomething" />
      </div>
    </div>
  );
};

export default Adverts;
