import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../store/actions/userActions";
import "./Login.css";
const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const LoginHandler = (user) => {
    dispatch(asyncLoginUser(user));
  };

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
        <input
          {...register("password")}
          className="login-form-input"
          type="password"
          placeholder="*********"
        />
        <button className="login-form-button">
          Login
        </button>
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
