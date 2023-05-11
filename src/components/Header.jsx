import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <div className="bg-purple-500 py-5">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <span>Logo</span>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {user && (
              <li>
                <Link to="/createBlog">CreateBlog</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/categoryAdd">Category Add</Link>
              </li>
            )}
            <li>
              {!user ? (
                <Link to="/login">Login</Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="bg-gray-300 p-1 rounded-md"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
