import React, { Component } from "react";
import Input from "../../components/input/input";
import classes from "../../components/input/input.module.css";
import Button from "../../components/button/default/button";
import FacebookButton from "../../components/button/facebook/button";
import GoogleButton from "../../components/button/google/button";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import NavigationItems from "../../components/navigationItems/NavigationItems";
import logo from "../../assets/user.png";
import FormData from "../../components/formdata/jsx/formdata";
import ComponentMessage from "../../components/message/message";

class Login extends Component {
  state = {
    loginForm: {
      username: {
        elementtype: "input",
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
      email: {
        elementtype: "input",
        visibility: "hidden",
        elementConfig: { type: "text", placeholder: "email" },
        value: "",
        validation: {
          required: true,
        },
        exist: false,
        valid: false,
        touched: false,
        regExpression: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      },
      password: {
        elementtype: "input",
        elementConfig: { type: "password", placeholder: "Password" },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        exist: false,
        regExpression: /^[A-Za-z0-9]+\w+[^A-Za-z0-9]+\d{2}$/,
        message: "Password Sample Format:Robin@25",
      },
    },
    hasAuthenticated: false,
    isRegistering: false,
    saveActivated: false,
    mounted: false,
  };
  authorizeHandler = (auth) => {
    console.log(auth);
  };
  buttonHandler = (auth) => {
    let currentState = { ...this.state };
    currentState.hasAuthenticated = auth;

    currentState.saveActivated = true;
    this.setState({
      hasAuthenticated: currentState.hasAuthenticated,
      saveActivated: currentState.saveActivated,
    });
  };
  // orderHandler = (event) => {
  //   event.preventDefault();
  //   console.log("submit");
  //   const formData = {};

  //   // for (let formElementIdentifier in this.state.loginForm) {
  //   //   formData[formElementIdentifier] = this.state.loginForm[
  //   //     formElementIdentifier
  //   //   ].value;
  //   // }
  //   // console.log(formData);
  //   // if (this.props.formIsValid) {
  //   //   this.props.history.push("/");
  //   // }
  // };
  navigationHandler = (option) => {
    const updatedOrderForm = { ...this.state.loginForm };
    if (option === "register") {
      this.props.onRegistering(true, "hidden", "hidden");
      updatedOrderForm.email.visibility = "visible";
    } else {
      this.props.onRegistering(false, "visible", "visible");
      updatedOrderForm.email.visibility = "hidden";
    }
    this.setState({ loginForm: updatedOrderForm });
  };

  inputChangeHandler = (event, inputIdentifier) => {
    /*Cloned*/

    const updatedOrderForm = { ...this.state.loginForm };
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
    const currentState = { ...this.state };
    currentState.saveActivated = false;
    /*Cloned*/

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation,
      updatedFormElement.regExpression
    );

    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    let isRegistering = updatedFormElement.isRegistering;

    for (let inputIdentifier in updatedOrderForm) {
      if (!this.props.isRegistering) {
        if (inputIdentifier != "email") {
          formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
      } else {
        formIsValid =
          updatedOrderForm[inputIdentifier].valid &&
          formIsValid &&
          isRegistering;
      }
    }

    this.props.onLoginFormIsValid(formIsValid);
    let credObj = null;

    if (formIsValid) {
      credObj = {
        username: updatedOrderForm["username"].value,
        password: updatedOrderForm["password"].value,
        email: updatedOrderForm["email"].value,
      };

      this.props.onSaveCredentials(credObj);
    }
    this.setState({
      loginForm: updatedOrderForm,
      formIsValid: formIsValid,
      saveActivated: currentState.saveActivated,
    });
  };
  checkValidity(value, rules, regex) {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minlength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxlength && isValid;
    }

    const testExpress = new RegExp(regex);
    let regexValid = testExpress.test(value);
    isValid = regexValid && isValid;

    return isValid;
  }
  componentDidMount() {
    let currentState = { ...this.state };
    currentState.mounted = true;
    this.setState({ mounted: currentState.mounted });
  }

  loginHandler = (event) => {
    event.preventDefault();
    let data = {
      username: this.state.loginForm.username.value,
      password: this.state.loginForm.password.value,
    };

    fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        response.json().then((result) => {
          console.log(result);
          if (result.auth === true) {
            localStorage.setItem("token", result.token);
            localStorage.setItem(
              "username",
              this.state.loginForm.username.value
            );
            this.props.onLoginAuthenticated(
              result.auth,
              this.state.loginForm.username.value
            );
            this.props.history.push("/apply");
          }
        });
      })
      .catch((error) => console.log("Error:", error));
  };
  render() {
    // if (!this.state.mounted) {
    let signInText = "Sign In";
    let divider = null;
    let message = null;

    if (!this.state.hasAuthenticated && this.state.saveActivated) {
      message = "Invalid User!";
    }

    const formElementsArray = [];
    let dividerClasses = [classes.or];

    if (this.props.google == "visible") {
      dividerClasses.push(classes.ShowDivider);
    } else if (this.props.google == "hidden") {
      dividerClasses.push(classes.HideDivider);
      signInText = "Register";
    }
    divider = <div className={dividerClasses.join(" ")}>--or--</div>;

    for (let key in this.state.loginForm) {
      formElementsArray.push({ id: key, config: this.state.loginForm[key] });
    }

    let loginForm = formElementsArray.map((pairs) => {
      return (
        <React.Fragment key={pairs.id}>
          <div key={pairs.id}>
            <Input
              key={pairs.id}
              changed={(event) => {
                this.inputChangeHandler(event, pairs.id);
              }}
              visibility={pairs.config.visibility}
              elementType={pairs.config.elementtype}
              elementConfig={pairs.config.elementConfig}
              elementName={pairs.id}
            />
          </div>
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        <NavigationItems
          clicked={(options) => this.navigationHandler(options)}
        ></NavigationItems>

        <form
          onSubmit={this.loginHandler}
          // method="POST"
          // action="http://localhost:4000/login"
        >
          <div className={classes.Input}>
            <div className={classes.dispImage}>
              <img src={logo} />
            </div>
            <div>
              <ComponentMessage>{message}</ComponentMessage>
            </div>
            {loginForm}
            <div className={classes.buttonContainer}>
              <Button
                clicked={this.buttonHandler}
                credentials={this.props.credentials}
              >
                {signInText}
              </Button>
              {divider}
              <FacebookButton visible={this.props.facebook}>
                Facebook
              </FacebookButton>
              <GoogleButton visible={this.props.google}>Google</GoogleButton>
              {this.props.formIsValid && (
                <FormData
                  // authorized={(authorize) => this.authorizeHandler(authorize)}
                  credentials={this.props.credentials}
                />
              )}
            </div>
          </div>
        </form>
      </React.Fragment>
    );
    // }
  }
}
const mapStateToProps = (state) => {
  return {
    credentials: state.credentials,
    formIsValid: state.formIsValid,
    loginAuthenticated: state.loginAuthenticated,
    isRegistering: state.isRegistering,
    facebook: state.facebook,
    google: state.google,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSaveCredentials: (saveCreds) =>
      dispatch(actionCreators.saveCredentials(saveCreds)),
    onLoginFormIsValid: (isValid) =>
      dispatch(actionCreators.loginFormIsValid(isValid)),
    onLoginAuthenticated: (isAuth, username) =>
      dispatch(actionCreators.loginAuthenticated(isAuth, username)),
    onRegistering: (isRegistering, facebookVisible, googleVisible) =>
      dispatch(
        actionCreators.formIsRegistering(
          isRegistering,
          facebookVisible,
          googleVisible
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
