import Product from "./Product";

const Basket = ({ basket, removeFromBasket }) => {
  if (!basket || basket.length === 0) {
    return <div className="empty">Sorry, no items in basket...</div>;
  } else {
    return (
      <div>
        {basket.map((p, i) => {
          return (
            <Product
              key={i}
              kind={p.kind}
              id={p.trackId}
              name={p.trackName}
              thumbnail={p.artworkUrl100}
              price={p.trackPrice}
              longDescription={p.longDescription}
              removeFromBasket={removeFromBasket}
            />
          );
        })}
      </div>
    );
  }
};

export default Basket;
