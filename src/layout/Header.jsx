import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { navLinks } from "../constants";
import Button from "../components/Button";
import NavMenu from "./NavMenu";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className={`w-full py-5 z-50`}>
        <div className="mainContainer h-full flexBetween">
          <Link to="/" onClick={() => scrollTo(0, 0)}>
            <img src={logo} className="w-[100px]" alt="logo" />
          </Link>
          <ul className="hidden sm:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.url}
                  className="text-white hover:text-primaryColor transition"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Button url="/" text="Get Started" />
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="sm:hidden"
            >
              <MdOutlineMenu style={{ color: "#fff", fontSize: "22px" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu on Small Screen */}
      <NavMenu
        toggle={toggleMenu}
        closeMenu={() => setToggleMenu(!toggleMenu)}
      />
    </>
  );
};

export default Header;
