import { IoLayersOutline } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import { TbTarget } from "react-icons/tb";

const Services = () => {
  return (
    <section className="mainContainer py-20 grid gridCols_3 gap-5">
      <div>
        <TbTarget style={{ color: "#ff7e34", fontSize: "35px" }} />
        <h3 className="text-white text-3xl mb-2 mt-4">Manage</h3>
        <p className="text-grayColor">
          Sit in donec varius mattis bibendum diam fermentum. Feugiat purus duis
          nunc morbi quisque. Elit diam vestibulum ornar.
        </p>
      </div>
      <div>
        <IoLayersOutline style={{ color: "#ff7e34", fontSize: "35px" }} />
        <h3 className="text-white text-3xl mb-2 mt-4">Connect</h3>
        <p className="text-grayColor">
          Nunc nisi eget cras faucibus elementum massa vulputate euismod. Et
          purus morbi vulputate sit enim convallis. Tellus lectus porta vitae
        </p>
      </div>
      <div>
        <MdFullscreen style={{ color: "#ff7e34", fontSize: "35px" }} />
        <h3 className="text-white text-3xl mb-2 mt-4">Scale</h3>
        <p className="text-grayColor">
          Consectetur lacus sapien porta diam dolor sed eu sit. Nulla felis sem
          dictum facilisi ullamcorper accumsan amet sit lacus.
        </p>
      </div>
    </section>
  );
};

export default Services;
