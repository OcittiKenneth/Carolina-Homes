import React, { Component } from "react";
import defaultBcg from "../images/img1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found....</h3>
          <Link to="/rooms/" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      price,
      description,
      name,
      type,
      capacity,
      extras,
      images,
      size,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms/" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${price}</h6>
              <h6>Size : {size} SQFT</h6>
              <h6>Bedrooms : {capacity}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
