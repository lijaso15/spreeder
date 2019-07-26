import React from "react";
import Num from "../../../Num";
import { connect } from "react-redux";
import { setLines } from "../../../../actions";

interface NumLinesProps {
  lines: number;
  setLines(lines: number): any;
  isSpreeding: boolean;
}

class NumLines extends React.Component<NumLinesProps> {
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
    const { lines, setLines } = this.props;
    return (
      <Num
        icon="grip-lines"
        label={"lines: " + lines}
        handleIncrement={() => {
          this.pause();
          setLines(lines + 1);
        }}
        handleDecrement={() => {
          this.pause();
          if (lines > 1) {
            setLines(lines - 1);
          }
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    lines: state.lines,
    isSpreeding: state.spreeding
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLines: lines => dispatch(setLines(lines))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumLines);
