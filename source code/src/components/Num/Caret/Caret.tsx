import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CaretProps {
  isHovered: boolean;
  handleClick?(): any;
  direction: string;
}

class Caret extends React.Component<CaretProps> {
  render() {
    const { isHovered, direction, handleClick } = this.props;
    if (isHovered) {
      return (
        <span
          style={{
            position: "absolute",
            paddingLeft: direction === "right" ? "10%" : "",
            paddingRight: direction === "left" ? "10%" : "",
            color: "black"
          }}
          onClick={() => {
            if (handleClick) {
              handleClick();
            }
          }}
        >
          <FontAwesomeIcon
            icon={("caret-" + direction) as IconProp}
            size="lg"
          />
        </span>
      );
    }
    return null;
  }
}

export default Caret;
