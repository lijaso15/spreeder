import React from "react";
import Num from "../../../Num";
import { connect } from "react-redux";
import { setWords } from "../../../../actions";

interface NumWordsProps {
  words: number;
  setWords(words: number): any;
  isSpreeding: boolean;
}

class NumWords extends React.Component<NumWordsProps> {
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
    const { words, setWords } = this.props;
    return (
      <Num
        icon="exchange-alt"
        label={"Words: " + words}
        handleIncrement={() => {
          this.pause();
          setWords(words + 1);
        }}
        handleDecrement={() => {
          this.pause();
          if (words > 1) {
            setWords(words - 1);
          }
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    words: state.words,
    isSpreeding: state.spreeding
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setWords: words => dispatch(setWords(words))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumWords);
