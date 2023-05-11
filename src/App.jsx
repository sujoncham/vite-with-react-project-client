import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetail from "./components/BlogDetail";
import CategoryAdd from "./components/CategoryAdd";
import CreateBlog from "./components/CreateBlog";
import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";

// npm create vite
// npm i
// npm run dev
// npm build

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />

          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/blogs/:id"
            element={
              <RequireAuth>
                <BlogDetail />
              </RequireAuth>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/categoryAdd" element={<CategoryAdd />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
