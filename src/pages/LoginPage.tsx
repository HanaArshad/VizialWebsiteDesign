import { FunctionComponent, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogInButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onForgotPasswordClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  return (
    <div className={styles.loginpage}>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <div className={styles.title}>
        <h1 className={styles.toBeChanged}>Safety After Dark</h1>
      </div>
      <TextField
        className={styles.inputEmailLogin}
        color="primary"
        label="Email"
        placeholder="Email"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "73.9px" }, width: "376px" }}
      />
      <TextField
        className={styles.passwordLogin}
        color="primary"
        label="Password"
        size="medium"
        placeholder="Password"
        required={true}
        variant="outlined"
        type="password"
        sx={{ "& .MuiInputBase-root": { height: "82.1px" }, width: "376px" }}
      />
      <button className={styles.loginButton} onClick={onLogInButtonClick}>
        <button className={styles.logIn}>Log In</button>
      </button>
      <button className={styles.forgotPassword} onClick={onForgotPasswordClick}>
        Forgot password?
      </button>
      <input className={styles.checkboxLogin} type="checkbox" />
      <div className={styles.rememberMe}>Remember me</div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
    </div>
  );
};

export default LoginPage;
