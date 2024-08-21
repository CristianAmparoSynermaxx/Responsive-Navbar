import React from "react";

const App = () => {
  return (
    <>
      <header className="flex items-center justify-center w-full bg-black h-20 text-white">
        <div className="container flex items-center justify-between">
          <h1 className="text-orange-500 text-xl font-bold ">Logo</h1>
          <nav className="flex">
            <input type="checkbox" id="sidebar-active" className="opacity-0" />
            <label
              htmlFor="sidebar-active"
              className="cursor-pointer md:hidden"
            >
              <img src="/menu.svg" alt="" />
            </label>

            <ul className="md:flex gap-10 font-medium hidden text-white">
              <a href="#home" className="active">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#product">Product</a>
              <a href="#blog">Blog</a>
              <a href="#login">Login</a>
            </ul>
            <label id="overlay" htmlFor="sidebar-active"></label>
            <aside className="sidebar-container w-96 bg-black fixed top-0 bottom-0  p-10 ">
              <label
                htmlFor="sidebar-active"
                className="cursor-pointer bg-white"
              >
                <img src="close.svg" alt="" />
              </label>
              <nav>
                <ul className="flex flex-col w-full gap-5 p-5 text-center font-semibold text-white">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#product">Product</a>
                  <a href="#blog">Blog</a>
                  <a href="#login">Login</a>
                </ul>
              </nav>
            </aside>
          </nav>
        </div>
      </header>
    </>
  );
};

export default App;
