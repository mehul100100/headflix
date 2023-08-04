import React from "react";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="px-2 py-4 bg-black">
      <div className="mx-8 max-w-screen-xl mb-4">
        <div className="flex flex-col sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-300 sm:text-center">
            © Built by{" "}
            <a
              href="https://github.com/mehul100100"
              className="underline underline-offset-4 hover:text-white"
            >
              mehul100100
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              className="underline underline-offset-4 hover:text-white"
            >
              Vercel
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/mehul100100/headflix"
              className="underline underline-offset-4 hover:text-white"
            >
              Github
            </a>
            .
          </span>
          <div className="flex flex-row justify-center sm:mt-4 mt-1">
            <a
              href="https://github.com/mehul100100"
              className="text-gray-300 hover:text-white"
            >
              <AiFillGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
