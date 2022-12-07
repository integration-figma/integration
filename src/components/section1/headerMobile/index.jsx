// import { styles } from "./styles";
import menuBurger from "../../../assets/img/menuBurger.svg";
import croix from "../../../assets/img/croix.svg";
import sega from "../../../assets/img/sega.png";
import ubisoft from "../../../assets/imgubisoft.png";
import microsoft from "../../../assets/imgmicrosoft.png";
import ea from "../../../assets/imgea.png";
import capcom from "../../../assets/imgcapcom.png";
import bethesda from "../../../assets/imgbethesda.png";

export const Section1HeaderMobile = () => {
  return (
    <>
      <div className="bg-custom-black-500 asbolute">
        <div className="flex">
          <h2 className="font-roboto font-black text-white pt-4 pl-8 text-3xl">
            Olivier.
          </h2>
          <div className="absolute" style={{ paddingLeft: "19rem" }}>
            <img
              src={menuBurger}
              height="auto"
              width="auto"
              alt="menu burger"
            />
          </div>
        </div>
        <p className="pt-20 pb-10 pl-8 text-white uppercase tracking-widest font-roboto">
          Je suis Fullstack Designer
          <div className="pt-4">
         
          </div>
        </p>
        <h2 className="text-4xl pb-6 pl-8 text-white">Hola, mi nombre es</h2>
        <h2 className="text-custom-orange text-7xl font-bold pl-8">Olivier.</h2>
        <img
          className="pl-20 pt-2"
          src={croix}
          height="auto"
          width="auto"
          alt="svg croix"
        />
        <p className="pt-4 text-white font-inter pl-8">
          Développement : Environnement LAMP, <br /> Zend Framework, ExtJS,
          Webservices, <br /> AMFPHP, API Google Maps, <br /> Facebook Open
          Graph, API Twitter
        </p>
        <p className="pt-10 pl-8 text-white font-inter">
          Directeur technique Webedia Madrid
        </p>
        <div className="pt-12 pl-8">
          <button className="bg-custom-red font-roboto px-8 text-white font-normal rounded-3xl text-sm w-32 h-12 mr-8">
            Portfolio
          </button>
          <button className="border-custom-orange border-2 text-custom-orange py-2.5 px-8 rounded-3xl font-roboto">
            Contact
          </button>
        </div>
        <div className="pt-16 pb-16">
          <p className="pb-8 pl-6 text-sm text-custom-gray-100 uppercase tracking-widest font-roboto">
            Clients
          </p>
          <div className="grid grid-cols-2">
            <div className="flex justify-center items-center">
              <img
                src={sega}
                alt="sega"
                style={{ width: "110px", height: "40px" }}
              />
            </div>
            <div className="flex justify-center">
              <img
                src={ubisoft}
                alt="sega"
                style={{ width: "80px", height: "75px" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mr-4">
            <div className="flex justify-center">
              <img
                src={microsoft}
                alt="sega"
                style={{ width: "185px", height: "85px" }}
              />
            </div>
            <div className="flex justify-center">
              <img
                src={ea}
                alt="sega"
                style={{ width: "150px", height: "85px" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mr-4">
            <div className="flex justify-center">
              <img
                src={capcom}
                alt="sega"
                style={{ width: "130px", height: "25px" }}
              />
            </div>
            <div className="flex justify-center">
              <img
                src={bethesda}
                alt="sega"
                style={{ width: "160px", height: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
