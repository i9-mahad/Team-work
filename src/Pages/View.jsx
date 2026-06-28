import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function View() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="flex gap-10 ml-20">
        <img
          className="w-[500px] h-[400px] rounded-[10px] mt-20"
          src={product.images?.[0]}
          alt=""
        />

        <div className="mt-45 ">
        <h1 className="text-xl font-semibold ml-1 ">
          {product.title}
        </h1>

        <p className="text-blue-500 text-2xl font-bold mt-2 ml-2">
          ${product.price}.00
        </p>
        <p className="text-sm w-[500px] mt-3 ml-2">
          {product.description}
        </p>

        </div>

      </div>
    </>
  );
}

export default View;