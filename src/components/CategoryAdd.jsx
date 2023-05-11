import axios from "axios";
import React, { useState } from "react";

const CategoryAdd = () => {
  const [category, setCategory] = useState("");

  const handlerCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/api/category/categoryAdd", { category })
      .then((data) => {
        console.log("inserted", data);
        setCategory("");
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
            <label htmlFor="">Topic Category </label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={handlerCategory}
              className="border-2 border-purple-400 p-2 rounded-md w-full mb-5"
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

export default CategoryAdd;
