import React from "react";

const Page = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Send
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span className="inline-flex">
                <a
                  className="text-gray-500"
                  href="https://github.com/munazhairfan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.801 8.207 11.396.6.111.828-.258.828-.573 0-.283-.011-1.035-.016-2.033-3.338.727-4.038-1.348-4.038-1.348-.546-1.383-1.334-1.755-1.334-1.755-1.09-.743.082-.728.082-.728 1.205.084 1.842 1.242 1.842 1.242 1.07 1.828 2.804 1.299 3.491.996.107-.776.418-1.3.759-1.597-2.663-.303-5.467-1.332-5.467-5.929 0-1.309.468-2.381 1.24-3.221-.124-.303-.537-1.527.118-3.177 0 0 1.008-.323 3.306 1.231.962-.267 1.996-.401 3.02-.405 1.023.004 2.057.138 3.019.405 2.297-1.554 3.305-1.231 3.305-1.231.657 1.65.242 2.874.118 3.177.773.84 1.241 1.912 1.241 3.221 0 4.6-2.808 5.625-5.481 5.92.43.372.826 1.102.826 2.225 0 1.607-.015 2.904-.015 3.294 0 .317.227.688.832.573C20.561 21.801 24 17.303 24 12c0-6.628-5.372-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="ml-16 text-gray-500"
                  href="https://www.linkedin.com/in/munazha-irfan-0534742ba/"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
