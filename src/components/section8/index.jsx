import { styles } from "./styles";
import BgContact from "../../assets/img/BgContact.svg";
import locationIco from "../../assets/img/adress.svg";
import mailIco from "../../assets/img/mail.svg";
import telIco from "../../assets/img/tel.svg";

export const Section8ContactDesktop = () => {
  return (
    <>
      <div className={`${styles.ContentBgSVG} ${styles.small.divSectionContent}`}>
        {/* div for content text */}
        <div>
          <div className="absolute lg:text-4xl lg:w-screen bg-custom-black-500">
            <div className="lg:grid lg:grid-cols-2">
              <div className="lg:pt-52 lg:pl-96">
                <h2 className={`${styles.text.h2Contact} ${styles.small.text.h2Contact}`}>Contact.</h2>
                {/* icon adress */}
                <div className={`${styles.itemsCenter} ${styles.small.itemsCenter}`}>
                  <img
                    src={locationIco}
                    height="auto"
                    width="auto"
                    alt="icone localisation"
                    className={`${styles.locationIco} ${styles.small.locationIco}`}
                  />
                  {/* div for content adress text */}
                  <div>
                    <p className={`${styles.text.subTitleIco}${styles.small.text.subTitleIco}`}>Adresse</p>
                    <p className={`${styles.text.resultContact} ${styles.small.text.resultContact}`}>
                      36 rue des Peupliers <br /> Paris (75018) France
                    </p>
                  </div>
                </div>
                {/* icon mail */}
                <div className={`lg:my-4 ${styles.itemsCenter} ${styles.small.itemsCenter}`}>
                  <img
                    src={mailIco}
                    height="auto"
                    width="auto"
                    alt="icone mail"
                    className={`${styles.mailIco} ${styles.small.mailIco}`}
                  />
                  {/* div for content mail text */}
                  <div>
                    <p className={`${styles.text.subTitleIco} ${styles.small.text.subTitleIco}`}>Mail</p>
                    <p className={`${styles.text.resultContact} ${styles.small.text.resultContact}`}>
                      olivier.depiesse@gmail.com
                    </p>
                  </div>
                </div>
                {/* icon tel */}
                <div className={`${styles.itemsCenter} ${styles.small.itemsCenter}`}>
                  <img
                    src={telIco}
                    height="auto"
                    width="auto"
                    alt="icone tel"
                    className={`${styles.telIco} ${styles.small.telIco}`}
                  />
                  {/* div for content tel text */}
                  <div>
                    <p className={`${styles.text.subTitleIco} ${styles.small.text.subTitleIco}`}>Téléphone</p>
                    <p className={`${styles.text.resultContact} ${styles.small.text.resultContact}`}>06 54 84 54 75</p>
                  </div>
                </div>
              </div>
              {/* div col 2 */}
              <div className="lg:pt-40 lg:pl-48">
                <h6 className="font-roboto lg:text-base lg:uppercase lg:tracking-widest">
                  Contactez moi
                </h6>
                <h5 className={`${styles.text.titleForm} ${styles.small.text.titleForm}`}>
                  Utilisez le formulaire <br /> ci-dessous pour me contacter
                </h5>
                <p className={`${styles.text.paragraph2} ${styles.small.text.paragraph2}`}>
                  Cras fermentum odio eu feugiat. Justo eget magna fermentum
                  iaculis eu non <br /> diam phasellus. Scelerisque felis
                  imperdiet proin fermentum leo. Amet volutpat <br /> consequat
                  mauris nunc congue..
                </p>

                {/* label & input name */}

                <label htmlFor="name" className={`${styles.contactLabel} ${styles.small.contactLabel}`}>
                  Votre nom :
                </label>
                <input
                  type="text"
                  id="name"
                  className={`${styles.contactInput} ${styles.small.contactInput}`}
                  style={{ width: "15rem", marginRight: "1rem" }}
                />
                {/* label & input email */}
                <label htmlFor="email" className={`${styles.contactLabel} ${styles.small.contactLabel}`}>
                  Votre Email :
                </label>
                <input
                  type="text"
                  id="email"
                  className={`${styles.contactInput} ${styles.small.contactInput}`}
                  style={{ width: "15rem" }}
                />

                {/* label & inputmessage */}
                <div>
                  <label htmlFor="message" className={`${styles.contactLabel} ${styles.small.contactLabel}`}>
                    Message :
                  </label>
                  <input
                    id="message"
                    type="text"
                    className={`${styles.contactInputMessage} ${styles.small.contactInputMessage}`}
                  />
                  <button className={`${styles.contactBtn} ${styles.small.contactBtn}`}>Envoyer</button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:justify-center lg:flex">
            <img src={BgContact} alt="Background SVG" />
          </div>
        </div>
      </div>
    </>
  );
};
