import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:5000/";

  console.log(posts);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/api/blog/")
        .then((data) => {
          setPosts(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  let usersAll = posts?.map((post) => (
    <div
      key={post._id}
      className="border-2 border-purple-500 px-2 py-2 rounded-md"
    >
      <img src={url + post?.image} alt="code description" />
      <h2 className="font-bold">{post._id}</h2>
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.description.slice(0, 50)} ...</p>
      <button
        onClick={() => handleDetail(post._id)}
        className="border-none text-purple-600"
      >
        see detail
      </button>
    </div>
  ));
  // console.log(usersAll);
  const handleDetail = (id) => {
    navigate(`/blogs/${id}`);
  };

  let filterTitle = posts
    ?.filter(({ title }) => {
      return title?.toLowerCase()?.indexOf(inputText) >= 0;
    })
    ?.map((post) => (
      <div
        key={post._id}
        className="border-2 border-purple-500 px-2 py-2 rounded-md"
      >
        <img src={url + post?.image} alt="related description" />
        <div className="h-[150px]">
          <h1 className="font-bold text-orange-500 mt-5">{post.title}</h1>
          <h4>
            {post.description.slice(0, 50)} ...
            <button
              onClick={() => handleDetail(post._id)}
              className="border-none text-purple-600"
            >
              see detail
            </button>
          </h4>
        </div>
      </div>
    ));

  return (
    <div className="container mx-auto px-10 py-10">
      <div className="py-3">
        <span> Search</span>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border-2 border-purple-400 p-2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {filterTitle}
      </div>
    </div>
  );
};

export default Blogs;
