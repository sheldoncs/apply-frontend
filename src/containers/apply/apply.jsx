import React, { Component } from "react";
import { connect } from "react-redux";
import { createApolloFetch } from "apollo-fetch";

import NavigateBar from "../../components/NavigateBar/NavigateBar";
import * as actionCreators from "../../store/actions/index";
import Cover from "../../components/cover/cover";
import SideDrawer from "../../components/sideDrawer/sideDrawer";
import UploadPhoto from "../../components/uploadPhoto/uploadPhoto";
import FileInput from "../../components/fileInput/fileInput";
import DragAndDrop from "../../components/dragAndDrop/dragAndDrop";
import classes from "../../components/input/input.module.css";
import ErrorMessage from "../../components/errorMessage/errorMessage";
import { findLogin } from "../../components/uploadPhoto/data/findLogin";

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
    imageSet: false,
    showError: true,
    setImage: {
      preview: null,
      raw: null,
      testFile: "C:/Users/20003569/Desktop/photo/myphoto.png",
      base64: null,
    },
  };

  handleCover = () => {
    let saveState = { ...this.state };

    if (saveState.openCover) {
      saveState.openDrawer = false;
      saveState.openCover = false;
      saveState.showError = false;
    } else {
      saveState.openCover = true;
    }

    this.setState({ ...saveState });
  };
  componentDidMount() {
    const currentState = { ...this.state };
    currentState.username = localStorage.getItem("username");
    this.setState({ username: currentState.username });

    const fetch = createApolloFetch({
      uri: "http://localhost:4000/graphql",
    });

    fetch({
      query: `query singleLoginByUsername($username: String) {
        singleLoginByUsername(username: $username) {
          id
          username
          email
          password
          imgblob
        }
      }`,
      variables: { username: currentState.username },
    }).then((res) => {
      currentState.setImage.base64 = res.data.singleLoginByUsername.imgblob;
      this.setState({ ...currentState });
    });
  }
  handleChange = (e) => {
    let tempState = { ...this.state };

    if (e.target.files.length) {
      tempState.setImage.preview = URL.createObjectURL(e.target.files[0]);
      tempState.setImage.raw = e.target.files[0];
      tempState.imageSet = true;
      this.setState({
        setImage: tempState.setImage,
        imageSet: tempState.imageSet,
      });
    }
  };
  handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    let copyState = { ...this.state };

    formData.append("username", this.state.username);
    formData.append("selectedFile", this.state.setImage.raw);

    if (copyState.imageSet) {
      copyState.openCover = false;
      copyState.showError = false;
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
    } else {
      copyState.openCover = true;
      copyState.showError = true;
    }
    this.setState({
      openCover: copyState.openCover,
      showError: copyState.showError,
    });
  };

  handleDrawer = () => {
    let copyState = { ...this.state };
    copyState.openCover = true;
    copyState.showError = false;
    copyState.openDrawer = true;

    this.setState({
      ...copyState,
    });
  };
  render() {
    return (
      <div>
        <ErrorMessage
          showError={this.state.showError}
          show={this.state.openCover}
        >
          Click On Photo!
        </ErrorMessage>
        <SideDrawer
          clicked={this.handleCover}
          showError={this.state.showError}
          show={this.state.openCover}
          openDrawer={this.state.openDrawer}
        />
        <Cover clicked={this.handleCover} show={this.state.openCover} />
        <NavigateBar
          clicked={this.handleDrawer}
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
          Save Your New Photo
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
