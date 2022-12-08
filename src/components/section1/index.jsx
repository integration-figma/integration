import styles from "./styles";
import Sega from "../../assets/img/Sega.svg";
import Microsoft from "../../assets/img/micro.svg";
import Capcom from "../../assets/img/capcom.svg";
import Ubisoft from "../../assets/img/ubisoft.svg";

const Section1 = () => {
  return (
    <section>
      <div>
        <h2>Client</h2>
      </div>
      {/* Sega */}
      <div>
        <img src={Sega} alt="Sega" />
      </div>
      {/* Microsoft */}
      <div>
        <img src={Microsoft} alt="Microsoft" />
      </div>
      {/* Capcom */}
      <div>
        <img src={Capcom} alt="Capcom" />
      </div>
      {/* Ubisoft */}
      <div>
        <img src={Ubisoft} alt="" />
      </div>
    </section>
  );
};

export default Section1;
