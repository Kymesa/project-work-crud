import "./App.css";
// import Table from "./components/Table";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import Skeleton from "./components/Skeleton";
import { useAxiosGet } from "./hooks/useAxiosGet";
import { Link } from "react-router-dom";
function App() {
  const { products, setProducts, error, setItems, items } = useAxiosGet(
    import.meta.env.VITE_API_URL
  );
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg"></div>
        <Link to={"/new"}>
          <button className="bg-blue-400 text-white">NEW</button>
        </Link>
        <div className="mt-2 shadow-sm border rounded-lg overflow-x-auto">
          {error ? (
            <h1>{error}</h1>
          ) : (
            <h3 className="text-white text-xl font-bold sm:text-2xl">
              Products {items}
            </h3>
          )}

          <table className="w-full table-auto text-sm text-left">
            <TableHeader />
            {products ? (
              products.map((p) => (
                <TableBody
                  products={products}
                  setProducts={setProducts}
                  id={p._id}
                  key={p._id}
                  name={p.name}
                  provider={p.provider}
                  category={p.category}
                  price={p.price}
                  setItems={setItems}
                  items={items}
                />
              ))
            ) : (
              <Skeleton />
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
