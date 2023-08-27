import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Topnav from "./components/Topnav";

/*Frontend Assignment */
/* NAVIGATION COMPLETED*/
/* BANNER COMPLETED*/
/* API COMPLETE*/
/*CONTACT US COMPLETE */
function App() {
  return (
    <div className="App">
      <Topnav />
      <Navbar />
      <Home />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
