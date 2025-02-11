import React from "react";

import logo from "../../images/logo.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>


    {/* <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@kryptomastery.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@kryptomastery2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div> */}


<footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 text-center text-gray-200">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
        <p className="text-lg font-semibold">Welcome to Vikash Codex Clan 💗</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/vikash000x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vikash-sinha-215000259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/vikash_sinha_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
