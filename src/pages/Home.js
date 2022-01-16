import ProductList from "../components/ProductList";
import Search from "../components/Search";

const Home = ({ products, addToBasket, search }) => {
  return (
    <div>
      <Search search={search} />
      <ProductList products={products} addToBasket={addToBasket} />
    </div>
  );
};

export default Home;
