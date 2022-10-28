import React from "react";
import { pushTodo } from "../utils/useTodo";
import useToken from "../utils/useToken";

const Todo = ({ setOpenModal }) => {
  function handleAddTodo(event) {
    event.preventDefault();

    const todoInfo = {
      _id: useToken.createRandomStrings(),
      title: event.target.title.value,
      description: event.target.description.value,
      date: new Date().toDateString(),
    };

    pushTodo(todoInfo);
    setOpenModal(false);
  }

  return (
    <div className="bg-gray-700 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-4 rounded-lg shadow">
      <h2 className="mb-1 font-medium title-font text-white text-xl">
        Simple Todo
      </h2>
      <p className="leading-relaxed mb-5 text-gray-400">
        Insert your desire to add new todo
      </p>
      <form onSubmit={handleAddTodo}>
        <div className="relative mb-4">
          <label
            htmlFor="title"
            className="leading-7 text-sm text-gray-300"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="description"
            className="leading-7 text-sm text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          className="text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg"
          type="submit"
        >
          Add new todo
        </button>
      </form>
    </div>
  );
};

export default Todo;
