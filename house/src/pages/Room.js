import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

export default function Room() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner
          title="Our Rooms"
          children={
            <Link to="/" className="btn-primary">
              Back to Our Rooms
            </Link>
          }
        />
      </Hero>
      <RoomContainer />
    </>
  );
}
