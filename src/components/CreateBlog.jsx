import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateBlog = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(null);
  // console.log(categories);

  useEffect(() => {
    const getCateg = async () => {
      await axios
        .get("http://localhost:5000/api/category/")
        .then((data) => {
          // console.log("get category", data);
          setCategories(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCateg();
  }, []);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    setOpen(true);
  };

  const handlerTitle = (event) => {
    setTitle(event.target.value);
  };
  const handlerCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category", category);

    const options = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await axios
      .post("http://localhost:5000/api/blog/createBlog", formData, options)
      .then((data) => {
        console.log("inserted", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto flex justify-center items-center gap-10">
      <div className="w-[50%] py-10">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Topic Title </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handlerTitle}
              className="border-2 border-purple-400 p-2 rounded-md w-full"
            />
          </div>
          {/* <div>
            <label htmlFor="">Topic Category </label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={handlerCategory}
              className="border-2 border-purple-400 p-2 rounded-md w-full"
            />
          </div> */}
          <div>
            <label htmlFor="">Topic Category </label>
            <select
              name="category"
              onChange={handlerCategory}
              className="border-2 border-purple-400 p-2 rounded-md w-full"
            >
              <option disabled>select option</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Topic Description</label>
            <textarea
              name="description"
              value={description}
              onChange={handleDescription}
              className="border-2 border-purple-400 p-2 rounded-md w-full"
              placeholder="write here"
            ></textarea>
          </div>
          <div>
            {open && (
              <img
                className={"w-56 h-56" + (image === "" ? "hidden" : "block")}
                src={image === "" ? "" : URL.createObjectURL(image)}
                alt=""
              />
            )}
          </div>
          <div className="py-3">
            <label htmlFor="">Topic Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="border-2 border-purple-400 p-2 rounded-md w-full"
            />
          </div>
          <button
            className="border-2 border-purple-400 p-2 rounded-md w-full hover:bg-purple-500"
            type="submit"
          >
            create add
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
