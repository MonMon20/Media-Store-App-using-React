import BasketItems from "../components/Basket";
import BasketCount from "../components/BasketCount";
import BasketTotal from "../components/BasketTotal";

const Basket = ({ basket = [], removeFromBasket }) => {
  let totalPrice = 0;
  for (let i = 0; i < basket.length; i++) {
    totalPrice += basket[i].trackPrice;
  }
  totalPrice = totalPrice.toFixed(2);

  return (
    <div id="basket">
      <div className="basket_heading">
        <h2>Basket</h2>
        <BasketCount basketCount={basket.length} />
      </div>

      <BasketItems basket={basket} removeFromBasket={removeFromBasket} />
      <BasketTotal basketTotal={totalPrice} />
    </div>
  );
};

export default Basket;
