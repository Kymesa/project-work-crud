import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSubmitFormEdit = async (data) => {
    await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, data);
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then((p) => setProducts(p.data.data));
  }, [id]);

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-center font-semibold text-gray-700 capitalize dark:text-white">
          EDIT PRODUCT
        </h2>

        {product ? (
          <form onSubmit={handleSubmit(handleSubmitFormEdit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  defaultValue={product.name}
                  {...register("name")}
                  id="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="provider"
                >
                  provider
                </label>
                <input
                  defaultValue={product.provider}
                  {...register("provider")}
                  id="provider"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="category"
                >
                  category
                </label>
                <input
                  defaultValue={product.category}
                  {...register("category")}
                  id="category"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="price"
                >
                  price
                </label>
                <input
                  defaultValue={product.price}
                  {...register("price")}
                  id="price"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Link to={"/"}>
                <button className="px-8 mr-4 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Back
                </button>
              </Link>

              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <>
            <ul className="mt-5 space-y-3 w-[100vh]">
              <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
              <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
              <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
              <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
            </ul>
          </>
        )}
      </section>
    </>
  );
}

export default EditProduct;
