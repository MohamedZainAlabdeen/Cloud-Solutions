import { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import { cloudSolutionsFAQBg } from "../assets/images";
import Button from "./Button";

const FAQ = () => {
  const FAQItem_1 = useRef();
  const FAQItem_2 = useRef();
  const FAQItem_3 = useRef();
  const FAQItem_4 = useRef();
  const FAQItem_5 = useRef();

  return (
    <section className="relative py-20">
      <div
        className="absolute top-0 left-0 w-full max-w-[400px] h-[550px] bg-cover bg-no-repeat -z-1"
        style={{ backgroundImage: `URL(${cloudSolutionsFAQBg})` }}
      />
      <div className="mainContainer grid md:grid-cols-2 max-md:justify-items-center gap-5">
        <div className="max-md:text-center">
          <span className="text-primaryColor text-sm">Common Questions</span>
          <h3 className="text-white xs:text-5xl text-3xl my-4">
            Frequently asked questions
          </h3>
          <p className="text-grayColor">
            Eu ut turpis amet id in magna fames diam. Quisque cras ut enim nisl
            id felis a venenatis nec.
          </p>
          <Button
            dark
            className="mt-5 max-md:mx-auto"
            url="/"
            text="Learn More"
          />
        </div>
        <ul className="max-w-[650px] w-full space-y-2">
          <li
            onClick={() => FAQItem_1.current.classList.toggle("hidden")}
            className="w-full px-5 py-6 bg-darkColor border border-lightColor rounded-md cursor-pointer"
          >
            <div className="flexBetween">
              <h4 className="text-white">What does Outgrid do?</h4>
              <BiPlus style={{ color: "#FFFFFF52", fontSize: "25px" }} />
            </div>
            <p ref={FAQItem_1} className="mt-4">
              Tincidunt condimentum vivamus urna velit praesent vulputate at a
              viverra. Sed viverra lectus nullam est sagittis sed. Accumsan
              neque faucibus mattis facilisis a.
            </p>
          </li>
          <li
            onClick={() => FAQItem_2.current.classList.toggle("hidden")}
            className="w-full px-5 py-6 bg-darkColor border border-lightColor rounded-md cursor-pointer"
          >
            <div className="flexBetween">
              <h4 className="text-white">
                Varius porttitor nisl diam non. Turpis mauris augue tincidunt?
              </h4>
              <BiPlus style={{ color: "#FFFFFF52", fontSize: "25px" }} />
            </div>
            <p ref={FAQItem_2} className="mt-4 hidden">
              Tincidunt condimentum vivamus urna velit praesent vulputate at a
              viverra. Sed viverra lectus nullam est sagittis sed. Accumsan
              neque faucibus mattis facilisis a.
            </p>
          </li>
          <li
            onClick={() => FAQItem_3.current.classList.toggle("hidden")}
            className="w-full px-5 py-6 bg-darkColor border border-lightColor rounded-md cursor-pointer"
          >
            <div className="flexBetween">
              <h4 className="text-white">
                Nisi cursus proin ultricies elit pharetra in ac enim morbi?
              </h4>
              <BiPlus style={{ color: "#FFFFFF52", fontSize: "25px" }} />
            </div>
            <p ref={FAQItem_3} className="mt-4 hidden">
              isi cursus proin ultricies elit pharetra in ac enim morbi?
              Tincidunt condimentum vivamus urna velit praesent vulputate at a
              viverra. Sed viverra lectus nullam est sagittis sed. Accumsan
              neque faucibus mattis facilisis a.
            </p>
          </li>
          <li
            onClick={() => FAQItem_4.current.classList.toggle("hidden")}
            className="w-full px-5 py-6 bg-darkColor border border-lightColor rounded-md cursor-pointer"
          >
            <div className="flexBetween">
              <h4 className="text-white">
                Amet turpis diam sapien ut varius. In id ut non quis lectu?
              </h4>
              <BiPlus style={{ color: "#FFFFFF52", fontSize: "25px" }} />
            </div>
            <p ref={FAQItem_4} className="mt-4 hidden">
              Tincidunt condimentum vivamus urna velit praesent vulputate at a
              viverra. Sed viverra lectus nullam est sagittis sed. Accumsan
              neque faucibus mattis facilisis a.
            </p>
          </li>
          <li
            onClick={() => FAQItem_5.current.classList.toggle("hidden")}
            className="w-full px-5 py-6 bg-darkColor border border-lightColor rounded-md cursor-pointer"
          >
            <div className="flexBetween">
              <h4 className="text-white">
                Sed vitae non ut quam ullamcorper malesuada aliquam?
              </h4>
              <BiPlus style={{ color: "#FFFFFF52", fontSize: "25px" }} />
            </div>
            <p ref={FAQItem_5} className="mt-4 hidden">
              Tincidunt condimentum vivamus urna velit praesent vulputate at a
              viverra. Sed viverra lectus nullam est sagittis sed. Accumsan
              neque faucibus mattis facilisis a.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
