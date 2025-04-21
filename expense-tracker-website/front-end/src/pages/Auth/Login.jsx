import React, { useContext, useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "../../components/inputs/Inputs";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import { UserContext } from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  //Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    //Login API Calls
    try {
      //console.log("test 000");
      //console.log("test 000 API_PATHS", API_PATHS.AUTH.LOGIN);
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      //console.log("test 001");
      const { token, user } = response.data;

      //console.log("test 002");
      //console.log("test 002 token: ", token);
      //console.log("test 002 user: ", user);
      if (token) {
        //console.log("test 003");
        localStorage.setItem("token", token);
        updateUser(user);
        //console.log("test 004");
        navigate("/dashboard");
        //console.log("test 006");
      }
    } catch (error) {
      //console.log("test 007");
      if (error.response && error.response.data.message) {
        //console.log("test 008");
        setError(error.response.data.message);
        //console.log("test 009");
      } else {
        //console.log("test 010");
        setError("Something went wrong. Please try again");
        //console.log("test 011");
      }
      //console.log("test 012");
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Inputs
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="juan@example.com"
            type="text"
          />
          <Inputs
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder=""
            type="password"
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link className="font-medium text-primary underline" to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
