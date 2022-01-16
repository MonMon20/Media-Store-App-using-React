const Basket = ({ basketItems, removeFromBasket }) => {
  if (!basketItems || basketItems.length === 0) {
    return <div>Sorry, no items in basket...</div>;
  } else {
    return (
      <div>
        {basketItems.map((p, i) => {
          let trimLongDescription = p.longDescription;
          if (p.longDescription && p.longDescription.length > 300) {
            trimLongDescription = p.longDescription.substring(0, 300) + "...";
          }
          return (
            <div key={i} class="product">
              <img src={p.artworkUrl100} alt={p.trackName} />
              <div class="details">
                <h2>{p.trackName}</h2>
                <p class="price">£{p.trackPrice}</p>
                {trimLongDescription && (
                  <p class="description">{trimLongDescription}</p>
                )}
              </div>
              <div class="buttons">
                <button
                  class="remove-button"
                  onClick={() => removeFromBasket(p.trackId)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Basket;
