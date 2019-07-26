import React from "react";
import Num from "../../../Num";
import { connect } from "react-redux";
import { setSize } from "../../../../actions";

interface FontSizeProps {
  size: number;
  setSize(size: number): any;
  isSpreeding: boolean;
}

class FontSize extends React.Component<FontSizeProps> {
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
    const { size, setSize } = this.props;
    return (
      <Num
        icon="exchange-alt"
        label={"Font Size: " + size}
        handleIncrement={() => {
          this.pause();
          setSize(size + 1);
        }}
        handleDecrement={() => {
          this.pause();
          if (size > 1) {
            setSize(size - 1);
          }
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    size: state.size,
    isSpreeding: state.spreeding
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSize: size => dispatch(setSize(size))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FontSize);
