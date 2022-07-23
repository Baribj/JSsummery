/* import CodeSnippet from "./components/CodeSnippet"; */

import tips1 from "./tips1";
import tips2 from "./tips2";
import tips3 from "./tips3";
import tips4 from "./tips4";
import tips5 from "./tips5";
import tips6 from "./tips6";
import tips7 from "./tips7";
import tips8 from "./tips8";
import tips9 from "./tips9";
import tips10 from "./tips10";

/* const tips = [...tips1, ...tips2, ...tips3]; */ // think this is a bit slower

const tips = tips1.concat(
  tips2,
  tips3,
  tips4,
  tips5,
  tips6,
  tips7,
  tips8,
  tips9,
  tips10
);

export default tips;
