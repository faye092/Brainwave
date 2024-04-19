import { smallSphere, stars } from "../assets";
import Section from "./Section";
import Heading from "./Heading";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={900}
              height={900}
              alt="Stars"
            />
          </div>
        </div>

        <Heading tag="Get started" title="Pay once, use forever" />
      </div>
    </Section>
  );
};

export default Pricing;
