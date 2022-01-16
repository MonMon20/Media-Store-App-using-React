const Product = ({
  name,
  price,
  thumbnail,
  addToBasket,
  id,
  longDescription,
}) => {
  const handleAddToBasketClick = () => {
    console.log("click");
    addToBasket(id);
  };

  let trimLongDescription = longDescription;
  if (longDescription && longDescription.length > 300) {
    trimLongDescription = longDescription.substring(0, 300) + "...";
  }

  return (
    <div class="product">
      <img src={thumbnail} alt={name} />
      <div class="details">
        <h2>{name}</h2>
        <p class="price">£{price}</p>
        {trimLongDescription && (
          <p class="description">{trimLongDescription}</p>
        )}
      </div>
      <div class="buttons">
        <button class="add-button" onClick={handleAddToBasketClick}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
