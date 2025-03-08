import Header from "./Containers/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct imports
import ProductListing from "./Containers/ProductListing";
import ProductDetails from "./Containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<ProductListing />} /> {/* Correct usage of element */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<div>404 Not Found</div>} /> {/* 404 for unmatched routes */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
