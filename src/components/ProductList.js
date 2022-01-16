import Product from "./Product";

const ProductList = ({ items = [], addToBasket }) => {
  return (
    <div id="results">
      <h2>Suggested For You</h2>

      {items &&
        items.map((p, i) => {
          if (!p.hidden) {
            return (
              <Product
                key={i}
                kind={p.kind}
                id={p.trackId}
                name={p.trackName}
                thumbnail={p.artworkUrl100}
                price={p.trackPrice}
                longDescription={p.longDescription}
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
