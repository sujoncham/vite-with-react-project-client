import { useRef, useState } from "react";

const TodoList = () => {
  const [lists, setLists] = useState([]);
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLists([...lists, inputRef.current.value]);
    inputRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          className="border-2 border-purple-500 p-2 rounded-md"
        />
        <button
          type="submit"
          className="border-2 border-purple-500 p-2 rounded-md"
        >
          add
        </button>
      </form>
      <div>
        {lists.map((list, index) => (
          <div key={index}>{list}</div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
