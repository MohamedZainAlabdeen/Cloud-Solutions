import {
  cloudSolutionsWhyImage_01,
  cloudSolutionsWhyBg_01,
  cloudSolutionsWhyImage_02,
  cloudSolutionsWhyBg_02,
  cloudSolutionsWhyImage_03,
  cloudSolutionsWhyBg_03,
  cloudSolutionsWhyImage_04,
  cloudSolutionsWhyBg_04,
  cloudSolutionsWhyImage_05,
} from "../assets/images";
import Title from "./Title";

const WhyOutGrid = () => {
  const boxClasses =
    "w-full bg-darkColor border border-lightColor rounded-xl px-5 py-10 bg-cover bg-center";
  return (
    <section className="mainContainer py-20">
      <Title
        smallText="Why Outgrid?"
        title="Outgrid makes cloud security easy"
        text="Our cloud security software provides a holistic approach to safeguarding your business in the cloud."
      />
      <div className="grid min-[830px]:grid-cols-3 gap-4 mt-20">
        <div className={`${boxClasses}`}>
          <div
            className="w-full bg-cover bg-center mb-5"
            style={{ backgroundImage: `URL(${cloudSolutionsWhyBg_01})` }}
          >
            <img
              src={cloudSolutionsWhyImage_01}
              loading="lazy"
              className="mx-auto"
              alt="banner"
            />
          </div>
          <h3 className="text-white text-2xl mb-2">Seamless Connectivity</h3>
          <p className="text-grayColor">
            Elementum curabitur lorem morbi mass risus egestas eget tellus duis.
            Pharetra.
          </p>
        </div>
        <div
          className={`${boxClasses}`}
          style={{ backgroundImage: `URL(${cloudSolutionsWhyBg_02})` }}
        >
          <div className="w-full mb-5">
            <img
              src={cloudSolutionsWhyImage_02}
              loading="lazy"
              className="mx-auto"
              alt="banner"
            />
          </div>
          <h3 className="text-white text-2xl mb-2">Data Encryption</h3>
          <p className="text-grayColor">
            In hendrerit justo amet at. Malesuada volutpat in id et. In ultrices
            risus leo.
          </p>
        </div>
        <div
          className={`${boxClasses}`}
          style={{ backgroundImage: `URL(${cloudSolutionsWhyBg_03})` }}
        >
          <div className="w-full mb-5">
            <img
              src={cloudSolutionsWhyImage_03}
              loading="lazy"
              className="mx-auto"
              alt="banner"
            />
          </div>
          <h3 className="text-white text-2xl mb-2">Setup Permissions</h3>
          <p className="text-grayColor">
            Diam dictum quis ipsum justo sapien. Egestas arcu arcu malesuada id
            cursus.
          </p>
        </div>
        <div
          className={`${boxClasses} !py-5 min-[830px]:col-span-2`}
          style={{ backgroundImage: `URL(${cloudSolutionsWhyBg_04})` }}
        >
          <div className="w-full mb-5">
            <img
              src={cloudSolutionsWhyImage_04}
              loading="lazy"
              className="mx-auto"
              alt="banner"
            />
          </div>
          <h3 className="text-white text-2xl mb-2">
            Accessible Across All Devices
          </h3>
          <p className="text-grayColor">
            Semper fusce rhoncus scelerisque leo. Nibh non sit dolor sagittis
            lacus pretium at ticidunt. Scelerisque pellentesque diam faucibus
            sit. Nib at consequat dignisim nisl cursus aliquam.
          </p>
        </div>
        <div
          className={`${boxClasses}`}
          style={{ backgroundImage: `URL(${cloudSolutionsWhyBg_03})` }}
        >
          <div className="w-full mb-5">
            <img
              src={cloudSolutionsWhyImage_05}
              loading="lazy"
              className="mx-auto"
              alt="banner"
            />
          </div>
          <h3 className="text-white text-2xl mb-2">Site-to-site Networking</h3>
          <p className="text-grayColor">
            Feugiat tellus vel consectetur at diam ut dignissim. Blandit justo
            venenatis eu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyOutGrid;
