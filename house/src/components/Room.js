import React from "react";
import { Link } from "react-router-dom";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="Carolina" />
        <div className="price-top">
          <h6>${price} / month</h6>
          <h6>For Rent</h6>
        </div>
        <ul>
          <li>
            <Link to={`/rooms/${slug}`} className="btn-primary room-link">
              FEATURES
            </Link>
          </li>
        </ul>
        <p className="room-info">{name}</p>
      </div>
    </article>
  );
}
