import Footer from "./components/Footer/Footer";
import FunctionBar from "./components/FunctionBar/FunctionBar";
import MoreProducts from "./components/MoreProducts/MoreProducts";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  return (
    <>
      <TopBar />
      <FunctionBar Items_No={0} />
      <NavBar />
      <Product />
      <MoreProducts />
      <Footer />
    </>
  );
};

export default App;
