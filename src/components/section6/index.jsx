import { styles } from "./styles";
import SvgSectionTestimonials from "../../assets/img/BgTestimonials.svg";
import PicsProfil from "../../assets/img/profiltémoignages.svg";
import BorderOrange from "../../assets/img/borderOrange.svg";
import LitleBorderOrange from "../../assets/img/litleBorderOrange.svg";

export const Section6TestimonialDesktop = () => {
  return (
    // For background SVG IMG
    <div className={`${styles.ContentBgSVG} ${styles.small.ContentBgSVG}`}>
      {/* div for content text */}
      <div>
        <div className="lg:absolute lg:pt-36 lg:text-4xl lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-screen">
          <h2 className=" lg:pl-80">Témoignages</h2>
          <img
            className="lg:pt-4 lg:pl-80"
            src={BorderOrange}
            height="auto"
            width="auto"
            alt="Border Orange"
          />
          <div className="lg:flex lg:pt-20 lg:pl-80">
            <img
              className="lg:pr-8 lg:-mt-12"
              height="auto"
              width="auto"
              src={PicsProfil}
              alt="Pics Profil"
            />
            <div>
              <div className="lg:text-xl lg:w-200  lg:pt-2 lg:italic">
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              </div>
              <img
                className="lg:pt-4"
                src={LitleBorderOrange}
                height="auto"
                width="auto"
                alt="Border Orange"
              />
              <div>
                <p className=" lg:pt-4 lg:text-lg lg:font-bold">Saul Goodman</p>
                <p className="lg:pt-1 lg:text-sm">Ceo And Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:justify-center lg:flex">
          <img
            src={SvgSectionTestimonials}
            height="auto"
            width="auto"
            alt="Background Svg"
          />
        </div>
      </div>
    </div>
  );
};
