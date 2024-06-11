import React from "react";
import OIP from "../assets/portfolio/OIP.jpeg";
import todo from "../assets/portfolio/todo.jpeg";
import Next from "../assets/portfolio/Next.jpg.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: OIP,
      demo: "https://Aniruddhaaru.github.io/Tictactoe",
      code: "https://github.com/Aniruddhaaru/Tictactoe",
    },
    {
      id: 2,
      src: todo,
      demo: "https://reacttodolistsite.netlify.app",
      code: "https://github.com/Aniruddhaaru/React-todolist",
    },
    {
      id: 3,
      src: Next,
      demo: "https://example.com/demo3",
      code: "https://github.com/Aniruddhaaru/Next-todolist",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md h-60 w-full object-cover duration-200 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center justify-center">
                <a href={code} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-gray-800 rounded-md">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
