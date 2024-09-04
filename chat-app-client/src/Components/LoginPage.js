import React, { useState } from "react";
import logo from "./chat.png";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toaster from "./Toaster";

function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [loginStatus, setLoginStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const response = await axios.post(
        "http://localhost:5000/user/login",
        data,
        config
      );
      console.log("Login: ", response.data); // modified
      setLoginStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response.data)); // modified
      navigate("/app/welcome");
    } catch (e) {
      setLoginStatus({
        msg: "Invalid User name or password",
        key: Math.random(),
      });
      setLoading(false); // modified
    }
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const response = await axios.post(
        "http://localhost:5000/user/register",
        data,
        config
      );
      console.log("Registration: ", response.data);
      setSignInStatus({ msg: "Registration successful", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response.data));
      setLoading(false);
      setShowLogin(true); // modified
    } catch (e) {
      console.log(e);
      if (e.response.status === 400) {
        // modified
        setSignInStatus({
          msg: "User with this Email already exists",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <div className="login-container">
        <div className="sideLogin">
          <img src={logo} alt="logo" className="welcome-logo" />
        </div>
        <div className="userLogin-area">
          {showLogin && (
            <div className="login-area">
              <h3 className="login-text">Login to your Account</h3>
              <TextField
                onChange={changeHandler}
                id="statndard-basic"
                label="Enter User Name"
                variant="outlined"
                color="secondary"
                name="name"
              />
              <TextField
                onChange={changeHandler}
                id="outlined-password-input"
                label="password"
                type="password"
                autoComplete="current-password"
                color="secondary"
                name="password"
              />
              <Button
                variant="outlined"
                color="secondary"
                onClick={loginHandler}
              >
                Login
              </Button>
              <p>
                Don't have an Account ?{" "}
                <span
                  className="hyper"
                  onClick={() => {
                    setShowLogin(false);
                  }}
                >
                  SignUp
                </span>
              </p>
              {loginStatus ? (
                <Toaster key={loginStatus.key} message={loginStatus.msg} />
              ) : null}
            </div>
          )}

          {!showLogin && (
            <div className="login-area">
              <h3 className="login-text">Create a New Account</h3>
              <TextField
                onChange={changeHandler}
                id="standard-basic"
                label="Enter User Name"
                variant="outlined"
                color="secondary"
                name="name"
                helperText=""
              />
              <TextField
                onChange={changeHandler}
                id="standard-basic"
                label="Enter your Email"
                variant="outlined"
                color="secondary"
                name="email"
              />
              <TextField
                onChange={changeHandler}
                id="oulined-password-input"
                label="Password"
                type="password" // modified
                autoComplete="current-password"
                color="secondary"
                name="password"
              />
              <Button
                variant="outlined"
                color="secondary"
                onClick={signUpHandler}
              >
                Sign Up
              </Button>
              <p>
                Already have an Account ?{" "}
                <span
                  className="hyper"
                  onClick={() => {
                    setShowLogin(true);
                  }}
                >
                  Login
                </span>
              </p>
              {/* {signInStatus ? (
                <Toaster key={signInStatus.key} message={signInStatus.msg} />
              ) : null} */}
              {signInStatus && ( // modified
                <Toaster key={signInStatus.key} message={signInStatus.msg} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;

// import React from "react";
// import logo from "./chat.png";
// import {
//   IconButton,
//   Button,
//   TextField,
//   FormControl,
//   InputLabel,
//   OutlinedInput,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useNavigate } from 'react-router-dom';
// import LoginPage from "./LoginPage";

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <div className="login-container">
//       <div className="sideLogin">
//         <img src={logo} alt="logo" className="welcome-logo" />
//       </div>
//       <div className="userLogin-area">
//         <h3>Login to your Account</h3>
//         {/* <input type="text" placeholder="Enter Username/Number" />
//         <input type="password" placeholder="Enter Password" /> */}
//         <TextField id="standard-basic" label="Username" variant="outlined" />
//         <FormControl sx={{ m: 1, width: "28ch" }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">
//             Password
//           </InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={showPassword ? "text" : "password"}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//         </FormControl>
//         <IconButton>
//           <Button variant="outlined" size="small">
//             Login
//           </Button>
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
