import React from "react";
import { connect } from "react-redux";
import { setText } from "../../../actions";

interface TextProps {
  text: string;
  setText(text: string): any;
}

class Text extends React.Component<TextProps> {
  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this);
  }

  saveChanges() {
    const { setText } = this.props;
    const text = document.querySelector("textarea");
    setText(text ? text.value : "");
  }

  render() {
    const { text } = this.props;
    return (
      <div className="hero-body">
        {" "}
        <div className="container">
          <div>
            {" "}
            <textarea
              defaultValue={text}
              className="textarea is-warning"
              placeholder="insert text here"
              style={{
                height: "-webkit-fill-available",
                backgroundColor: "grey"
              }}
            />
          </div>
          <div
            style={{
              textAlign: "right",
              paddingTop: "4px"
            }}
          >
            <button className="button is-warning" onClick={this.saveChanges}>
              {" "}
              Save Changes{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setText: text => dispatch(setText(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);
