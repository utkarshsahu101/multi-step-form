import React, { Component } from "react";
import Confirmation from "./Confirmation";
import PersonalDetails from "./PersonalDetails";
import Success from "./Success";
import UserDetails from "./UserDetails";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      email: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      country: "",
      levelOfEducation: "",
    };
  }

  prevStep = () => {
    let { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = (params) => {
    let { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      email,
      username,
      password,
      firstName,
      lastName,
      country,
      levelOfEducation,
    } = this.state;
    const values = { email, username, password, firstName, lastName, country };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
      // do nothing
    }
    return (
      <div>
        <h1>Hello Sign Up</h1>
      </div>
    );
  }
}
