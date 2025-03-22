//import car from "../assets/imagen-lexus.jpg";
import style from "./AddsCard.module.css";

function AddsCard({ image, title, price, category }) {
  return (
    <div className={style.addsContainer}>
      <div className={style.imageContainer}>
        <img src={image} alt="dosomething" />
      </div>
      <div className={style.addsInfo}>
        <h1>{title}</h1>
        <p>CHC {price}</p>
        <h3>{category}</h3>
        <div className={style.actions}>
          <button>View Detail</button>
          <p>Verified</p>
        </div>
      </div>
    </div>
  );
}

export default AddsCard;
