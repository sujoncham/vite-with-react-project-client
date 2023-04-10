import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Blogs from "./pages/Blogs";

// npm create vite
// npm i
// npm run dev
// npm build

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Counter />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
