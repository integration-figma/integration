import { styles } from "./styles";
import BorderOrange from "../../assets/img/ico/borderOrange.svg";

import BgNews from "../../assets/img/svgDesktop/BgNews.svg";

export const Section7NewsDesktop = () => {
  return (
    <>
      {/* // For background SVG IMG */}
      <div className={styles.ContentBgSVG}>
        {/* div for content text */}
        <div>
          <div className="absolute pt-20 pl-28  flex justify-center  w-screen">
            <div className="">
              <h2 className="text-4xl">Actualités</h2>
              <img
                className="pt-6"
                src={BorderOrange}
                height="auto"
                width="auto"
                alt="border orange"
              />
            </div>
            <div className="flex flex-col pl-36">
              <div>
                <div className=" w-200 mr-8 pt-2">
                  <h6 className={styles.news.h6DateOrange}>19 août 2014</h6>
                  <h3 className={styles.news.h3textUppercase}>
                    OMOTE / REAL-TIME FACE TRACKING & PROJECTION MAPPING
                  </h3>
                  <p className={styles.news.paragraph2}>
                    LIVE INSTALLATION ON 2014/8/28connpass.com/event/8112/
                    PROJECT <br /> MEMBERS NOBUMICHI ASAI (PLANNER / PRODUCER /
                    TECHNICAL...
                  </p>
                  <h6 className={styles.news.h6DateOrange}>08 NOVEMBRE 2013</h6>
                  <h3 className={styles.news.h3text}>Forest</h3>
                  <p className={styles.news.paragraph2}>
                    Movie : Takeshi Tsunehashi d-apartment.net - The post Forest
                    first appeared <br /> on Yop Concept.
                  </p>
                  <h6 className={styles.news.h6DateOrange}>18 OCTOBRE 2013</h6>
                  <h3 className={styles.news.h3text}>
                    Atoms For Peace – Before Your Very Eyes
                  </h3>
                  <p className={styles.news.paragraph2}>
                    Vous trouverez ici le making-of : <br />
                    http://www.youtube.com/watch?v=mfWNvhgHV3A...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center flex">
            <img src={BgNews} height="auto" width="auto" alt="Background SVG" />
          </div>
        </div>
      </div>
    </>
  );
};
