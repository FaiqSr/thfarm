import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
