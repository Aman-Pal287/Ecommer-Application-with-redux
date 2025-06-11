import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CreateProductHandler = (product) => {
    product.id = nanoid();

    dispatch(asyncCreateProduct(product));
    toast.success("product created!");
    navigate("/products");
  };

  return (
    <div className="flex justify-center items-center  w-100[vw] h-[100vh]">
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="register-main-form"
      >
        <h1 className="register-main-form-h1">Create Product</h1>
        <input
          {...register("title")}
          className="register-main-form-input"
          type="text"
          placeholder="title"
        />
        <input
          {...register("image")}
          className="register-main-form-input"
          type="url"
          placeholder="image-url"
        />
        <input
          {...register("description")}
          className="register-main-form-input"
          type="text"
          placeholder="description"
        />
        <input
          {...register("category")}
          className="register-main-form-input"
          type="text"
          placeholder="category"
        />

        <div className="relative register-main-form-input  register-main-form-password-div ">
          <input
            {...register("price")}
            className="outline-0"
            type="text"
            placeholder="Enter price"
          />
        </div>

        <button className="register-main-form-button">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
