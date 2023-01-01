import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style.css";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);
  return (
    <div className="formContainer">
      <div className="formWraper">
        <h1 className="Logo">Register</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" />
          <button type="submit">Create Account</button>
        </form>
        <div className="login">
          <p>Already Have Account? </p>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
