import React from "react";

export default function NavBar() {
  return (
    <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
      {/* Logo text or image */}
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
          <a
            className="no-underline text-grey-darkest hover:text-black"
            href="#"
          >
            <img
              src="https://th.bing.com/th/id/OIP.OJYsmfrXOb79lox0Yo-lhgHaGT?pid=ImgDet&rs=1"
              alt="Unsplash.home"
              height="70px"
              width="70px"
              loading="lazy"
            />
          </a>
        </h1>

        <a className="text-black hover:text-orange md:hidden" href="#">
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>
      {/* END Logo text or image */}

      {/* Search field */}
      <form className="mb-4 w-full md:mb-0 md:w-1/4">
        <label
          className="hidden"
          htmlFor="search-form"
        >
          Search
        </label>
        <input
          className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
          placeholder="Search by name"
          type="text"
        />
        <button className="hidden">Submit</button>
      </form>
      {/* END Search field */}

      {/* Global navigation */}
      <nav>
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4">
            <button className="add_photo_btn hover:bg-green-600">
              Add a photo
            </button>
          </li>
          <li className="md:ml-4">
            <button className="logout_btn hover:grey">Logout</button>
          </li>
        </ul>
      </nav>
      {/* END Global navigation */}
    </header>
  );
}
