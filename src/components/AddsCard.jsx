import { useEffect, useState } from "react";
import car from "../assets/imagen-lexus.jpg";
import style from "./AddsCard.module.css";
import { Link, useParams } from "react-router";
import { apiGetSingleAdvert } from "../services/adverts";

function AddsCard({ advert }) {
  const { id } = useParams();
  const [add, setAdd] = useState({});

  return (
    <div className={style.addsContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.addImage}
          //src={car}
          src={`https://res.cloudinary.com/dw2xxofdt/image/upload/${advert.pictures?.[0]}`}
          alt="dosomething@frosty.onion"
        />
      </div>
      <div className={style.addsInfo}>
        <h1>{advert.title}</h1>
        <p>CHC {advert.price}</p>
        <h3>{advert.category}</h3>
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
