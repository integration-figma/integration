import styles from "./styles";
import border from "../../assets/img/borderOrange.svg";
import exp1 from "../../assets/img/experience1.svg";
import exp2 from "../../assets/img/experience2.svg";
import exp3 from "../../assets/img/experience3.svg";
import hr from "../../assets/img/hr.svg";
import ss from "../../assets/img/ss.svg";
import aa from "../../assets/img/aa.svg";
import ff from "../../assets/img/ff.svg";

export const Section4Timeline = () => {
  return (
    <>
      <section className={styles.bg}>
        <div className={styles.divSkills}>
          <h2 className={styles.title}>Experience</h2>
          <img src={border} alt="border" className={styles.img} />
          <p className={styles.textP}>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem, It
            doesn’t matter how great your product or service is if your copy
            does not captivate your audience.
          </p>
        </div>
        <section>
          <div className="pl-9 pt-10">
            <div className="inline-flex">
              <img src={exp1} alt="exp1" />
              <h6 className={styles.expH6}>AUJOURD’HUI</h6>
            </div>
            <h3 className="text-white font-inter font-bold text-lg pl-12">
              Web Developper
            </h3>
          </div>
          <div className="pl-9 pt-10">
            <div className="inline-flex">
              <img src={exp2} alt="exp1" />
              <h6 className={styles.expH6}>MAI 2010 - AVRIL 2021</h6>
            </div>
            <h3 className="text-white font-inter font-bold text-lg pl-12">
              Directeur de projet Web
            </h3>
          </div>
          <div className="pl-9 pt-10">
            <div className="inline-flex">
              <img src={exp3} alt="exp1" />
              <h6 className={styles.expH6}>SEPT 2008 - MAI 2009</h6>
            </div>
            <h3 className="text-white font-inter font-bold text-lg pl-12">
              Web Developper
            </h3>
          </div>
        </section>
        <div className="h-40 flex items-center pl-10">
          <p className="bg-[#BB2323] font-inter rounded-full text-white text-sm px-8 py-3">
            Download Resume
          </p>
        </div>
        <div className="hidden lg:block">
          <h2 className={styles.title}>Experience</h2>
          <img src={border} alt="border" className={styles.img} />
          <p className={styles.textP}>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem, It
            doesn’t matter how great your product or service is if your copy
            does not captivate your audience.
          </p>
        </div>
      </section>
      <section className="hidden lg:bg-custom-black-100 lg:grid lg:grid-cols-3 lg:pt-24">
        <div className="lg:flex lg:flex-col lg:items-start lg:pl-28">
          <h2 className={styles.title}>Experience</h2>
          <img src={border} alt="border" className="pb-6 pr-28" />
          <p className="text-white font-inter font-normal text-sm lg:pr-28">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem, It
            doesn’t matter how great your product or service is if your copy
            does not captivate your audience.
          </p>
          <div className="h-40 flex items-center">
            <button className="cursor-pointer bg-[#BB2323] font-inter rounded-full text-white text-sm px-8 py-3">
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-span-2 pl-10">
          <div className="grid grid-cols-2 pb-10">
            <div>
              <img src={ss} alt="exp1" />
            </div>
            <div>
              <p className="text-white text-sm font-inter font-normal pr-32 lg:pr-60">
                Au sein du pôle R+D, développement et amélioration du framework
                maison et du backoffice. Création d'un outil d'analyse des logs
                d'accès crawlers
              </p>
            </div>
          </div>
          <img src={hr} alt="hr" />
          <div className="grid grid-cols-2 pt-10 pb-16">
            <div>
              <img src={aa} alt="exp1" />
            </div>
            <div>
              <p className="text-white text-sm font-inter pr-40 lg:pr-60">
                Mise en place de la méthodologie et des processus de
                développement - SVN, Trac, Hudson
              </p>
            </div>
          </div>
          <img src={hr} alt="hr" />
          <div className="grid grid-cols-2 pt-10 pb-16">
            <div>
              <img src={ff} alt="exp1" />
            </div>
            <div>
              <p className="text-white text-sm font-inter pr-40 lg:pr-60">
                Création de sites et de jeux concours principalement dans le
                domaine des jeux vidéos : Sega, Ubisoft, Microsoft, Electronic
                Arts, Capcom, Bethesda
              </p>
            </div>
          </div>
          <img src={hr} alt="hr" />
        </div>
      </section>
    </>
  );
};
