/* import CodeSnippet from "./components/CodeSnippet"; */

import tips1 from "./tips1";
import tips2 from "./tips2";
import tips3 from "./tips3";
import tips4 from "./tips4";

/* const tips = [...tips1, ...tips2, ...tips3]; */ // think this is a bit slower

const tips = tips1.concat(tips2, tips3, tips4);

export default tips;
