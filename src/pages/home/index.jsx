import { Section1HeaderDesktop } from "../headerDesktop";
import { Section2Skills } from "../section2/sectionSkills";
import { Section3Portfolio } from "../section3/sectionPortfolio";
import { Section4Timeline } from "../section4/sectionTimeline";
import { Section5Skills } from "../section5/sectionSkills2";
import { Section6TestimonialDesktop } from "../section6";
import { Section7NewsDesktop } from "../newsDesktop";
import { Section8ContactDesktop } from "../contactDesktop";

export const Home = () => {
  return (
    <>
      <div className="hidden lg:block">
        
        <Section1HeaderDesktop />
        <Section2Skills />
        <Section3Portfolio />
        <Section4Timeline />
        <Section5Skills />
        <Section6TestimonialDesktop />
        <Section7NewsDesktop />
        <Section8ContactDesktop />
      </div>
    </>
  );
};


export default Home;