import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/userActions";
import "./Register.css";

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
        <input
          {...register("password")}
          className="register-main-form-input"
          type="password"
          placeholder="*********"
        />
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
