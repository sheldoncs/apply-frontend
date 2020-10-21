import React, { Component } from "react";
import NavigateBar from "../../components/NavigateBar/NavigateBar";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import Cover from "../../components/cover/cover";
import SideDrawer from "../../components/sideDrawer/sideDrawer";

class Apply extends Component {
  state = {
    applyForm: {
      general: {
        citizenship: {
          elementtype: "select",
          visibility: "visible",
          elementConfig: { type: "text", placeholder: "User Name" },
          value: "",
          validation: {
            required: true,
          },
          exist: false,
          valid: false,
          touched: false,
          regExpression: /^[A-Za-z][A-Za-z_0-9]*$/,
        },
        currentLocation: {
          elementtype: "select",
          elementconfig: {
            selectoptions: [],
          },
          value: "",
          validation: { required: true },
          valid: true,
        },
        gender: {
          elementtype: "select",
          elementconfig: {
            selectoptions: [
              { value: "Male", displayValue: "Male" },
              { value: "Female", displayValue: "Female" },
            ],
          },
          value: "Male",
          validation: { required: true },
          valid: true,
        },
        phoneNumber: {
          elementtype: "input",
          elementconfig: { type: "text", placeholder: "Phone Number" },
          value: "",
          validation: { required: true },
          valid: true,
        },
      },
    },
    username: "",
    openCover: false,
    openDrawer: false,
  };
  handleCover = () => {
    let saveState = { ...this.state };
    saveState.openCover = !saveState.openCover;
    this.setState({ openCover: saveState.openCover });
  };
  componentDidMount() {
    const currentState = { ...this.state };
    currentState.username = localStorage.getItem("username");
    this.setState({ username: currentState.username });
  }

  render() {
    return (
      <div>
        <SideDrawer clicked={this.handleCover} show={this.state.openCover} />
        <Cover clicked={this.handleCover} show={this.state.openCover} />
        <NavigateBar
          clicked={this.handleCover}
          username={this.state.username}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginAuthenticated: state.loginAuthenticated,
    username: state.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoginAuthenticated: (isAuth, username) =>
      dispatch(actionCreators.loginAuthenticated(isAuth, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Apply);
