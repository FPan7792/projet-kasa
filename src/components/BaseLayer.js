// Layout componenets
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const BaseLayer = (props) => {
  return (
    <div className="app_container">
      <Header />
      <div className="pages_container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayer;
