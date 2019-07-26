import { combineReducers } from "redux";
import toggle from "./toggle";
import text from "./text";
import position from "./position";
import wpm from "./wpm";
import spreeding from "./spreeding";
import lines from "./lines";
import words from "./words";
import size from "./size";
//combine the reducers
export default combineReducers({
  toggle,
  text,
  position,
  wpm,
  spreeding,
  lines,
  words,
  size
});
