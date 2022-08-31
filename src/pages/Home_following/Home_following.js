import React from "react";
import Styles from "./home_following.module.scss";
import rock from "../../assets/rock.png";
import rock3 from "../../assets/rock3.png";
import meerkat from "../../assets/meerkat2.png";
import treeTrunk from "../../assets/tree_trunk.png";
import libraryTree from "../../assets/libraryTree.png";
import boardLong from "../../assets/longBoard.png";
import board from "../../assets/board.png";

import video1 from "../../assets/video1.png";
import video2 from "../../assets/video2.png";
import kumaLibrary from "../../assets/kumaLibrary.png";
import narrateButton from "../../assets/play.png";
import illuButton from "../../assets/illu-button.png";

import library from "../../assets/library2.png";
import theatre from "../../assets/theatre.png";
import mall from "../../assets/mall.png";
import comingsoon from "../../assets/comingsoon.png";

// import rock4 from "../../assets/rock4.png";
// import rock2 from "../../assets/rock2.png";

function Homefollowing() {
  return (
    <div>
      <div className={Styles.pg5}>
        <img src={rock} alt="" />
        <img src={rock3} alt="" />
        <img className={Styles.meerkat} src={meerkat} alt="" />
      </div>

      <div className={Styles.commonBG}>
        <div className={Styles.library}>
          <div className={Styles.containerrr}>
            <div className={Styles.descriptionImage}>
              <img src={kumaLibrary} alt="" />
              <span style={{ marginTop: "-10%" }}>Library</span>
            </div>
            <img className={Styles.board} src={board} alt="" />
            <div>
              <img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
              />
              <p className={Styles.text} style={{ width: "70%" }}>
                Get basics-to-know Knowledge cards @ ₹99
              </p>
            </div>

            <div>
              <p
                style={{
                  left: "50%",
                  top: "88%",
                  transform: "translateX(-50%)",
                }}
                className={Styles.freeSampleText}
              >
                Download
              </p>
              <img
                style={{ left: "50%", transform: "translateX(-50%)" }}
                className={Styles.illuButton}
                src={illuButton}
                alt=""
              />
            </div>
          </div>
          <img className={Styles.libraryTree} src={libraryTree} alt="" />
        </div>

        <div className={Styles.treeTrunkContainer}>
          <img className={Styles.treeTrunk} src={treeTrunk} alt="" />
          <img className={Styles.libraryImg} src={library} alt="" />
          <img className={Styles.theatre} src={theatre} alt="" />
          <div>
            {/*<img className={Styles.boardLong} src={boardLong} alt="" />*/}
            <img className={Styles.video1} src={video1} alt="" />
            <img className={Styles.video2} src={video2} alt="" />
          </div>
        </div>

        <div className={Styles.mallSection}>
          <img className={Styles.mall} src={mall} alt="" />

          <div className={Styles.containerrr}>
            <div className={Styles.descriptionImage}>
              <img src={kumaLibrary} alt="" />
              <span style={{ marginTop: "-10%" }}>Mall</span>
            </div>
            <img className={Styles.board} src={board} alt="" />
            {/*<div>
              <img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
              />
              <p className={Styles.text} style={{ width: "70%" }}>
                Get basics-to-know Knowledge cards @ ₹99
              </p>
            </div>*/}

            <div>
              <p
                style={{
                  left: "50%",
                  top: "88%",
                  transform: "translateX(-50%)",
                }}
                className={Styles.freeSampleText}
              >
                Download
              </p>
              <img
                style={{ left: "50%", transform: "translateX(-50%)" }}
                className={Styles.illuButton}
                src={illuButton}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={Styles.comingsoon}>
          <img src={comingsoon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homefollowing;
