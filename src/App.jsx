import { Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import BlogView from "./Pages/BlogView";
import Data from "./Components/Data";
import Home from "./Pages/Home";
import About from "./Pages/Product"
import Header from "./Components/Header"


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/about"element={<About/>} />
        <Route
          path="/blog"
          element={<Blog Data={Data} />}
        />

        <Route
          path="/blog/:id"
          element={<BlogView Badeeco={Data} />}
        />

      </Routes>
    </>
  );
}

export default App;