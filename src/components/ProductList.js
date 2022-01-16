import Product from "./Product";

const ProductList = ({ products, addToBasket }) => {
  return (
    <div id="results">
      <h2>Suggested For You</h2>

      {products.map((p, i) => {
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
    </div>
  );
};

export default ProductList;
