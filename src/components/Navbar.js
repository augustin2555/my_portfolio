import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Aslogo.png";
import { Link } from "react-scroll";
import resume from "../assets/Resume ags.pdf";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src={Logo}
          alt="Logo image"
          style={{ width: "200px", height: "60px", marginTop: "20px" }}
        />
      </div>

      {/*menu*/}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth="true" duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth="true" duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth="true" duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth="true" duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth="true" duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Hanburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu*/}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="home" smooth="true" duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="about" smooth="true" duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="skills"
              smooth="true"
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="projects"
              smooth="true"
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="contact"
              smooth="true"
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*Social icons */}
      <div className="hidden lg:flex fixed  flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60p] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://in.linkedin.com"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60p] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60p] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://accounts.google.com/v3/signin/identifier?dsh=S-787496413%3A1677691333834030&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Dum&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Dum&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHcbhHbvM8fP3X-2fuAWS8Qef8EtId6oTgMemb-pi_dJElqRGcA3yKK2-9Rq0C16DAOkSjRQIw"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60p] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={resume}
              target="_blank"
              download="Resume ags"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
