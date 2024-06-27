import React from "react";
import logo from "./chat.png";
import {
  IconButton,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-container">
      <div className="sideLogin">
        <img src={logo} alt="logo" className="welcome-logo" />
      </div>
      <div className="userLogin-area">
        <h3>Login to your Account</h3>
        {/* <input type="text" placeholder="Enter Username/Number" />
        <input type="password" placeholder="Enter Password" /> */}
        <TextField id="standard-basic" label="Username" variant="outlined" />
        <FormControl sx={{ m: 1, width: "28ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <IconButton>
          <Button variant="outlined" size="small">
            Login
          </Button>
        </IconButton>
      </div>
    </div>
  );
};

export default LoginPage;
