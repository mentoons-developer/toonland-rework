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

function Home() {
  //   console.log(pg2);
  //   console.log(pg2.offsetTop);

  useEffect(() => {
    const pg2 = document.getElementById("pg2");
    const button = document.getElementById("button");
    const pg3 = document.getElementById("pg3");

    button.addEventListener("click", function scrollToPg2() {
      window.scrollTo({
        top: pg2.offsetTop,
        behavior: "smooth",
      });
    });

    window.addEventListener("scroll", function () {
      if (window.pageYOffset === pg2.offsetTop) {
        setTimeout(() => {
          window.scrollTo({
            top: pg3.offsetTop,
            behavior: "smooth",
          });
        }, 1000);
      }
    });
  });

  return (
    <div>
      <div className={Styles.curtain}>
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
        {/*<img src={bg1} alt="" className={Styles.bg1} />*/}
      </div>
      <div id="pg2" className={Styles.pg2}>
        <div className={Styles.container}>
          <img src={teamImage} alt="" />
          <div style={{ position: "absolute", bottom: 0 }}></div>
          <h3>Shabeer - Web developer</h3>
          <h3>Samir Ansari - Web developer</h3>
          <h3>Lincy - SEO</h3>
          <h3>Vishal - video Editor</h3>
          <h3>Cedric - video Editor</h3>
        </div>
      </div>
      <div id="pg3" style={{ minHeight: "100vh" }}>
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
      </div>
    </div>
  );
}

export default Home;
