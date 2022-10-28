import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "../components/card";
import Modal from "../components/modal";
import Todo from "../components/todo";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [todo, setTodo] = useState([]);

  /**
   * How to fetch repeatedly and render updated api data in react.js?
   * https://stackoverflow.com/questions/59015638/how-to-fetch-repeatedly-and-render-updated-api-data-in-reactjs
   */
  useEffect(() => {
    setInterval(() => {
      setTodo(JSON.parse(localStorage.getItem("simpleTodo")));
    }, 1000);
  }, []);

  return (
    <section className="p-4">
      <div className="container mx-auto">
        <Head>
          <title>Simple Todo</title>
          <meta name="description" content="Simple Todo app through Next.JS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {/* display added todo */}
          {todo.map((tdl) => (
            <Card key={tdl._id} todo={tdl} />
          ))}

          {/* add new todo */}
          <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg dark:bg-gray-800 flex justify-center items-center">
            <div onClick={() => setOpenModal(true)} className="cursor-pointer">
              <div className="text-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full dark:bg-gray-700 text-indigo-400 mb-4 shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-lg text-black dark:text-white font-medium title-font mb-2">
                Add New Todo
              </h2>
            </div>
          </div>
        </main>
      </div>

      {/* ask to open modal */}
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          content={<Todo setOpenModal={setOpenModal} />}
        />
      )}
    </section>
  );
}
