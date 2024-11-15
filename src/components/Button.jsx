import { Link } from "react-router-dom";

const Button = ({ className, url, text, dark }) => {
  const classes = `${className || ""} text-white h-[42px] border ${
    dark
      ? "bg-darkColor border-lightColor hover:bg-primaryColor hover:border-primaryColor"
      : "bg-primaryColor border-primaryColor hover:bg-darkColor hover:border-lightColor"
  }  rounded-md overflow-hidden flex items-center justify-center flex-col px-5 transition duration-300 group`;
  return (
    <>
      {url ? (
        <Link
          to={url}
          onClick={() => scrollTo(0, 0)}
          className={`w-fit ${classes}`}
        >
          <span className="block translate-y-3 group-hover:-translate-y-5 group-hover:opacity-0 transition duration-300">
            {text}
          </span>
          <span className="block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:-translate-y-3 transition duration-300">
            {text}
          </span>
        </Link>
      ) : (
        <button className={`${classes}`}>
          <span className="block translate-y-3 group-hover:-translate-y-5 group-hover:opacity-0 transition duration-300">
            {text}
          </span>
          <span className="block translate-y-4 opacity-0 group-hover:-translate-y-3 group-hover:opacity-100 transition duration-300">
            {text}
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
