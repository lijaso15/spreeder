import React from "react";
import "bulma/css/bulma.css";
// import Test from "./Test";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faPause,
  faLightbulb,
  faFont,
  faTachometerAlt,
  faGripLines,
  faCaretLeft,
  faCaretRight,
  faExchangeAlt
} from "@fortawesome/free-solid-svg-icons";
import Body from "./components/Body";

library.add(
  faPlay,
  faPause,
  faLightbulb,
  faFont,
  faTachometerAlt,
  faCaretLeft,
  faCaretRight,
  faGripLines,
  faExchangeAlt
);

const App: React.FC = () => {
  return (
    <div className="has-text-grey-lighter">
      {/* <Test /> */}
      <Body />
    </div>
  );
};

export default App;
