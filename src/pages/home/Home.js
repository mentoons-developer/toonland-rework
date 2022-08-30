import React, { useEffect } from "react";
import Styles from "./home.module.scss";
import bg1 from "../../assets/bg1.jpg";
import teamImage from "../../assets/group_image.png";
import audioStories from "../../assets/audio-stories.png";
import illustratedStories from "../../assets/illustrated-stories.png";
import stellaBella from "../../assets/stella_bella.png";
import knowledgeCard from "../../assets/murder_mystery.png";
import library from "../../assets/library-new.png";
import theatre from "../../assets/theatre.png";
import contest from "../../assets/Contests.png";
import mall from "../../assets/mall.png";
import bgExtended from "../../assets/bg-extended.jpg";
import newbg2 from "../../assets/new-bg2.jpg";
import board from "../../assets/board.png";
import illuButton from "../../assets/illu-button.png";
import boardTop from "../../assets/board-top.png";
import boardMiddle from "../../assets/board-middle.png";
import boardBottom from "../../assets/board-bottom.png";

import charactersWalking from "../../assets/characters_walking.png";
import bg1_new from "../../assets/bg1_new.png";
import top_branch from "../../assets/top_branch.png";
import ngina from "../../assets/ngina.png";
import logo from "../../assets/logo.png";
import green_left from "../../assets/green-left.png";
import green_right from "../../assets/green-right.png";

import narrateButton from "../../assets/play.png";

import video1 from "../../assets/video1.png";
import video2 from "../../assets/video2.png";

