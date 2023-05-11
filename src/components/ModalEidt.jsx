import React from "react";

const ModalEidt = ({
  updates,
  setOpen,
  handleSubmit,
  handleChange,
  handleImageChange,
}) => {
  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle border-2 border-purple-500 px-5 py-3 bg-white"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="text-right">
            <button
              type="button"
              className="text-black text-2xl"
              onClick={() => setOpen(null)}
            >
              X
            </button>
          </div>
          <div className="w-[850px] mx-auto py-2 pb-5">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={updates.title}
                onChange={handleChange}
                className="border-2 border-purple-300 px-3 py-2 mt-5 rounded-md w-full"
                required
              />
              <input
                type="text"
                name="category"
                value={updates.category}
                onChange={handleChange}
                className="border-2 border-purple-300 px-3 py-2 mt-5 rounded-md w-full"
                required
              />
              <textarea
                type="text"
                name="description"
                value={updates.description}
                onChange={handleChange}
                className="border-2 border-purple-300 px-3 py-2 mt-5 rounded-md w-full"
                required
              ></textarea>

              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                required
              />

              <button
                type="submit"
                className="border-2 border-purple-300 px-3 py-1 mt-5 rounded-md"
              >
                add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEidt;
