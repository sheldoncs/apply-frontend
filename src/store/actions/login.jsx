import * as actionTypes from "./actionTypes";

export const saveCredentials = (saveCredentials) => {
  return { type: actionTypes.SAVE_CREDENTIALS, credentials: saveCredentials };
};
export const loginFormIsValid = (isValid) => {
  return {
    type: actionTypes.LOGIN_FORM_IS_VALID,
    formIsValid: isValid,
  };
};
export const formIsRegistering = (isRegistering, fbVisible, glVisible) => {
  return {
    type: actionTypes.IS_REGISTERING,
    isRegistering: isRegistering,
    facebookVisible: fbVisible,
    googleVisible: glVisible,
  };
};
export const loginAuthenticated = (isAuth) => {
  return {
    type: actionTypes.LOGIN_AUTHENTICATED,
    loginAuthenticated: isAuth,
  };
};
