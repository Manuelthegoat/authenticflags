import Header from "./Components/Header";

import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";
import Routing from "./Routes";
import './App.css'

function App() {
  return (
    <>
      <div class="body">
        <Header />
        <WhatsAppButton />
        <Routing />
        <Footer />
      </div>
    </>
  );
}

export default App;
