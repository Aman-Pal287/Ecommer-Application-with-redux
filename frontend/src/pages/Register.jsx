import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/userActions";
import "./Register.css";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    console.log(user);
    dispatch(asyncRegisterUser(user));
    reset();
    navigate("/login");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="register-main">
      <form
        onSubmit={handleSubmit(RegisterHandler)}
        className="register-main-form"
      >
        <h1 className="register-main-form-h1">Register</h1>
        <input
          {...register("username")}
          className="register-main-form-input"
          type="text"
          placeholder="John-doe"
        />
        <input
          {...register("email")}
          className="register-main-form-input"
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

        <button className="register-main-form-button">Register</button>
        <div className="flex gap-2">
          <p>Already have an account ?</p>
          <Link to="/login" className="text-blue-400">
            {" "}
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
