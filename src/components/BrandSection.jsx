import { listBrands } from "../constants";

const BrandSection = () => {
  return (
    <section className="mainContainer py-20">
      <p className="text-grayColor text-center uppercase mb-10">
        Trusted by thousands of teams
      </p>
      <ul className="flex items-center justify-center gap-5 overflow-auto hiddenScroll">
        {listBrands.map((brand) => (
          <li key={brand.id} className="w-[150px] min-w-[150px]">
            <img
              src={brand.image}
              loading="lazy"
              className="w-full opacity-50"
              alt="Brand"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BrandSection;
