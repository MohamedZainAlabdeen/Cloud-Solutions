import {
  cloudSolutionsHero_01,
  cloudSolutionsHero_02,
  cloudSolutionsHero_03,
  cloudSolutionsHero_04,
  cloudSolutionsHero_05,
  cloudSolutionsLogoHero_01,
  cloudSolutionsLogoHero_02,
  cloudSolutionsLogoHero_03,
  heroBackground,
} from "../assets/images";
import NewsletterInput from "./NewsletterInput";

const Hero = () => {
  return (
    <section className="relative w-full h-screen max-ss:flex max-ss:items-center">
      <div
        className="absolute bottom-0 right-0 w-full max-w-[970px] h-full bg-cover bg-no-repeat -z-1"
        style={{ backgroundImage: `URL(${heroBackground})` }}
      />
      <div className="mainContainer ss:h-full flex items-center justify-start max-[1095px]:flex-col max-[1095px]:text-center gap-y-5">
        <div className="max-w-[580px] w-full max-[1145px]:max-w-[500px] max-[1095px]:max-w-full">
          <span className="text-sm text-primaryColor">
            Outgrid Cloud Security
          </span>
          <h2 className="text-[50px] text-white my-4 leading-[55px] max-[1145px]:text-2xl">
            Ensure robust security and compliance with our solutions
          </h2>
          <p className="text-grayColor max-w-[400px] mb-5 max-[1095px]:mx-auto">
            Amet convallis tempus lobortis dui. Nec dapibus pharetra ip sum
            commodo tristique viverra.
          </p>
          <NewsletterInput
            className="max-[1095px]:flex-col"
            setWidth="max-w-[300px] max-[1095px]:max-w-full"
            setHeight="max-[1095px]:h-[120px] h-[55px]"
            buttonWidth="max-[1095px]:w-full"
          />
          <p className="text-grayColor mt-4">
            Fully integrated with other cloud platforms:
          </p>
          <div className="flex items-center max-[1095px]:justify-center gap-4 mt-5">
            <img
              src={cloudSolutionsLogoHero_01}
              className="w-10 h-10 rounded-full"
              alt="logo"
            />
            <img
              src={cloudSolutionsLogoHero_02}
              className="w-10 h-10 rounded-full"
              alt="logo"
            />
            <img
              src={cloudSolutionsLogoHero_03}
              className="w-10 h-10 rounded-full"
              alt="logo"
            />
          </div>
        </div>
        <div className="hidden ss:flex gap-2 min-[1190px]:absolute min-[1190px]:top-1/2 min-[1190px]:right-2 min-[1190px]:-translate-y-1/2">
          <div className="w-[200px] max-[1390px]:w-[150px] place-self-end shadow_01">
            <img
              src={cloudSolutionsHero_01}
              className="w-full border border-lightColor rounded-xl"
              alt="banner"
            />
          </div>
          <div className="w-[400px] shadow_01">
            <img
              src={cloudSolutionsHero_02}
              className="w-full border border-lightColor rounded-xl"
              alt="banner"
            />
          </div>
          <div className="space-y-2">
            <img
              src={cloudSolutionsHero_03}
              className="w-[200px] max-[1390px]:w-[150px] border border-lightColor rounded-xl shadow_01"
              alt="banner"
            />
            <img
              src={cloudSolutionsHero_04}
              className="w-[200px] max-[1390px]:w-[150px] border border-lightColor rounded-xl shadow_01"
              alt="banner"
            />
            <img
              src={cloudSolutionsHero_05}
              className="w-[200px] max-[1390px]:w-[150px] border border-lightColor rounded-xl shadow_01"
              alt="banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
