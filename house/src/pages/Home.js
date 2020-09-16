import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Partners from "../components/Partners";

import FutureRooms from "../components/FutureRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Property Listings"
          children={
            <>
              <ul>
                <li>
                  <Link to="/rooms">Our Rooms</Link>
                </li>
              </ul>
            </>
          }
        />
      </Hero>
      <FutureRooms />
      <Partners />
    </>
  );
}
