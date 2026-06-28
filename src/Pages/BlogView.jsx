import { useParams } from "react-router-dom";

function BlogView({ Badeeco }) {
  const { id } = useParams();

  const singleProduct = Badeeco.find(
    (item) => item.id === Number(id)
  );
cls
  if (!singleProduct) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <div className="  p-10 ">

        <div className=" flex w-500 gap-10  ">
          <img
            src={singleProduct.image}
            alt=""
            className="w-[600px] h-200 rounded-xl"
          />
          <img
            src={singleProduct.image2}
            alt=""
            className="w-[600px] h-200 rounded-xl  "
          />
        </div>
        <p className="text-black-600 mb-3 mt-20">
            {singleProduct.description2}
          </p>



        <div className="flex gap-20 mt-20">
          <div>
                <img
            src={singleProduct.image3}
            alt=""
            className="w-[600px] h-200 rounded-xl  "
          />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4 mt-50">
            {singleProduct.name}
          </h1>


          <p className="text-gray-600 mb-3 w-100">
            {singleProduct.description}
          </p>

          <p className="mb-3">
            Category: {singleProduct.category}
          </p>

          <p className="mb-3 text-2xl font-bold">
            Rating:  {singleProduct.rating}
          </p>
          </div>

          

        </div>

      </div>
    </>
  );
}

export default BlogView


