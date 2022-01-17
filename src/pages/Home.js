import ProductList from "../components/ProductList";
import Search from "../components/Search";

const Home = ({
  products,
  addToBasket,
  search,
  term,
  setTerm,
  setCurrentPageNumber,
  currentPageNumber,
  hasMoreProducts,
}) => {
  const previousClickHandler = () => {
    setCurrentPageNumber(currentPageNumber - 1);
  };

  const nextClickHandler = () => {
    setCurrentPageNumber(currentPageNumber + 1);
  };

  return (
    <div>
      <Search search={search} term={term} setTerm={setTerm} />
      <ProductList
        items={products}
        addToBasket={addToBasket}
        currentPageNumber={currentPageNumber}
      />
      <div className="pagination">
        <div
          className={currentPageNumber === 1 ? "previous disabled" : "previous"}
          onClick={previousClickHandler}
        >
          &laquo; Previous
        </div>
        <div
          className={hasMoreProducts ? "next" : "next disabled"}
          onClick={nextClickHandler}
        >
          Next &raquo;
        </div>
      </div>
    </div>
  );
};

export default Home;
