import Heading from "./components/Heading";

import TipWrapper from "./components/TipWrapper";

import randomJsTips from "./randomJsTips";

import { ShowJSInfoTips } from "./components/jsinfo/ShowJSInfoTips";

import BackToTop from "./components/BackToTop";

function App() {
  //

  // the counter is now 3
  //
  return (
    <div className="App py-5 my-5">
      <div className="container">
        <Heading type="h1" text={"JavaScript quick summary"} />
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

        <ShowJSInfoTips
          part={1}
          title="Javascript.info book | Part 1 | The JavaScript language"
          description="Here is a quick summary of the book JavaScript.info first part, I
        included at least one tip from every chapter to keep the flow as logical
        as possible."
        />

        <ShowJSInfoTips
          part={2}
          title="Javascript.info book | Part 2 | Browser"
          description="Here is a quick summary of the book JavaScript.info second part, which is about Browser: Document, Events, and Interfaces"
        />

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

        <BackToTop />
      </div>
    </div>
  );
}

export default App;
