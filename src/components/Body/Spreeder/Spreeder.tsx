/*global chrome*/
import React from "react";
import { connect } from "react-redux";
import PlayPause from "./PlayPause";
import ChangeSpeed from "./ChangeSpeed";
import FontSize from "./FontSize";
import { partition, stringToWordArray } from "../../../utils";
import NumLines from "./NumLines";
import NumWords from "./NumWords";
import { setPosition } from "../../../actions";

interface SpreederProps {
  textArray: string[][][] | [];
  position: number;
  lines: number;
  fontSize: string;
  increment(): any;
  decrement(): any;
}

class Spreeder extends React.Component<SpreederProps> {
  constructor(props) {
    super(props);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleWheel(event) {
    const delta = Math.sign(event.deltaY);
    // positive => down
    const { textArray, position, increment, decrement } = this.props;
    if (delta > 0 && position < textArray.length - 1) {
      //down
      increment();
    } else if (delta < 0 && position > 0) {
      //up
      decrement();
    }
  }

  handleKey(event) {
    const { textArray, position, increment, decrement } = this.props;
    if (event.code === "ArrowDown" && position < textArray.length - 1) {
      //down
      increment();
    } else if (event.code === "ArrowUp" && position > 0) {
      //up
      decrement();
    }
  }

  componentDidMount() {
    window.addEventListener("wheel", this.handleWheel);
    document.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleWheel);
    window.removeEventListener("keydown", this.handleKey);
  }

  render() {
    const { textArray, position, lines, fontSize } = this.props;
    return (
      <div>
        <div
          className="has-text-centered"
          style={{
            position: "absolute",
            top: String(44 - 2.5 * lines) + "vh",
            width: "-webkit-fill-available"
          }}
        >
          {textArray.length ? (
            textArray[position].map(line => {
              return (
                <div
                  className="title has-text-white"
                  style={{
                    marginBottom: 0,
                    fontSize
                  }}
                >
                  {line.join(" ")}
                </div>
              );
            })
          ) : (
            <div
              className="title has-text-white"
              style={{
                fontSize
              }}
            >
              Add text to begin spreeding
            </div>
          )}
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <ul>
              <ChangeSpeed />
              <NumLines />
              <PlayPause />
              <NumWords />
              <FontSize />
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    textArray: state.text
      ? partition(state.lines * state.words, stringToWordArray(state.text)).map(
          block => {
            return partition(state.words, block);
          }
        )
      : [],
    position: state.position,
    lines: state.lines,
    fontSize: String(state.size) + "pt"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(setPosition("INCREMENT")),
    decrement: () => dispatch(setPosition("DECREMENT"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spreeder);
