import { useEffect, useState } from "react";
import car from "../assets/imagen-lexus.jpg";
import style from "./AddsCard.module.css";
import { Link, useParams } from "react-router";
import { apiGetSingleAdvert } from "../services/adverts";

function AddsCard({ image, title, category, price }) {
  const { id } = useParams();
  const [add, setAdd] = useState({});

  const getAdd = async () => {
    try {
      const res = await apiGetSingleAdvert();
      alert("loading was successful");
      setAdd(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      alert("fetch failed");
    }
  };
  useEffect(getAdd(), []);
  return (
    <div className={style.addsContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.addImage}
          //src={car}
          src={`https://res.cloudinary.com/dw2xxofdt/image/upload/${image[0]}`}
          alt="dosomething@frosty.onion"
        />
      </div>
      <div className={style.addsInfo}>
        <h1>{title}</h1>
        <p>CHC {price}</p>
        <h3>{category}</h3>
        <div className={style.actions}>
          <Link to={`/adverts/${advert.id}`}>
            <button>View Detail</button>
          </Link>
          <p>Verified</p>
        </div>
      </div>
    </div>
  );
}

export default AddsCard;
