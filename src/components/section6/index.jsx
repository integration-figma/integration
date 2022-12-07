import { styles } from "./styles";
import SvgSectionTestimonials from "../../assets/img/svgDesktop/BgTestimonials.svg";
import PicsProfil from "../../assets/img/gallery/profiltémoignages.svg";
import BorderOrange from "../../assets/img/ico/borderOrange.svg";
import LitleBorderOrange from "../../assets/img/ico/litleBorderOrange.svg";

export const Section6TestimonialDesktop = () => {
  return (
    // For background SVG IMG
    <div className={styles.ContentBgSVG}>
      {/* div for content text */}
      <div>
        <div className="absolute pt-36 text-4xl flex flex-col justify-center items-center w-screen">
          <h2 className=" pl-80">Témoignages</h2>
          <img
            className="pt-4 pl-80"
            src={BorderOrange}
            height="auto"
            width="auto"
            alt="Border Orange"
          />
          <div className="flex pt-20 pl-80">
            <img
              className="pr-8 -mt-12"
              height="auto"
              width="auto"
              src={PicsProfil}
              alt="Pics Profil"
            />
            <div>
              <div className="text-xl w-200  pt-2 italic">
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              </div>
              <img
                className="pt-4"
                src={LitleBorderOrange}
                height="auto"
                width="auto"
                alt="Border Orange"
              />
              <div>
                <p className=" pt-4 text-lg font-bold">Saul Goodman</p>
                <p className="pt-1 text-sm">Ceo And Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center flex">
          <img
            src={SvgSectionTestimonials}
            height="auto"
            width="auto"
            alt="Background Svg"
          />
        </div>
      </div>
    </div>

    /* <div>Test


   <div className="justify-center flex">
     <img src={SvgSectionTestimonials} alt="Background Svg" />
      </div>
</div> */
  );
};
