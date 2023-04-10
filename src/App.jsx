import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

// npm create vite
// npm i
// npm run dev
// npm build

function App() {
  return (
    <div className="container mx-auto px-10">
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
