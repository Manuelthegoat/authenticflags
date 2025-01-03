import Header from "./Components/Header";
import { useLocation, matchPath } from "react-router-dom";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";
import Routing from "./Routes";
import "./App.css";

function App() {
  const location = useLocation();

  // Define paths where layout should be hidden
  const hideLayoutPaths = ["/admin", "/login", "/admin-products"];
  
  // Check if the current path matches the dynamic /edit-product/:id route
  const isEditProductPage = matchPath("/edit-product/:id", location.pathname);
  
  // Combine conditions to decide whether to hide the layout
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname) || isEditProductPage;

  return (
    <>
      <div className="body">
        {!shouldHideLayout && (
          <>
            <Header />
            <WhatsAppButton />
          </>
        )}
        <Routing />
        {!shouldHideLayout && <Footer />}
      </div>
    </>
  );
}

export default App;
