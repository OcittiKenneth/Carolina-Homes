import React, { Component } from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";

import Title from "./Title";

export default class Partners extends Component {
  state = {
    partners: [
      {
        icon: <FaCocktail />,
        title: "FreeCodeCamp",
        info:
          "Builds the app for production to the build folder. It correctly bundles It correctly bundles It correctly bundles It correctly bundles ",
      },
      {
        icon: <FaHiking />,
        title: "Gulu city",
        info:
          "Builds the app for production to the build folder. It correctly bundles It correctly bundles It correctly bundles It correctly bundles ",
      },
      {
        icon: <FaBeer />,
        title: "Everbest",
        info:
          "Builds the app for production to the build folder. It correctly bundles It correctly bundles It correctly bundles It correctly bundles ",
      },
      {
        icon: <FaShuttleVan />,
        title: "Refactory",
        info:
          "Builds the app for production to the build folder. It correctly bundles It correctly bundles It correctly bundles It correctly bundles ",
      },
    ],
  };
  render() {
    return (
      <section className="partners ">
        <hr />

        <Title title="Our Partners" />
        <div className="partners-center">
          {this.state.partners.map((item, index) => {
            return (
              <article key={index} className="partner">
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
