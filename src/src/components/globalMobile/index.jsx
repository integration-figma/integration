import { Section1HeaderMobile } from "../section1/headerMobile";
import { Section2Skills } from "../section2/sectionSkills";
import { Section3Portfolio } from "../section3/sectionPortfolio"
import { Section4Timeline } from "../section4/sectionTimeline";
import { Section6TestimonialsMobile } from "../section6/testimonialsMobile";
import { Section8ContactMobile } from "../section8/contactMobile";
import { Section7NewsMobile } from "../section7/newsMobile";

export const GlobalContentMobile = () => {
  return (
    <div className="lg:hidden">
      <Section1HeaderMobile />
      <Section2Skills />
      <Section3Portfolio />
      <Section4Timeline />
      <Section6TestimonialsMobile />
      <Section7NewsMobile />
      <Section8ContactMobile />
    </div>
  );
};
