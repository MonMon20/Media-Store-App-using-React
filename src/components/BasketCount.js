const BasketCount = ({ count }) => {
  let text = "";
  if (count === 1) {
    text = "1 item";
  } else if (count > 1) {
    text = `${count} items`;
  }
  return <div id="basketcount">{text}</div>;
};

export default BasketCount;
