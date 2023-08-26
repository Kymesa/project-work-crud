/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function TableBody({
  name,
  provider,
  category,
  price,
  id,
  products,
  setProducts,
  setItems,
  items,
}) {
  const handleClickDelete = async (id) => {
    Swal.fire({
      title: "Estas segudo?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
        setProducts(products.filter((p) => p._id !== id));
        setItems(items - 1);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
            <Link to={"/edit/" + id}>
              <button className="bg-blue-400 text-white mr-4">EDIT</button>
            </Link>
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
