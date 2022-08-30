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
      <div className={Styles.library}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={Styles.containerrr}>
          <div className={Styles.descriptionImage}>
            <img src={kumaLibrary} alt="" />
            <span style={{ marginTop: "-10%" }}>Library</span>
          </div>
          <img className={Styles.board} src={board} alt="" />
          <div>
            <img className={Styles.narrateButton} src={narrateButton} alt="" />
            <p className={Styles.text} style={{ width: "70%" }}>
              Get basics-to-know Knowledge cards @ ₹99
            </p>
          </div>

          <div>
            <img className={Styles.freeSample} src={narrateButton} alt="" />
            <p className={Styles.freeSampleText}>Download</p>
            <img className={Styles.illuButton} src={illuButton} alt="" />
          </div>

          <div>
            <img className={Styles.illuButton2} src={illuButton} alt="" />
            <p className={Styles.illuButton2Text}>Buy now</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <img className={Styles.libraryTree} src={libraryTree} alt="" />
        <img className={Styles.treeTrunk} src={treeTrunk} alt="" />
        <div>
          <img className={Styles.boardLong} src={boardLong} alt="" />
          <img className={Styles.video1} src={video1} alt="" />
          <img className={Styles.video2} src={video2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homefollowing;
