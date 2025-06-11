import { useSelector } from "react-redux";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  console.log(products);

  const renderProducts = products.map((product) => {
    return (
      <div key={product.id} className="products-main-card">
        <div className="products-main-card-image-div ">
          <img
            className="products-main-card-image-div-image "
            src={product.image}
            alt=""
          />
        </div>
        <h1>{product.title}</h1>
        <h2 className="text-green-600">${product.price}</h2>
        <p>{product.description}</p>
        <button className="products-main-card-cart-btn bg-green-500">
          Add to cart
        </button>
        <Link  to={`/product/${product.id}`} className="px-4 py-2 bg-amber-300 rounded text-center ">
          More Info
        </Link>
      </div>
    );
  });

  return products ? (
    <div className="products-main ">{renderProducts}</div>
  ) : (
    "loading"
  );
};

export default Products;
