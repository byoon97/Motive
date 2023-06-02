import React from "react";

function Footer() {
  return (
    <div className="w-screen">
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a
            href="https://flowbite.com"
            className="hover:underline"
            target="_blank"
          >
            Brandon Yoon
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
          <li>
            <a
              href="https://github.com/byoon97/blogApp"
              className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/byoon888/"
              className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
