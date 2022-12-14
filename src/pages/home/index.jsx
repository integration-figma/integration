import { Section1HeaderDesktop } from "../../components/section1";
import { Section2Skills } from "../../components/section2";
import { Section3Portfolio } from "../../components/section3";
import { Section4Timeline } from "../../components/section4";
import { Section5Skills } from "../../components/section5/sectionSkills2";
import { Section6TestimonialDesktop } from "../../components/section6";
import { Section7NewsDesktop } from "../../components/section7/index";
import { Section8ContactDesktop } from "../../components/section8/index";

export const Home = () => {
  return (
      <div>
        <Section1HeaderDesktop />
        <Section2Skills />
        <Section3Portfolio />
        <Section4Timeline />
        <Section5Skills />
        <Section6TestimonialDesktop />
        <Section7NewsDesktop />
        <Section8ContactDesktop />
      </div>
  );
};


export default Home;