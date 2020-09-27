import React from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <div className="extras partners-center">
        <div>
          <h6 className="footerHeaders">CAROLINA HOMES</h6>
          <p className="p">
            There are many variations of dummy passages of Lorem Ipsum available
            is but the majority
          </p>
          <div>
            <p className="p">You visit our pages on the following links</p>
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
          <h6 className="footerHeaders">GET IN TOUCH</h6>
          <p className="p">Office Time: 8.00 AM - 6:00PM</p>
          <p className="p">1812 214 5687</p>
          <p className="p">info@yourweb.com</p>
          <p className="p">
            134, Cornish Building, Some Near by area, New York, USA - 34556
          </p>
        </div>
        <div>
          <h6 className="footerHeaders">QUICK LINKS</h6>
          <p className="p">Blog</p>
          <p className="p">About Our Company</p>
          <p className="p">Submit Your Property</p>
          <p className="p">Become A Member</p>
        </div>
      </div>
      <div className="copyright">
        <p className="copyrights">
          Carolina Homes © 2020 All rights reserved.
        </p>
      </div>
    </section>
  );
}
