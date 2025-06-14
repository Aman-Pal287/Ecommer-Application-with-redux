import axios from "../../api/axiosconfig";
import { loadProduct } from "../reducers/productSlice";

export const asyncLoadProduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProduct(data));
  } catch (error) {
    console.log(error);
  }
};


export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("products", product);
    dispatch(asyncLoadProduct());
  } catch (error) {
    console.log(error);
  }
};
