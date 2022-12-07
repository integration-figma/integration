import { styles } from "./styles";
import borderOrange from "../../assets/img/ico/borderOrange.svg";

// img
// import ProfilPicture from "../assets/img/gallery/profiltémoignages.svg";
// <img src={ProfilPicture} width="120px" height="auto" />

// for testimonials (Témoignages)
export const Section6TestimonialsMobile = () => {
  return (
    // div for background & textwhite & font inter
    <div className={`${styles.divSectionContent} `}>
      {/* title */}
      <h2 className={` ${styles.text.h2}`}>Témoignages</h2>
      {/* border orange */}
      <img
        src={borderOrange}
        alt="border orange"
        height="auto"
        width="auto"
        className={styles.borderOrange}
      />
      {/* paragrahp testimonials */}
      <p className={`${styles.text.paragraphItalic}`}>
        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
        suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
        et. Maecen aliquam, risus at semper.
      </p>
      {/* name testimonials */}
      <p className={styles.text.h3}>Saul Goodman</p>
      {/* span End testimonials */}
      <p className={styles.text.spanCeo}>Ceo And Founder</p>
    </div>
  );
};
