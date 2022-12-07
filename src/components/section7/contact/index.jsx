import "../../../assets/css/styles.css";
import { styles } from "./styles";
import Adress from "../../../assets/img/adress.svg";
import Mail from "../../../assets/img/mail.svg";
import Tel from "../../../assets/img/tel.svg";

export const Contact = () => {
  return (
  <>
    <h2 className={`${}`}>Contact.</h2>
      <div className="bg-custom-black-500 text-white">
        <img src={Adress} alt="" />
        <p>Adresse</p>
        <p>36 rue des Peupliers Paris (75018) France</p>
        <img src={Mail} alt="" />
        <p>Mail</p>
        <p>olivier.depiesse@gmail.com</p>
        <img src={Tel} alt="" />
        <p>Téléphone</p>
        <p>06 54 84 54 75</p>
      </div>
    
    <h1 className="bg-custom-black-500 text-white">Utilisez le formulaire 
    ci-dessous pour me contacter</h1>
    <p className="bg-custom-black-500 text-white">
    Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue..
    </p>
    {/* Section form */}
<section class="text-gray-600 body-font relative bg-custom-black-500">
  <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div class="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full  bg-custom-black-500">
      <div class="relative mb-8 bg-custom-black-500">
        <label for="name" class="leading-7 text-sm text-white bg-custom-black-500  absolute -mt-4 ml-4 pr-4 pl-4 z-10">Votre nom :</label>
        <input type="text" class="w-full bg-custom-black-500 rounded border border-gray-300 text-white py-1 px-3 bg-custom-grey-300"/>
      </div>
      <div class="relative mb-8">
        <label for="email" class="leading-7 text-sm text-white bg-custom-black-500 absolute -mt-4 ml-4 pr-4 pl-4 z-10 ">Votre email :</label>
        <input type="email" class="w-full bg-custom-black-500 bg-custom-grey-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-white bg-custom-black-500 absolute -mt-4 ml-4 pr-4 pl-4 z-10 ">Message :</label>
        <textarea class="w-full bg-custom-black-500 bg-custom-grey-300 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-custom-red border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-28 mt-4">Envoyer</button>
    </div>
  </div>
</section>
  </>
  );
};