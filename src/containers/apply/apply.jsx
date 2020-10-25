import React, { Component } from "react";
import NavigateBar from "../../components/NavigateBar/NavigateBar";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import Cover from "../../components/cover/cover";
import SideDrawer from "../../components/sideDrawer/sideDrawer";
import UploadPhoto from "../../components/uploadPhoto/uploadPhoto";
import FileInput from "../../components/fileInput/fileInput";
import DragAndDrop from "../../components/dragAndDrop/dragAndDrop";
import classes from "../../components/input/input.module.css";

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
    setImage: {
      preview: null,
      raw: null,
      testFile: "C:/Users/20003569/Desktop/photo/myphoto.png",
      base64: null,
    },
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
  handleChange = (e) => {
    let tempState = { ...this.state };

    if (e.target.files.length) {
      tempState.setImage.preview = URL.createObjectURL(e.target.files[0]);
      tempState.setImage.raw = e.target.files[0];

      this.setState({ setImage: tempState.setImage });
    }
  };
  handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    // for (let name in this.state.setImage.raw) {
    //   formData.append(name, this.state.setImage.raw[name]);
    //   console.log(name);
    // }
    formData.append("username", this.state.username);
    formData.append("selectedFile", this.state.setImage.raw);
    //

    fetch(" http://localhost:4000/photo", {
      method: "POST",
      // mode: "no-cors",
      // contentType: "application/json; charset=utf-8",
      // headers: {
      //   "Content-Type": "multipart/form-data,boundary=--123456",
      //   "Access-Control-Allow-Origin": "*",
      // },
      body: formData,
    }).then((response) => {
      response.json().then((result) => {
        let copyState = { ...this.state };
        copyState.setImage.base64 = result.photo;
        this.setState({ setImage: copyState.setImage });
      });
    });
  };
  render() {
    return (
      <div>
        <SideDrawer clicked={this.handleCover} show={this.state.openCover} />
        <Cover clicked={this.handleCover} show={this.state.openCover} />
        <NavigateBar
          clicked={this.handleCover}
          username={this.state.username}
          base64string={this.state.setImage.base64}
        />
        <div className={classes.dispImage}>
          <label htmlFor="upload-button">
            <UploadPhoto photo={this.state.setImage.preview} />
          </label>
        </div>
        <FileInput
          clicked={this.handleUpload}
          className="d-block mb-3 mt-20"
          change={this.handleChange}
        >
          Save Your Photo
        </FileInput>
        {/* <DragAndDrop className="d-block" /> */}
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
