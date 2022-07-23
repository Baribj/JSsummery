import { useState } from "react";

import Heading from "../Heading";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import TipWrapper from "../TipWrapper";

import part1 from "./part1/all";

import part2 from "./part2/all";

let parts = [part1, part2];

export const ShowJSInfoTips = ({ part, title, description }) => {
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

  function handleShowHideAll() {
    if (hiddenSections.length !== 0) {
      setHiddenSection([]);
    } else {
      setHiddenSection([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    }
  }

  return (
    <div className="wrapper jsInfoTips-wrapper mb-5 pb-5">
      <div className="wrapper position-relative pe-4">
        <Heading type="h2" text={title} />
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
              hiddenSections.length ? "rotate(0deg)" : "rotate(90deg)"
            }`,
          }}
          onClick={() => {
            handleShowHideAll([]);
          }}
        />
      </div>
      <p className="mb-4">{description}</p>

      {parts[part - 1].map((section, sectionKey) => {
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
    </div>
  );
};
