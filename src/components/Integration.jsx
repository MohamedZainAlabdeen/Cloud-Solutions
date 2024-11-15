import { Link } from "react-router-dom";
import { listApps } from "../constants";
import Title from "./Title";
import Button from "./Button";

const Integration = () => {
  return (
    <>
      <div className="mainContainer py-20">
        <Title
          smallText="Integrations"
          title="Seamlessly integrated with other tools"
          text="Pulvinar massa morbi lacus etiam massa sit non. Vel pretium tortor enim purus egestas id tincidunt."
        />
        <Button dark className="mx-auto mt-5" url="/" text="Learn More" />
      </div>

      <section className="w-full py-16 bg-blackColor border-y border-lightColor">
        <div className="mainContainer flex items-center justify-between gap-5 bg-darkColor rounded-full px-10 py-5 overflow-auto hiddenScroll">
          {listApps.map((item) => (
            <Link key={item.id} to={item.url} className="shrink-0">
              <img src={item.image} loading="lazy" className="w-16 h-16" alt="App" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Integration;
