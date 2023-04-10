import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("/posts.json")
        .then((data) => {
          console.log(data);
          setPosts(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="border-2 border-purple-400 p-3">
            <p>{post.id}</p>
            <h1 className="font-bold">{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
