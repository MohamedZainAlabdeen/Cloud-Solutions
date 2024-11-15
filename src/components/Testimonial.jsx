import { testimonialList } from "../constants";
import {
  cloudSolutionsLogoTestimonial,
  cloudSolutionsTestimonialBg,
  cloudSolutionsTestimonialImage,
} from "../assets/images";

const Testimonial = () => {
  return (
    <section className="mainContainer py-20">
      <div
        className="w-full py-14 px-5 bg-darkColor border border-lightColor rounded-xl text-center bg-cover bg-center"
        style={{ backgroundImage: `URL(${cloudSolutionsTestimonialBg})` }}
      >
        <img
          src={cloudSolutionsLogoTestimonial}
          loading="lazy"
          className="mx-auto"
          width="150px"
          alt="Flash"
        />
        <p className="text-gray-300 text-xl max-w-[750px] mx-auto mt-4">
          Since implementing the cloud security solution, we have experienced
          peace of mind knowing our data is protected. The advanced threat
          detection and encryption features have been invaluable to our
          business.
        </p>
        <div className="flex items-center justify-center gap-2 mt-5">
          <img
            src={cloudSolutionsTestimonialImage}
            loading="lazy"
            className="w-[45px] h-[45px] rounded-full"
            alt="User Avatar"
          />
          <div>
            <span className="text-white text-sm">Natali Craig</span>
            <p className="text-grayColor text-sm">CEO @ Flash</p>
          </div>
        </div>
      </div>
      <div className="grid gridCols_4 gap-4 mt-10">
        {testimonialList.map((item) => (
          <div
            key={item.id}
            className="w-full bg-blackColor rounded-xl px-5 py-10 text-center"
          >
            <h4 className="text-2xl text-white">{item.title}</h4>
            <p className="text-grayColor">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
