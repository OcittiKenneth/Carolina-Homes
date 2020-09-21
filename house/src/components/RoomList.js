import React from "react";
import Room from "./Room";

export default function RoomList({ rooms }) {
  if (rooms === null) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item, index) => {
          return <Room key={index} room={item} />;
        })}
      </div>
    </section>
  );
}
