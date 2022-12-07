import { styles } from "./styles";
import BgContact from "../../assets/img/svgDesktop/BgContact.svg";
import locationIco from "../../assets/img/ico/adress.svg";
import mailIco from "../../assets/img/ico/mail.svg";
import telIco from "../../assets/img/ico/tel.svg";

export const Section8ContactDesktop = () => {
  return (
    <>
      <div className={styles.ContentBgSVG}>
        {/* div for content text */}
        <div>
          <div className="absolute  text-4xl w-screen ">
            <div className="grid grid-cols-2">
              <div className="lg:pt-52 lg:pl-96">
                <h2 className={styles.text.h2Contact}>Contact.</h2>
                {/* icon adress */}
                <div className={styles.itemsCenter}>
                  <img
                    src={locationIco}
                    height="auto"
                    width="auto"
                    alt="icone localisation"
                    className={styles.locationIco}
                  />
                  {/* div for content adress text */}
                  <div>
                    <p className={styles.text.subTitleIco}>Adresse</p>
                    <p className={styles.text.resultContact}>
                      36 rue des Peupliers <br /> Paris (75018) France
                    </p>
                  </div>
                </div>
                {/* icon mail */}
                <div className={`my-4 ${styles.itemsCenter}`}>
                  <img
                    src={mailIco}
                    height="auto"
                    width="auto"
                    alt="icone mail"
                    className={styles.mailIco}
                  />
                  {/* div for content mail text */}
                  <div>
                    <p className={styles.text.subTitleIco}>Mail</p>
                    <p className={styles.text.resultContact}>
                      olivier.depiesse@gmail.com
                    </p>
                  </div>
                </div>
                {/* icon tel */}
                <div className={styles.itemsCenter}>
                  <img
                    src={telIco}
                    height="auto"
                    width="auto"
                    alt="icone tel"
                    className={styles.telIco}
                  />
                  {/* div for content tel text */}
                  <div>
                    <p className={styles.text.subTitleIco}>Téléphone</p>
                    <p className={styles.text.resultContact}>06 54 84 54 75</p>
                  </div>
                </div>
              </div>
              {/* div col 2 */}
              <div className="lg:pt-40 lg:pl-48">
                <h6 className="font-roboto text-base uppercase tracking-widest">
                  Contactez moi
                </h6>
                <h5 className={styles.text.titleForm}>
                  Utilisez le formulaire <br /> ci-dessous pour me contacter
                </h5>
                <p className={styles.text.paragraph2}>
                  Cras fermentum odio eu feugiat. Justo eget magna fermentum
                  iaculis eu non <br /> diam phasellus. Scelerisque felis
                  imperdiet proin fermentum leo. Amet volutpat <br /> consequat
                  mauris nunc congue..
                </p>

                {/* label & input name */}

                <label htmlFor="name" className={styles.contactLabel}>
                  Votre nom :
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.contactInput}
                  style={{ width: "15rem", marginRight: "1rem" }}
                />
                {/* label & input email */}
                <label htmlFor="email" className={styles.contactLabel}>
                  Votre Email :
                </label>
                <input
                  type="text"
                  id="email"
                  className={styles.contactInput}
                  style={{ width: "15rem" }}
                />

                {/* label & inputmessage */}
                <div>
                  <label htmlFor="message" className={styles.contactLabel}>
                    Message :
                  </label>
                  <input
                    id="message"
                    type="text"
                    className={styles.contactInputMessage}
                  />
                  <button className={styles.contactBtn}>Envoyer</button>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center flex">
            <img src={BgContact} alt="Background SVG" />
          </div>
        </div>
      </div>
    </>
  );
};
