import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { navLinks } from "../constants";
import { CgClose } from "react-icons/cg";

const NavMenu = ({ toggle, closeMenu }) => {
  const renderLinks = (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          <Link
            to={link.url}
            onClick={() => {
              scrollTo(0, 0);
              closeMenu();
            }}
            className="block py-4 w-full border-b border-lightColor text-grayColor hover:text-white transition"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-[350px] max-[355px]:w-full h-screen bg-darkColor z-[1000] p-5 transition ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flexBetween">
          <Link to="/" onClick={() => scrollTo(0, 0)}>
            <img src={logo} className="w-[120px]" alt="logo" />
          </Link>
          <button onClick={closeMenu}>
            <CgClose style={{ color: "#fff", fontSize: "22px" }} />
          </button>
        </div>
        <ul className="mt-5">{renderLinks}</ul>
      </div>
      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`${
          toggle ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-screen bg-[#0000005d] z-[900]`}
      />
    </>
  );
};

export default NavMenu;
