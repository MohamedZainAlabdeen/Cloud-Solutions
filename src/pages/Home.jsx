import {
  BrandSection,
  Hero,
  HowItWorks,
  Testimonial,
  Services,
  WhyOutGrid,
  Integration,
  FAQ,
  GTA,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandSection />
      <WhyOutGrid />
      <HowItWorks />
      <Services />
      <Testimonial />
      <Integration />
      <FAQ />
      <GTA />
    </>
  );
};

export default Home;
