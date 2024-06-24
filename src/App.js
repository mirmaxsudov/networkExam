import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CoffeeDeliveryHome from "./pages/CoffeeDeliveryHome";
import CoffeeDeliveryCheckout from "./pages/CoffeeDeliveryCheckout";
import CoffeeDeliveryCheckoutFil from "./pages/CoffeeDeliveryCheckoutFil";
import CoffeeDeliverySuccess from "./pages/CoffeeDeliverySuccess";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/coffee-delivery-checkout":
        title = "";
        metaDescription = "";
        break;
      case "/coffee-delivery-checkout-filled":
        title = "";
        metaDescription = "";
        break;
      case "/coffee-delivery-success":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CoffeeDeliveryHome />} />
      <Route
        path="/coffee-delivery-checkout"
        element={<CoffeeDeliveryCheckout />}
      />
      <Route
        path="/coffee-delivery-checkout-filled"
        element={<CoffeeDeliveryCheckoutFil />}
      />
      <Route
        path="/coffee-delivery-success"
        element={<CoffeeDeliverySuccess />}
      />
    </Routes>
  );
}
export default App;
