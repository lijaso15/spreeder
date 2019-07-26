import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { setPosition, setSpreeding } from "../../../../actions";
import { wordsPerMinToInterval } from "../../../../utils";
import { partition, stringToWordArray } from "../../../../utils";

interface PlayPauseProps {
  textArray: string[][][] | [];
  position: number;
  increment(): any;
  reset(): any;
  wpm: number;
  isSpreeding: boolean;
  spreedingOn(): any;
  spreedingOff(): any;
}

class PlayPause extends React.Component<PlayPauseProps> {
  timer: any;
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer() {
    this.timer = setInterval(
      () => this.tick(),
      wordsPerMinToInterval(this.props.wpm)
    );
    this.props.spreedingOn();
  }

  stopTimer() {
    clearInterval(this.timer);
    this.props.spreedingOff();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.props.spreedingOff();
  }

  tick() {
    const { textArray, position, increment } = this.props;
    console.log(position, textArray.length);
    if (position < textArray.length - 1) {
      increment();
    } else {
      this.stopTimer();
    }
  }

  render() {
    const { textArray, isSpreeding, position, reset } = this.props;
    return (
      <li>
        {" "}
        {isSpreeding ? (
          <a
            data-tip="Pause"
            onClick={this.stopTimer}
            style={{
              cursor: "pointer"
            }}
            id="playPause"
          >
            {" "}
            <FontAwesomeIcon icon="pause" />{" "}
          </a>
        ) : (
          <a
            data-tip={textArray.length ? "Spreed!" : "Add text to start"}
            onClick={() => {
              if (textArray.length) {
                if (textArray.length - 1 === position) {
                  reset();
                }
                this.startTimer();
              }
            }}
            style={{
              cursor: textArray.length ? "pointer" : "not-allowed"
            }}
          >
            {" "}
            <FontAwesomeIcon icon="play" />{" "}
          </a>
        )}
      </li>
    );
  }
}

const mapStateToProps = state => {
  console.log(
    stringToWordArray(state.text),
    partition(state.lines * state.words, stringToWordArray(state.text))
  );
  return {
    textArray: state.text
      ? partition(state.lines * state.words, stringToWordArray(state.text)).map(
          block => {
            return partition(state.words, block);
          }
        )
      : [],
    position: state.position,
    wpm: state.wpm,
    isSpreeding: state.spreeding
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(setPosition("INCREMENT")),
    reset: () => dispatch(setPosition("RESET")),
    spreedingOn: () => dispatch(setSpreeding("ON")),
    spreedingOff: () => dispatch(setSpreeding("OFF"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayPause);
