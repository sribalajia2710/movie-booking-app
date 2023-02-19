import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HeroBanner from "./components/heroBanner/herobanner";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HeroBanner />} />
          <Route path="/movies" element={<HeroBanner />} />
          <Route path="/theatres" element={<HeroBanner />} />
          <Route path="/signin" element={<HeroBanner />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
