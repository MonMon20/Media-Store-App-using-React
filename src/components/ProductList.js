import Product from "./Product";

const ProductList = ({ items = [], addToBasket, currentPageNumber }) => {
  return (
    <div id="results">
      <div className="homepage_header">
        <h2>Suggested For You</h2>
        <span>Page: {currentPageNumber}</span>
      </div>

      {items &&
        items.map((item, index) => {
          if (!item.hidden) {
            return (
              <Product
                key={index}
                kind={item.kind}
                id={item.trackId}
                name={item.trackName}
                thumbnail={item.artworkUrl100}
                price={item.trackPrice}
                longDescription={item.longDescription}
                addToBasket={addToBasket}
              />
            );
          } else {
            return null;
          }
        })}

      {items && items.length === 0 && (
        <div className="empty">No items found...</div>
      )}
    </div>
  );
};

export default ProductList;
