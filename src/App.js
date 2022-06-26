import Heading from "./components/Heading";

import { TipWrapper } from "./components/TipWrapper";

import jsInfoTips from "./jsInfoTips";

import randomJsTips from "./randomJsTips";

function App() {
  //

  //
  return (
    <div className="App py-5 my-5">
      <div className="container">
        <Heading type="h1" text={"JavaScript quick summary | by Ritwal"} />
        <p>
          Quick tips that cover a wide range of JavaScript concepts. Those tips
          aren't ordered in any particular way.
        </p>

        <p>
          Please note that this as a personal project that isn't meant for
          everyone. this is definitely not the right place to learn JavaScript.
        </p>

        <p>
          If you are interested in learning JavaScript, I recommend taking a
          look at{" "}
          <a href="https://javascript.info/" target="__blank" rel="noreferrer">
            javascript.info
          </a>
          .
        </p>

        <div className="wrapper jsInfoTips-wrapper mb-5 pb-5">
          {jsInfoTips.map((tip, key) => {
            // OK to use key since the list won't be re-ordered at any point
            return (
              <TipWrapper key={key} link={tip.seeMore[0]} tipNumber={key}>
                {tip.content}
              </TipWrapper>
            );
          })}
        </div>

        <Heading type="h2" text="Other random tips" />
        <div className="wrapper randomJsTips-wrapper mb-5 pb-5">
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
