import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="formContainer">
      <div className="formWraper">
        <h1 className="Logo">Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <div className="login">
          <p>No Have Account? </p>
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
