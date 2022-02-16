const BasketCount = ({ basketCount }) => {
  let text = "";
  if (basketCount === 1) {
    text = "1 item";
  } else if (basketCount > 1) {
    text = `${basketCount} items`;
  }
  return <div id="basketcount">{text}</div>;
};

export default BasketCount;
