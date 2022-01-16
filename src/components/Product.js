const Product = ({
  name,
  price,
  thumbnail,
  addToBasket,
  id,
  longDescription,
  removeFromBasket,
}) => {
  const handleAddToBasketClick = () => {
    console.log("click");
    addToBasket(id);
  };

  let trimLongDescription = longDescription;
  if (longDescription && longDescription.length > 300) {
    trimLongDescription = longDescription.substring(0, 300) + "...";
  }

  let showRemoveButton = false;
  if (removeFromBasket) {
    showRemoveButton = true;
  }
  return (
    <div className="product">
      <img src={thumbnail} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p className="price">£{price}</p>
        {trimLongDescription && (
          <p className="description">{trimLongDescription}</p>
        )}
      </div>
      <div className="buttons">
        {showRemoveButton ? (
          <button
            className="remove-button"
            onClick={() => removeFromBasket(id)}
          >
            Remove
          </button>
        ) : (
          <button className="add-button" onClick={handleAddToBasketClick}>
            Add to Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
