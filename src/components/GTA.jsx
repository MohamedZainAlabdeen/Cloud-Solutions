import NewsletterInput from "./NewsletterInput";
import { cloudSolutionsGTABg } from "../assets/images";

const GTA = () => {
  return (
    <section className="mainContainer py-20">
      <div
        className="w-full xs:px-10 px-5 xs:py-20 py-10 bg-darkColor border border-lightColor rounded-xl bg-center bg-cover"
        style={{ backgroundImage: `URL(${cloudSolutionsGTABg})` }}
      >
        <div className="text-center max-w-[570px] mx-auto">
          <h2 className="text-white xs:text-4xl text-2xl">
            Enhance your cloud security today
          </h2>
          <p className="text-grayColor mt-2">
            Amet convallis tempus lobortis dui. Nec dapibus pharetra ip sum
            commodo tristique viverra.
          </p>
          <NewsletterInput
            className="justify-center max-ss:flex-col mt-5"
            setWidth="w-[300px] max-ss:w-full"
            setHeight="h-[55px] max-ss:h-[120px]"
            buttonWidth="max-ss:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GTA;
