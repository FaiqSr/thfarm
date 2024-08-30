import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";

// Pages
import AboutPage from "./pages/AboutPage";
import MarketplacePage from "./pages/MarketplacePage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/marketplace" Component={MarketplacePage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
