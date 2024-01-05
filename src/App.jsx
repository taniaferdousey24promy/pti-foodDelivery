import Banner from "./Pages/Home/Banner/Banner";
import Footer from "./Pages/Home/Footer/Footer";
import Navigation from "./Pages/Home/Navbar/Navigation";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <div className="mt-3 desktop-style  ">
        <Navigation></Navigation>
        <Banner></Banner>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
