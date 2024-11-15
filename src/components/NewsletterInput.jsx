import { IoMailOpenOutline } from "react-icons/io5";
import Button from "./Button";

const NewsletterInput = ({ className, setWidth, setHeight, buttonWidth }) => {
  return (
    <div
      className={`${className || ""} flex items-center gap-2 ${
        setHeight || "h-[55px]"
      }`}
    >
      <div
        className={`flex items-center w-full ${
          setWidth || "max-w-[350px]"
        } h-full bg-darkColor border px-3 border-lightColor rounded-md`}
      >
        <IoMailOpenOutline
          style={{
            fontSize: "25px",
            color: "#ffffff92",
            marginRight: "10px",
          }}
        />
        <input
          type="email"
          className="w-full h-full text-white"
          placeholder="Your Email"
        />
      </div>
      <Button className={`${buttonWidth || ""} h-[55px] shrink-0`} text="Get Started" />
    </div>
  );
};

export default NewsletterInput;
