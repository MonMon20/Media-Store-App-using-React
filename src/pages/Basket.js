import BasketItems from "../components/Basket";
import BasketCount from "../components/BasketCount";
import BasketTotal from "../components/BasketTotal";

const Basket = ({ basketItems, removeFromBasket }) => {
  let totalPrice = 0;
  for (let i = 0; i < basketItems.length; i++) {
    totalPrice += basketItems[i].trackPrice;
  }

  return (
    <div id="basket">
      <h2>Basket</h2>
      <BasketCount count={basketItems.length} />
      <BasketItems
        basketItems={basketItems}
        removeFromBasket={removeFromBasket}
      />
      <BasketTotal totalPrice={totalPrice} />
    </div>
  );
};

export default Basket;
