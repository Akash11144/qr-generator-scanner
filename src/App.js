import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import QRGenerator from "./pages/qr-generator";
import QRScanner from "./pages/qr-scanner";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// ////////////////////////

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qr-gen" element={<QRGenerator />} />
          <Route path="/qr-scan" element={<QRScanner />} />
          <Route path="*" element={<h1>Page not found!!!</h1>} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
