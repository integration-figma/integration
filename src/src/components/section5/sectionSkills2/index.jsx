import AngularIco from "../../../assets/img/ico/angular.svg";
import ReactIco from "../../../assets/img/ico/react.svg";
import NodeIco from "../../../assets/img/ico/node.svg";
import ManagementIco from "../../../assets/img/ico/management.svg";
import AnalitycsIco from "../../../assets/img/ico/analytics.svg";
import BrainIco from "../../../assets/img/ico/brainstorming.svg";
import ExecutionIco from "../../../assets/img/ico/management.svg";
import BorderOrange from "../../../assets/img/ico/borderOrange.svg";
import { styles } from "./styles";

export const Section5Skills = () => {
  return (
    <>
      {/* background brown */}
      <div className={styles.bgSkills}>
        {/* div for 2 box skills */}
        <div className={styles.grid.gridCols2}>
          {/* cols 1 */}
          <div className="ml-40 mt-64">
            <div className="flex justify-end pb-6 ">
              {/* div skills angular */}
              <div className={`${styles.bgBoxContent}`} style={{width: "300px", height: "60px"}}>
                <div className={styles.iconBox}>
                  <img
                    src={AngularIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Angular</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange} style={{marginLeft: "7rem"}}>80%</p>
                  </div>
                </div>
              </div>
              {/* div skills React */}
              <div className={`ml-6 ${styles.bgBoxContent}`}  style={{width: "350px", height: "60px"}}>
                <div className={styles.iconBox}>
                  <img
                    src={ReactIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>React</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange} style={{marginLeft: "11rem"}}>90%</p>
                  </div>
                </div>
              </div>
            </div>
            {/* div for 2 box skills */}
            <div className="flex justify-center mr-2 pb-6">
              {/* div skills Node JS */}
              <div className={`${styles.bgBoxContent}`}  style={{width: "225px", height: "60px"}}>
                <div className={styles.iconBox}>
                  <img
                    src={NodeIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Node JS</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange} style={{marginLeft: "18px"}}>60%</p>
                  </div>
                </div>
              </div>
              {/* div skills Management */}
              <div className={`ml-6 ${styles.bgBoxContent}`}  style={{width: "300px", height: "60px"}}>
                <div className={styles.iconBox}>
                  <img
                    src={ManagementIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Management</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange} style={{marginLeft: "5rem"}}>70%</p>
                  </div>
                </div>
              </div>
            </div>
            {/* div for 2 box skills */}
            <div className="flex justify-center ml-10 pb-6">
              {/* div skills Analitycs */}
              <div className={`${styles.bgBoxContent}`}  style={{width: "285px", height: "60px"}}>
                <div className={styles.iconBox}>
                  <img
                    src={AnalitycsIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Analitycs</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange} style={{marginLeft: "6rem"}}>90%</p>
                  </div>
                </div>
              </div>
              {/* div skills Brainstorming */}
              <div className={`ml-6 ${styles.bgBoxContent}`}  style={{width: "285px", height: "60px"}}>
                <div className={styles.iconBox}>
                  <img
                    src={BrainIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Brainstroming</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange} style={{marginLeft: "4rem"}}>60%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mr-[4.5rem] pb-6">
              {/* div skills Execution */}
              <div className={`${styles.bgBoxContent}`}  style={{width: "482px", height: "60px"}}>
                <div className={styles.iconBox}>
                  <img
                    src={ExecutionIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Execution</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange} style={{marginLeft: "17rem"}}>100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* cols-2 */}
          <div>
            {/* div content text Skills */}
            <div className="ml-52 mt-72">
              <h2 className={`${styles.h2Skills}`}>Compétences</h2>
              <img
                className="pt-4 pb-10 pl-1"
                src={BorderOrange}
                height="auto"
                width="auto"
                alt="Bordure orange"
              />
              <p className={styles.paragraphSkills}>
                Necessitatibus eius consequatur ex aliquid fuga <br /> eum
                quidem, It doesn’t matter how great your <br /> product or
                service is if your copy does not <br /> captivate your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
