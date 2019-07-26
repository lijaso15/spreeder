import React from "react";

class Test extends React.Component {
  render() {
    return [
      <div onClick={() => alert(1)}>1</div>,
      <div onClick={() => alert(2)}>2</div>,
      <div onClick={() => alert(3)}>3</div>
    ];
  }
}

export default Test;
