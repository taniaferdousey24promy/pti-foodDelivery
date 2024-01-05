import Banner from "./Pages/Home/Banner/Banner";
import Navigation from "./Pages/Home/Navbar/Navigation";
import './styles/styles.css'

function App() {
  return (
    <div  className="mt-3 desktop-style  ">
        <Navigation></Navigation>
        <Banner></Banner>
    </div>
  );
}

export default App;
