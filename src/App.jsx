import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
