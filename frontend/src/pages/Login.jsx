import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../store/actions/userActions";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const LoginHandler = (user) => {
    dispatch(asyncLoginUser(user));
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="login-main">
      <form onSubmit={handleSubmit(LoginHandler)} className="login-main-form ">
        <h1 className="login-main-form-h1">Login</h1>
        <input
          {...register("email")}
          className="login-form-input"
          type="email"
          placeholder="John@email.com"
        />
        <div className="relative register-main-form-input  register-main-form-password-div ">
          <input
            {...register("password")}
            className="outline-0"
            type={showPassword ? "text" : "password"}
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute right-1.5"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button className="login-form-button">Login</button>
        <div className="flex gap-2">
          <p>Don't have an account?</p>
          <Link to="/register" className="text-blue-400">
            {" "}
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
