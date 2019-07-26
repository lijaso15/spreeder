import React from "react";
import Num from "../../../Num";
import { connect } from "react-redux";
import { setWPM } from "../../../../actions";

interface ChangeSpeedProps {
  wpm: number;
  setWPM(value: number): any;
  isSpreeding: boolean;
}

class ChangeSpeed extends React.Component<ChangeSpeedProps> {
  constructor(props) {
    super(props);
    this.pause = this.pause.bind(this);
  }

  pause() {
    const { isSpreeding } = this.props;
    const playPauseButton = document.querySelector("#playPause") as HTMLElement;
    if (isSpreeding) {
      playPauseButton.click();
    }
  }

  render() {
    const { wpm, setWPM } = this.props;
    return (
      <Num
        icon="grip-lines"
        label={wpm + " WPM"}
        handleIncrement={() => {
          this.pause();
          setWPM(wpm + 10);
        }}
        handleDecrement={() => {
          this.pause();
          if (wpm > 10) {
            setWPM(wpm - 10);
          }
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    wpm: state.wpm,
    isSpreeding: state.spreeding
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setWPM: lines => dispatch(setWPM(lines))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeSpeed);
