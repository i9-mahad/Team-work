import { Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import BlogView from "./Pages/BlogView";
import Data from "./Components/Data";
import Home from "./Pages/Home";
import About from "./Pages/Product"
import Header from "./Components/Header"
import Product from "./Pages/Product";
import View from "./Pages/View";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blog"
          element={<Blog Data={Data} />}
        />

        <Route
          path="/blog/:id"
          element={<BlogView Badeeco={Data} />}
        />
        <Route path="/product" element={<Product />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;