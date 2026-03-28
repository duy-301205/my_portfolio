import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Motivation from "./pages/Motivation";
import About from "./pages/About";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
