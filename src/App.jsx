import Banner from "./Pages/Home/Banner/Banner";
import Footer from "./Pages/Home/Footer/Footer";
import Navigation from "./Pages/Home/Navbar/Navigation";
import Popular from "./Pages/Home/Popular/Popular";
import "./styles/styles.css";


function App() {
  return (
    <div>
      <div className="mt-3 desktop-style  ">
        <Navigation></Navigation>
        <Banner></Banner>
        <Popular></Popular>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
