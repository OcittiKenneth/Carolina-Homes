import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default class SumitProprty extends Component {
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner
            title="SUBMIT PROPERTY"
            children={
              <Link to="/rooms" className="btn-primary">
                Back to Our Rooms
              </Link>
            }
          />
        </Hero>
        <div className="wrappeir">
          <div className="form-wrapper2">
            <form>
              <h6>BASIC INFORMATION</h6>

              <div className="sideNotes">
                <p>
                  Please input the correct information of your property. Because
                  it will effect on property search.
                </p>
              </div>
              <div className="title">
                <label htmlFor="title"></label>
                <input
                  type="text"
                  name="title"
                  placeholder="Property Name"
                  novalidate
                  onChange={this.handleChange}
                />
              </div>

              <div className="status">
                <label htmlFor="status"></label>
                <input
                  type="text"
                  name="status"
                  novalidate
                  placeholder="Property Status"
                  onChange={this.handleChange}
                />
              </div>
              <div className="types">
                <label htmlFor="types"></label>
                <input
                  type="text"
                  name="types"
                  novalidate
                  placeholder="Property Types"
                  onChange={this.handleChange}
                />
              </div>
              <div className="areas">
                <label htmlFor="areas"></label>
                <input
                  type="text"
                  name="areas"
                  placeholder="Areas(sqft)"
                  onChange={this.handleChange}
                />
              </div>
              <div className="propertyPrice">
                <label htmlFor="price"></label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price(USD)"
                  onChange={this.handleChange}
                />
              </div>
              <div className="roomNo">
                <label htmlFor="rooms"></label>
                <input
                  type="text"
                  name="rooms"
                  placeholder="No. Of Rooms"
                  novalidate
                  onChange={this.handleChange}
                />
              </div>
              <h6>DESCRIPTION</h6>
              <div className="sideNotes">
                <p>
                  Need a proper description about the property. So that client
                  can easily understand about the property.
                </p>
              </div>
              <textarea
                className="message"
                placeholder="Type Description..."
                rows={7}
              ></textarea>
              <h6 className="locationHeader">PROPERTY LOCATION</h6>

              <div className="status">
                <label htmlFor="address"></label>
                <input
                  type="text"
                  name="address"
                  novalidate
                  placeholder="Property Address"
                  onChange={this.handleChange}
                />
              </div>
              <div className="types">
                <label htmlFor="state"></label>
                <input
                  type="text"
                  name="state"
                  novalidate
                  placeholder="State/City"
                  onChange={this.handleChange}
                />
              </div>
              <h6>OTHER INFORMATION OR FEATURES</h6>
              <div className="sideNotes">
                <p>
                  Put extra features and facility of the property, it will show
                  with the property.
                </p>
              </div>
              <textarea
                className="message"
                placeholder="List Here Other Neccessary Info..."
                rows={7}
              ></textarea>
              <h6>UPLOAD PHOTOS AND DOCUMENTS</h6>
              <div className="sideNotes">
                <p>
                  Please uplaod the photo of the property, please keep the photo
                  size 760X410 ratio.
                </p>
              </div>
              <p>
                Upload house photos Upload house photos Upload house photos
                Upload house photos Upload house photosUpload house photos
              </p>
              <h6>INPUT CONTACT DETAILS HERE </h6>
              <p>
                Conact details conact details conact details conact details
                conact details conact details conact details egestas.
                Nullam,egestas. Nullam,egestas. Nullam,
              </p>
              <div className="areas">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="propertyPrice">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                />
              </div>
              <div className="roomNo">
                <label htmlFor="phone"></label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  novalidate
                  onChange={this.handleChange}
                />
              </div>
              <input className="send" type="submit" value="SUBMIT PROPERTY" />
              <p className="submit">
                <b>NOTE: </b>Your Property Will Under Review For 24 Hours After
                Submission *
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }
}
