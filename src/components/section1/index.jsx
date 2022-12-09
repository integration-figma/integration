import { styles } from "./styles";
import BgHeader from "../../assets/img/BgHeader.svg";
import IcoTelHeader from "../../assets/img/IcoTelHeader.svg";
import IcoMailHeader from "../../assets/img/IcoMail.svg";

import ProfilPics from "../../assets/img/ProfilPics.svg";
import sega from "../../assets/img/sega.png";
import ubisoft from "../../assets/img/ubisoft.png";
import microsoft from "../../assets/img/microsoft.png";
import ea from "../../assets/img/ea.png";
import capcom from "../../assets/img/capcom.png";
import bethesda from "../../assets/img/bethesda.png";

export const Section1HeaderDesktop = () => {
  return (
    <>
      <div className={`${styles.ContentBgSVG} ${styles.small.ContentBgSVG}`}>
        {/* div for content text */}
        <div>
          <div className="absolute">
            <div className="flex pl-8 pt-10">
              <h2 className="font-roboto font-black pl-6 pr-20 text-3xl">
                Olivier.
              </h2>
              <img
                className="px-4 pb-2 "
                src={IcoTelHeader}
                height="auto"
                width="auto"
                alt="Ico Tel"
              />
              <p className="pr-20">+98 76-54-1423</p>
              <img
                className="pb-4"
                src={IcoMailHeader}
                height="auto"
                width="auto"
                alt="ico mail"
              />
              <p className="pl-4">olivier.depiesse@gmail.com</p>
            </div>
            <div className="flex justify-center"></div>
            <div className="grid grid-cols-2 w-screen">
              {/* col 1 */}
              <div className="">
                <div className="flex flex-col">
                  <p
                    className="pt-20 pb-10 text-custom-gray-100 uppercase tracking-widest font-roboto"
                    style={{ paddingLeft: "24.2rem" }}
                  >
                    Je suis Fullstack Designer
                  </p>
                  <h2
                    className="text-4xl pb-6"
                    style={{ paddingLeft: "24.2rem" }}
                  >
                    Hola, mi nombre es
                  </h2>
                  <h2
                    className="text-custom-orange font-bold text-7xl"
                    style={{ paddingLeft: "24rem" }}
                  >
                    Olivier.
                  </h2>
                  <p className="pt-10" style={{ paddingLeft: "24.2rem" }}>
                    Développement : Environnement LAMP, Zend Framework, <br />
                    ExtJS, Webservices, AMFPHP, API Google Maps, <br /> Facebook
                    Open Graph, API Twitter
                  </p>
                  <p className="pt-10" style={{ paddingLeft: "24.2rem" }}>
                    Directeur technique Webedia Madrid
                  </p>

                  <div className="pt-12" style={{ paddingLeft: "24.2rem" }}>
                    <button className="bg-custom-red font-roboto font-normal rounded-3xl text-sm w-32 h-12 mr-8 px-10">
                      Portfolio
                    </button>
                    <button className="border-custom-orange border-2 text-custom-orange py-2.5 px-10 rounded-3xl font-roboto">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
              {/* cols 2 */}
              <div className="flex justify-end items-center ml-40 pt-20 ">
                <img
                  src={ProfilPics}
                  alt="olivier"
                  style={{ width: "765px", height: "525px" }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center pt-56">
              <p className="text-sm text-center text-custom-gray-100 uppercase tracking-widest font-roboto">
                Clients
              </p>
              <div className="w-full flex flex-row justify-center items-center">
                <img
                  src={sega}
                  alt="sega"
                  style={{ width: "110px", height: "40px" }}
                  className="mx-16"
                />
                <img
                  src={ubisoft}
                  alt="sega"
                  style={{ width: "75px", height: "70px" }}
                />
                <img
                  src={microsoft}
                  alt="sega"
                  style={{ width: "205px", height: "90px" }}
                  className="mx-16"
                />
                <img
                  src={ea}
                  alt="sega"
                  style={{ width: "165px", height: "95px" }}
                />
                <img
                  src={capcom}
                  alt="sega"
                  style={{ width: "130px", height: "25px" }}
                  className="mx-16"
                />
                <img
                  src={bethesda}
                  alt="sega"
                  style={{ width: "160px", height: "20px" }}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="" style={{ margin: "0" }}>
            <img
              src={BgHeader}
              height="auto"
              width="auto"
              alt="Background SVG"
            />
          </div>
        </div>
      </div>
    </>
  );
};
