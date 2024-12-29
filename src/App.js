import logo from "./logo.svg";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Banner from "./Components/Banner";
import Shop from "./Components/Shop";
import Brands from "./Components/Brands";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div class="body">
        <Header />
        <div role="main" class="main">
          <Hero />
          <Banner />
        </div>
        <Shop />
        <div role="main" class="main">
          <Brands />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
