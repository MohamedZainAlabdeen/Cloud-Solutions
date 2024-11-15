import Button from "./Button";
import {
  cloudSolutionsHowBg,
  cloudSolutionsHowImage_01,
} from "../assets/images";

const HowItWorks = () => {
  return (
    <section className="relative py-20">
      <div className="mainContainer flex min-[810px]:items-center min-[810px]:justify-center gap-5 max-[810px]:flex-col">
        <div className="min-[810px]:max-w-[550px]">
          <span className="text-primaryColor text-sm uppercase">
            How It Works
          </span>
          <h2 className="text-white text-4xl mt-2 leading-[50px] max-[890px]:text-2xl">
            Secure access and network connectivity reimagined
          </h2>
          <p className="text-grayColor mt-5">
            Nibh massa duis pharetra faucibus magna maecenas integer amet
            interdum. Non et tortor magna volutpat egestas. Ullamcorper dolor
            sed arcu gravida arcu.
          </p>
          <p className="text-grayColor mt-4 mb-5">
            Facilisis viverra eu ultricies quis velit vitae. Ullamcorper tellus
            cursus nec commodo lectus aliquam.
          </p>
          <Button dark url="/" className="h-full" text="Learn More" />
        </div>
        <div>
          <div
            className="absolute bottom-0 right-0 w-full max-w-[570px] h-full bg-cover bg-no-repeat -z-1"
            style={{ backgroundImage: `URL(${cloudSolutionsHowBg})` }}
          />
          <img src={cloudSolutionsHowImage_01} loading="lazy" alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
