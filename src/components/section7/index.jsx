import { styles } from "./styles";
import BorderOrange from "../../assets/img/borderOrange.svg";

import BgNews from "../../assets/img/BgNews.svg";

export const Section7NewsDesktop = () => {
  return (
    <>
      {/* // For background SVG IMG */}
      <div className={`${styles.ContentBgSVG} ${styles.small.ContentBgSVG}`}>
        {/* div for content text */}
        <div>
          <div className="lg:absolute lg:pt-20 lg:pl-28  lg:flex lg:justify-center  lg:w-screen">
            <div className="">
              <h2 className="lg:text-4xl text-5xl pl-8">Actualités</h2>
              <img
                className="lg:pt-6 pl-8 py-4"
                src={BorderOrange}
                height="auto"
                width="auto"
                alt="border orange"
              />
            </div>
            <div className="lg:flex lg:flex-col lg:pl-36 pl-8 pr-16">
              <div>
                <div className=" lg:w-200 lg:mr-8 lg:pt-2">
                  <h6 className={`${styles.news.h6DateOrange} ${styles.small.h6DateOrange}`}>19 août 2014</h6>
                  <h3 className={`${styles.news.h3textUppercase} ${styles.small.h3textUppercase}`}>
                    OMOTE / REAL-TIME FACE TRACKING & PROJECTION MAPPING
                  </h3>
                  <p className={`${styles.news.paragraph2} ${styles.small.paragraph2}`}>
                    LIVE INSTALLATION ON 2014/8/28connpass.com/event/8112/
                    PROJECT <br /> MEMBERS NOBUMICHI ASAI (PLANNER / PRODUCER /
                    TECHNICAL...
                  </p>
                  <h6 className={`${styles.news.h6DateOrange} ${styles.small.h6DateOrange}`}>08 NOVEMBRE 2013</h6>
                  <h3 className={`${styles.news.h3text} ${styles.small.h3text}`}>Forest</h3>
                  <p className={`${styles.news.paragraph2} ${styles.small.paragraph2}`}>
                    Movie : Takeshi Tsunehashi d-apartment.net - The post Forest
                    first appeared <br /> on Yop Concept.
                  </p>
                  <h6 className={`${styles.news.h6DateOrange} ${styles.small.h6DateOrange}`}>18 OCTOBRE 2013</h6>
                  <h3 className={`${styles.news.h3text} ${styles.small.h3text}`}>
                    Atoms For Peace – Before Your Very Eyes
                  </h3>
                  <p className={`${styles.news.paragraph2} ${styles.small.paragraph2}`}>
                    Vous trouverez ici le making-of : <br />
                    http://www.youtube.com/watch?v=mfWNvhgHV3A...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:justify-center lg:flex">
            <img src={BgNews} height="auto" width="auto" alt="Background SVG" />
          </div>
        </div>
      </div>
    </>
  );
};
