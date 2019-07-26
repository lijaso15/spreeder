import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Caret from "./Caret";

interface NumProps {
  handleDecrement(): any;
  handleIncrement(): any;
  label: string;
  icon: IconProp;
}

interface NumState {
  isHovered: boolean;
}

class Num extends React.Component<NumProps, NumState> {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.setHover = this.setHover.bind(this);
  }

  setHover(isHovered: boolean) {
    this.setState({
      isHovered
    });
  }

  render() {
    const { handleDecrement, handleIncrement, label, icon } = this.props;
    const { isHovered } = this.state;
    return (
      <li
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}
        onClick={e => {
          //caret
          const tag = (e.target as HTMLElement).tagName;
          if (tag === "svg" || tag === "path" || tag === "a") {
            //left
            handleDecrement();
          }
        }}
      >
        <a>
          <Caret isHovered={isHovered} direction="right" />
          {isHovered ? label : <FontAwesomeIcon icon={icon} />}
          <Caret
            isHovered={isHovered}
            direction="left"
            handleClick={handleIncrement}
          />
        </a>
      </li>
    );
  }
}

export default Num;
