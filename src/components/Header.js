import { Link } from "react-router-dom";

const Header = (props) => {
  let count_text = "";
  if (props.itemCount > 0) {
    count_text = `(${props.itemCount})`;
  }
  return (
    <div id="header_wrapper">
      <div className="container">
        <div id="header">
          <h1>Rebecca's Media Store</h1>
          <div id="breadcrumb">
            <Link to="/" id="homelink">
              Home |&nbsp;
            </Link>
            <Link to="/about" id="aboutlink">
              About |&nbsp;
            </Link>
            <Link to="/basket" id="basketlink">
              Basket&nbsp;{count_text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
