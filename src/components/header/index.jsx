import styles from "./styles";

const Header = () => {
  return (
    <section className={styles.header}>
      <div>
        <h1>Olivier.</h1>
      </div>
      <div>
        <h1 className={styles.text}>
          Je suis fullstack designer 
        </h1>
      </div>
      <div>
        <h1>
          Hola, mi nombre es 
        </h1>
        <h1>
          Olivier.
        </h1>
        <p>
          Développement : Environnement LAMP, Zend Framework, ExtJS,
          Webservices, AMFPHP, API Google Maps, Facebook Open Graph, API Twitter
        </p>
        <p>
          Directeur technique Webedia Madrid 
        </p>
      </div>
      <div>
        <button>
          porfolio
        </button>
        <button>
          Contact 
        </button>
      </div>
    </section>
  );
};

export default Header;