function Home() {
  //   console.log(pg2);
  //   console.log(pg2.offsetTop);

  // useEffect(() => {
  //   const pg2 = document.getElementById("pg2");
  //   const button = document.getElementById("button");
  //   const pg3 = document.getElementById("pg3");

  //   button.addEventListener("click", function scrollToPg2() {
  //     window.scrollTo({
  //       top: pg2.offsetTop,
  //       behavior: "smooth",
  //     });
  //   });

  //   window.addEventListener("scroll", function () {
  //     if (window.pageYOffset === pg2.offsetTop) {
  //       setTimeout(() => {
  //         window.scrollTo({
  //           top: pg3.offsetTop,
  //           behavior: "smooth",
  //         });
  //       }, 1000);
  //     }
  //   });
  // });

  return (
    <div>
      {/*<div className={Styles.curtain}>
        <div className={Styles.left}></div>
        <div className={Styles.right}></div>
      </div>
      <div className={Styles.pg1}>
        <div style={{ paddingTop: "20vh" }}>
          <iframe
            src="https://www.youtube.com/embed/LG8brAlJXpk?controls=0&showinfo=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <button id="button">Continue to Toonland</button>
      </div>*/}

      <div className={Styles.curtain}>
        <div className={Styles.left}></div>
        <div className={Styles.right}></div>
      </div>
      <div className={Styles.pg1_new}>
        <button id="button">Continue to Toonland</button>
        <img className={Styles.bg1_new} src={bg1_new} alt="" />
        <img className={Styles.logo} src={logo} alt="" />
        <img className={Styles.green_left} src={green_left} alt="" />
        <img className={Styles.green_right} src={green_right} alt="" />
        <iframe
          src="https://www.youtube.com/embed/LG8brAlJXpk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <img className={Styles.top_branch} src={top_branch} alt="" />
        <img
          className={Styles.charactersWalking}
          src={charactersWalking}
          alt=""
        />

        <img className={Styles.ngina} src={ngina} alt="" />
      </div>

      <div className={Styles.commonback}>
        <div className={Styles.audiostories_new}>
          <div className={Styles.containerrr}>
            <div className={Styles.descriptionImage}>
              <img src={audioStories} alt="" />
              <span>audioStories</span>
            </div>
            <img className={Styles.board} src={board} alt="" />
            <div>
              <img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
              />
              <p className={Styles.text} style={{ width: "70%" }}>
                Click here to listen to audio stories
              </p>
            </div>

            <div>
              <img className={Styles.freeSample} src={narrateButton} alt="" />
              <p className={Styles.freeSampleText}>Free listen</p>
              <img className={Styles.illuButton} src={illuButton} alt="" />
            </div>

            <div>
              <img className={Styles.illuButton2} src={illuButton} alt="" />
              <p className={Styles.illuButton2Text}>Buy now</p>
            </div>
          </div>

          <div className={Styles.containerrr}>
            <img className={Styles.board} src={board} alt="" />
            <div>
              <img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
              />
              <p className={Styles.text}>
                Get access to exclusive music of toonland @ 99/
              </p>
            </div>
            <div>
              <img
                style={{ left: "50%", transform: "translateX(-50%)" }}
                className={Styles.illuButton}
                src={illuButton}
                alt=""
              />
              <img
                style={{ left: "35%", transform: "translateX(-50%)" }}
                className={Styles.freeSample}
                src={narrateButton}
                alt=""
              />
              <p
                style={{ left: "55%", transform: "translateX(-50%)" }}
                className={Styles.freeSampleText}
              >
                Free listen
              </p>
            </div>
          </div>

          <div className={Styles.containerrr}>
            <img className={Styles.board} src={board} alt="" />
            <div>
              <img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
              />
              <p className={Styles.text}>
                How to make your own music & release album/single
              </p>
            </div>
            <img
              style={{ left: "50%", transform: "translateX(-50%)" }}
              className={Styles.illuButton}
              src={illuButton}
              alt=""
            />
          </div>
        </div>

        <div className={Styles.youtube_new}>
          <div
            className={`${Styles.containerrr} ${Styles.containerrr_extended}`}
          >
            <div className={Styles.descriptionImage}>
              <img src={illustratedStories} alt="" />
              <span>Illustrated Movies</span>
            </div>
            <img className={Styles.board} src={board} alt="" />
            <div className={Styles.sampleVideos}>
              <img src={video1} alt="" />
              <img src={video2} alt="" />
            </div>
            <img className={Styles.illuButton} src={illuButton} alt="" />
          </div>
        </div>

        <div className={Styles.comics_new}>
          <div className={Styles.containerrr}>
            <div className={Styles.descriptionImage}>
              <img src={stellaBella} alt="" />
              <span>Comics</span>
            </div>
            <img className={Styles.board} src={board} alt="" />
            <img className={Styles.illuButton} src={illuButton} alt="" />
            <img className={Styles.illuButton2} src={illuButton} alt="" />

            <div>
              <img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
              />
              <p className={Styles.text}>
                100 comics on Toonland based on 9 intelligence for 6-12 yrs
              </p>
            </div>
          </div>

          <div className={Styles.containerrr}>
            <img className={Styles.board} src={board} alt="" />
            <img
              style={{ left: "50%", transform: "translateX(-50%)" }}
              className={Styles.illuButton}
              src={illuButton}
              alt=""
            />

            <div>
              <img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
                style={{ top: "32%" }}
              />
              <p className={Styles.text}>
                Comic @ ₹49, guide to create your own comics <br />
                <button>Buy now</button>
              </p>
            </div>
          </div>

          <div className={Styles.containerrr}>
            <img className={Styles.board} src={board} alt="" />
            <img
              style={{ left: "50%", transform: "translateX(-50%)" }}
              className={Styles.illuButton}
              src={illuButton}
              alt=""
            />

            <div>
              <img
                className={Styles.narrateButton}
                src={narrateButton}
                alt=""
                style={{ top: "32%" }}
              />
              <p className={Styles.text}>
                2 days workshop on how to create your own comics @ ₹699
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*<div id="pg3" style={{ minHeight: "100vh" }}>
        <div className={Styles.listy}>
          <div className={Styles.description}>
            <div className={Styles.sameRow}>
              <p>
                Listen anywhere, packs the perfect conbination of listening,
                learning & fun
              </p>
              <div className={Styles.descriptionImage}>
                <img src={audioStories} alt="" />
                <span>audioStories</span>
              </div>
            </div>

            <div className={Styles.occupyfull}>
              <p>
                Suitable for 6-12 year kids. The listen at home pack consists of
                Audio stories and other materials to keep your child entertained
                at home.
              </p>
              <audio controls>
                <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
              </audio>
              <div className={Styles.occupyfullButton}>
                <button>Listen free</button>
                <button>Buy more</button>
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <div className={Styles.sameRow}>
              <div className={Styles.descriptionImage}>
                <img src={illustratedStories} alt="" />
                <span>illustratedStories</span>
              </div>
              <p>
                Enjoy reading comics with our Illustrations specially selected
                for 6-12 years
              </p>
            </div>
            <div className={Styles.occupyfull}>
              <p>
                A careful selection of fun engaging and age appropriate book
                packs to keep children entertained and away from their screen.
              </p>
              <div className={Styles.occupyfullButton}>
                <button>Download free</button>
                <button>Buy more</button>
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <div className={Styles.sameRow}>
              <p>
                '100 comics of Toonland' writtern on the 9-intelligence of
                Toonland characters
              </p>
              <div className={Styles.descriptionImage}>
                <img src={stellaBella} alt="" />
                <span>Comics</span>
              </div>
            </div>
            <div className={Styles.occupyfull}>
              <div className={Styles.occupyfullButton}>
                <button>Download free</button>
                <button>Buy more</button>
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <div className={Styles.sameRow}>
              <div className={Styles.descriptionImage}>
                <img src={knowledgeCard} alt="" />
                <span>knowledgeCard</span>
              </div>
              <p>
                Get our Knowledge cards to know the amazing facts behind the
                inventions
              </p>
            </div>
            <div className={Styles.occupyfull}>
              <div className={Styles.occupyfullButton}>
                <button>Download free</button>
                <button>Buy more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.pg4}>
        <div className={Styles.pg4_container}>
          <img src={library} alt="" />
          <p> Recommended readings, Journals, DIY</p>
        </div>
        <img src={theatre} alt="" />
        <img src={mall} alt="" />
        <img src={contest} alt="" />
      </div>*/}
    </div>
  );
}

export default Home;

// <div id="pg2" className={Styles.pg2}>
//   <div className={Styles.container}>
//     <img src={teamImage} alt="" />
//     <div style={{ position: "absolute", bottom: 0 }}></div>
//     <h3>Shabeer - Web developer</h3>
//     <h3>Samir Ansari - Web developer</h3>
//     <h3>Lincy - SEO</h3>
//     <h3>Vishal - video Editor</h3>
//     <h3>Cedric - video Editor</h3>
//   </div>
// </div>;
