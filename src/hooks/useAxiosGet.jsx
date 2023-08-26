// eslint-disable-next-line react-hooks/exhaustive-deps
import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosGet(url) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  const getProducts = async (API) => {
    await axios
      .get(API)
      .then((p) => setProducts(p.data.data))
      .catch((e) => setError(e));
  };

  useEffect(() => {
    getProducts(url);
  }, [url]);

  return { products, setProducts, error };
}

export { useAxiosGet };
