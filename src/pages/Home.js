import ProductList from "../components/ProductList";
import Search from "../components/Search";

const Home = ({ products, addToBasket, search, term, setTerm }) => {
  return (
    <div>
      <Search search={search} term={term} setTerm={setTerm} />
      <ProductList items={products} addToBasket={addToBasket} />
    </div>
  );
};

export default Home;
