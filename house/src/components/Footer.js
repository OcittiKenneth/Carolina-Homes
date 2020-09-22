import React from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <div className="extras partners-center">
        <div>
          <h6>CAROLINA HOMES</h6>
          <p>
            There are many variations of dummy passages of Lorem Ipsum available
            is but the majority
          </p>
          <div>
            <p>You visit our pages on the following links</p>
            <span>
              <FaBeer />
            </span>
            <span>
              <FaCocktail />
            </span>
            <span>
              <FaHiking />
            </span>
          </div>
        </div>
        <div>
          <h6>GET IN TOUCH</h6>
          <p>Office Time: 8.00 AM - 6:00PM</p>
          <p>1812 214 5687</p>
          <p>info@yourweb.com</p>
          <p>134, Cornish Building, Some Near by area, New York, USA - 34556</p>
        </div>
        <div>
          <h6>QUICK LINKS</h6>
          <p>Blog</p>
          <p>About Our Company</p>
          <p>Submit Your Property</p>
          <p>Become A Member</p>
        </div>
        <hr />
        <div>
          <p>Carolina Homes © 2020 All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
