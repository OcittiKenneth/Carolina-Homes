import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });
  return valid;
};

const emailRegex = RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        name:${this.state.name}
        email:${this.state.email}
      `);
    } else {
      console.log("FORM INVALID ");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    console.log(name);
    console.log(value);
    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  nameHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  emailHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  messageHandler = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Contact Me</h1>
          <form action method novalidate onSubmit={this.handleSubmit}>
            <div className="name">
              <label htmlFor="name"></label>
              <input
                type="text"
                name="name"
                className={formErrors.name.length > 0 ? "errors" : null}
                placeholder="Your Name"
                novalidate
                onChange={this.handleChange}
              />
            </div>
            {formErrors.name.length > 0 && (
              <span className="errorMessage">{formErrors.name}</span>
            )}
            <div className="email">
              <label htmlFor="email"></label>
              <input
                type="text"
                name="email"
                className={formErrors.name.length > 0 ? "errors" : null}
                novalidate
                placeholder="Your Email"
                onChange={this.handleChange}
              />
            </div>
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
            <textarea
              className="message"
              placeholder="Message"
              rows={5}
            ></textarea>
            <input className="btnTxt" type="submit" value="SEND" />
          </form>
          <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: YOUR_GOOGLE_API_KEY_GOES_HERE,
})(Form);
