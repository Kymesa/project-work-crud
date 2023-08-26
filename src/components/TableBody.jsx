/* eslint-disable react/prop-types */
import axios from "axios";
function TableBody({
  name,
  provider,
  category,
  price,
  id,
  products,
  setProducts,
}) {
  const handleClickDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <>
      <tbody className="text-white divide-y">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">{name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{provider}</td>
          <td className="px-6 py-4 whitespace-nowrap">{category}</td>
          <td className="px-6 py-4 whitespace-nowrap">${price}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button
              onClick={() => handleClickDelete(id)}
              className="bg-red-400"
            >
              DELETE
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TableBody;
