import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalEidt from "./ModalEidt";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [open, setOpen] = useState(null);
  const url = "http://localhost:5000/";

  const [image, setImage] = useState("");
  const [updates, setUpdates] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdates({ ...updates, [name]: value });
  };

  // console.log(post);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:5000/api/blog/${id}`)
        .then((data) => {
          setPost(data.data);
          setUpdates({
            title: data?.data?.title,
            description: data?.data?.description,
            image: url + image,
            category: data?.data?.category,
          });
          setOpen(null);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", updates.title);
    formData.append("description", updates.description);
    formData.append("image", image);
    formData.append("category", updates.category);
    const options = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    await axios
      .patch(`http://localhost:5000/api/blog/${id}`, formData, options)
      .catch((err) => console.log(err))
      .then((data) => {
        setPost(data);
        setOpen(null);
      });
  };

  return (
    <div className="container mx-auto px-10 py-16">
      <h1>Blog Id : {id}</h1>
      <div className="flex justify-start gap-5">
        <div className="w-[50%]">
          <h1 className="font-bold text-3xl">{post.title}</h1>
          <p>{post.description}</p>
          <p>{post.category}</p>

          <button
            onClick={() => setOpen(post)}
            className="border-2 border-purple-400 px-3 py-1 bg-purple-500 rounded-md"
          >
            edit
          </button>
        </div>
        <div className="w-[50%]">
          <img src={url + post?.image} alt="detail" />
        </div>
      </div>
      {open && (
        <ModalEidt
          updates={updates}
          setOpen={setOpen}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
        />
      )}
    </div>
  );
};

export default BlogDetail;
