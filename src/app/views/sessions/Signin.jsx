import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { loginWithEmailAndPassword } from "app/redux/actions/LoginActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { StyleSignIn } from "./stylesSignIn";
import { Label } from "recharts";
const SigninSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character long")
    .required("password is required"),
});

const Signin = () => {
  // state = {
  //   email: "watson@example.com",
  //   password: "12345678",
  // };

  // handleChange = (event) => {
  //   event.persist();
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // handleSubmit = (value, { isSubmitting }) => {
  //   this.props.loginWithEmailAndPassword(value);
  // };
  let initialState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  const handleSubmit = (value, { isSubmitting }) => {
    this.props.loginWithEmailAndPassword(value);
  };
  const handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };
  const checked = () => {
    document.getElementById("formLogin").display = "none"         
  }
  return (
    <StyleSignIn>
      {/* <div
        className="auth-layout-wrap"
        
      >
        <div className="auth-content">
         
           
             
                
                  <div className="auth-logo text-center mb-4">
                    <img src="/assets/images/logo.png" alt="" />
                  </div>
                  <h1 className="mb-3 text-18">Sign In</h1>
                  <Formik
                    initialValues={state}
                    validationSchema={SigninSchema}
                    onSubmit={handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {errors.email && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            className="form-control form-control-rounded"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {errors.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <button
                          className="btn btn-rounded btn-primary w-100 my-1 mt-2"
                          type="submit"
                        >
                          Sign In
                        </button>
                      </form>
                    )}
                  </Formik>

                  <div className="mt-3 text-center">
                    <Link to="/session/forgot-password" className="text-muted">
                      <u>Forgot Password?</u>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 text-center "
                style={{
                  backgroundSize: "cover",
                  backgroundImage: "url(/assets/images/photo-long-3.jpg)",
                }}
              >
                <div className="pe-3 auth-right">
                  <Link
                    to="/session/signup"
                    className="btn btn-rounded btn-outline-primary btn-outline-email w-100 my-1 btn-icon-text"
                  >
                    <i className="i-Mail-with-At-Sign"></i> Sign up with Email
                  </Link>

                  <Button className="btn btn-rounded btn-outline-google w-100 my-1 btn-icon-text">
                    <i className="i-Google-Plus"></i> Sign up with Google
                  </Button>
                  <Button className="btn btn-rounded w-100 my-1 btn-icon-text btn-outline-facebook">
                    <i className="i-Facebook-2"></i> Sign up with Facebook
                  </Button>
                
             
            
          </div>
       
      </div> */}
      <div>
        <div className="auth-layout-wrap">
          <img src="/assets/images/logo.png" />
          <div className="selected" color-scheme="light">
            <div>
            <input
              type="radio"
              id="employeeLogin"
              name="login"
              value="employeeLogin"
              checked
              onChange={(e)=> {checked(e)}}
            />
            <label for="employeeLogin">Employee Login</label>
            </div>
            <div>
            <input
              type="radio"
              id="adminLogin"
              name="login"
              value="adminLogin"
              
            />
            <label for="adminLogin">Admin Login</label>
            </div>
          </div>
          <div id="formLogin">
                  <Formik
                    initialValues={state}
                    validationSchema={SigninSchema}
                    onSubmit={handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                         <div className="form-group">
                          <label htmlFor="name">Organization ID</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          {errors.name && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.name}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email ID</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {errors.email && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            className="form-control form-control-rounded"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {errors.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <div className="rememberBox">
                        <div >
                          <input type="checkbox"></input>
                         <label>Remember me</label>
                       </div>
                       <div className="forgot">
                       <a>
                       Forgot password?
                     </a>
                      </div>
                      </div>
                        <button
                          className="btn btn-rounded btn-primary w-100 my-1 mt-2"
                          type="submit"
                          id="btn-login"
                        >
                          Log In
                        </button>
                      </form>
                    )}
                  </Formik>
          </div>
          <div className="pe-3 auth-right">
                  <Link
                    to="/session/signup"
                    className="btn   w-100 my-1 btn-icon-text"
                    id="btn-signUpNew"
                  >
                     Sign up new company account
                  </Link>

          </div>
             
          
        </div>
      </div>
    </StyleSignIn>
  );
};

const mapStateToProps = (state) => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  user: state.user,
});

export default connect(mapStateToProps, {
  loginWithEmailAndPassword,
})(Signin);
