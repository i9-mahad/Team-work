import { Link } from "react-router-dom";

function Blog({ Data }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

        {Data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[300px] object-cover rounded-lg"
              />

              <h1 className="text-xl font-bold mt-3">
                {item.name}
              </h1>

              <h2 className="text-green-600 font-semibold">
                ${item.price}
              </h2>

              <Link
                to={`/blog/${item.id}`}
                className="block text-center mt-4 bg-gray-800 text-white py-2 rounded text-xl"
              >
                View Detail
              </Link>
            </div>
          );
        })}

      </div>
    </>
  );
}

export default Blog;