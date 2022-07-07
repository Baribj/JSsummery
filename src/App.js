import Heading from "./components/Heading";

import TipWrapper from "./components/TipWrapper";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

/* import jsInfoTips from "./jsInfoTips"; */

import randomJsTips from "./randomJsTips";

import tips from "./jsinfo/tips";

import { useState } from "react";

function App() {
  const [hiddenSections, setHiddenSection] = useState([]);

  function handleShowHide(n) {
    if (hiddenSections.includes(n)) {
      //
      const shown = [...hiddenSections];
      shown.splice(hiddenSections.indexOf(n), 1);
      setHiddenSection(shown);
      //
    } else {
      //
      setHiddenSection([...hiddenSections, n]);
      //
    }
  }
  //

  //
  return (
    <div className="App py-5 my-5">
      <div className="container">
        <Heading type="h1" text={"JavaScript quick summary | by Ritwal"} />
        <div className="wrapper mb-5">
          <p>Quick tips that cover a wide range of JavaScript concepts.</p>
          <p>
            Please note that this as a personal project that isn't meant for
            everyone. this is definitely not the right place to learn
            JavaScript.
          </p>
          <p>
            If you are interested in learning JavaScript, I recommend taking a
            look at{" "}
            <a
              href="https://javascript.info/"
              target="__blank"
              rel="noreferrer"
            >
              javascript.info
            </a>
            .
          </p>
        </div>

        <div className="wrapper jsInfoTips-wrapper mb-5 pb-5">
          <Heading type="h2" text="Javascript.info book tips:" />
          <p className="mb-4">
            Here is a quick summary of the book JavaScript.info, I included at
            least one tip from every chapter to keep the flow as logical as
            possible.
          </p>

          {tips.map((section, sectionKey) => {
            return (
              <div className="tipsSection mb-5" key={sectionKey}>
                <div className="position-relative pe-4">
                  <Heading
                    type="h3"
                    text={`${
                      "Section " +
                      String(sectionKey + 1) +
                      " | " +
                      section.sectionTitle +
                      ":"
                    }`}
                    sectionNumber={sectionKey}
                    handleShowHide={handleShowHide}
                  />
                  <ArrowRightIcon
                    fontSize="large"
                    color="primary"
                    style={{
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                      color: "var(--secondaryColor)",
                      cursor: "pointer",
                      transform: `${
                        hiddenSections.includes(sectionKey)
                          ? "rotate(0deg)"
                          : "rotate(90deg)"
                      }`,
                    }}
                    onClick={() => {
                      handleShowHide(sectionKey);
                    }}
                  />
                </div>

                {hiddenSections.includes(sectionKey) ? (
                  <p style={{ color: "var(--secondaryColor)" }}>[Hidden]</p>
                ) : (
                  section.chapters.map((chapter, chapterKey) => {
                    return (
                      <div className="tipsChapter mb-4" key={chapterKey}>
                        <Heading
                          type="h4"
                          text={`${
                            "Chapter " +
                            String(sectionKey + 1) +
                            "." +
                            String(chapterKey + 1) +
                            " | " +
                            chapter.chapterTitle +
                            ":"
                          }`}
                        />
                        {chapter.tips.map((tip, key) => {
                          return (
                            <TipWrapper
                              key={key}
                              link={tip.seeMore[0]}
                              tipNumber={key}
                            >
                              {tip.content}
                            </TipWrapper>
                          );
                        })}
                      </div>
                    );
                  })
                )}
              </div>
            );
          })}

          {/* {jsInfoTips.map((tip, key) => {
            // OK to use key since the list won't be re-ordered at any point
            return (
              <TipWrapper key={key} link={tip.seeMore[0]} tipNumber={key}>
                {tip.content}
              </TipWrapper>
            );
          })} */}
        </div>

        <div className="wrapper randomJsTips-wrapper mb-5 pb-5">
          <Heading type="h2" text="Other random tips and questions" />

          {randomJsTips.map((tip, key) => {
            // OK to use key since the list won't be re-ordered at any point
            return (
              <TipWrapper key={key} link={tip.seeMore[0]} tipNumber={key}>
                {tip.content}
              </TipWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
