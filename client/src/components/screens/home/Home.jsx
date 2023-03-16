import { useState, useEffect } from "react";
import { httpGetAllProducts } from "../../hooks/requests";
import { FAQs, MainHeader, Programs, Testimonials } from "../../molecules";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchingProducts() {
      const fetchedProducts = await httpGetAllProducts();
      setProducts(fetchedProducts);
    }

    fetchingProducts();
  }, []);

  console.log({ products });
  return (
    <div>
      <MainHeader />
      <Programs />
      <FAQs />
      <Testimonials />
    </div>
  );
}

export default Home;
