import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { footerLinks } from "../constants";

import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const styles = {
    socialBox:
      "flexCenter w-10 h-10 text-white bg-[#3535354b] hover:bg-[#3535354b]/80 rounded-md transition",
    title: "text-white text-xl mb-4",
    linkItem: "text-grayColor hover:text-white transition",
  };

  return (
    <footer className="mainContainer">
      <div className="grid sm:grid-cols-5 xs:grid-cols-4 grid-cols-1 xs:justify-items-center gap-5 py-20">
        <div className="xs:col-span-2">
          <img src={logo} loading="lazy" className="w-[150px]" alt="Logo" />
          <p className="text-grayColor mt-3">
            Subscribe to our newsletter to get updates about our grand offers.
          </p>
          <ul className="flex items-center gap-2 mt-5">
            <li>
              <a href="#" target="_blank" className={`${styles.socialBox}`}>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MohamedZainAlabdeen"
                target="_blank"
                className={`${styles.socialBox}`}
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohamed-zain-4b2930335?trk=contact-info"
                target="_blank"
                className={`${styles.socialBox}`}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className={`${styles.socialBox}`}>
                <FaDribbble />
              </a>
            </li>
          </ul>
        </div>
        {/* Links */}
        {footerLinks.map((item) => (
          <div key={item.id}>
            <h4 className={`${styles.title}`}>{item.title}</h4>
            <ul className="space-y-2">
              {item.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    onClick={() => scrollTo(0, 0)}
                    className={`${styles.linkItem}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center py-4 border-t border-lightColor text-grayColor">
        Developed by{" "}
        <a href="#" target="_blank" className="text-gray-300 underline">
          MohamedZain
        </a>
      </p>
    </footer>
  );
};

export default Footer;
