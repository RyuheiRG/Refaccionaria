import logoCar from "./img/logo-car.png";
import logoSearch from "./img/search-logo.png";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { CartProvider } from "./context/cart";

function App() {
  return (
    <CartProvider>
      <Header logoCar={logoCar} logoSearch={logoSearch} />
      <Main />
      <Footer />
    </CartProvider>
  );
}

export default App;
