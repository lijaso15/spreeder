import React from "react";
import Navbar from "../Navbar";
import { connect } from "react-redux";
import Spreeder from "./Spreeder";
import Text from "./Text";

interface BodyProps {
  active: boolean;
}

class Body extends React.Component<BodyProps> {
  componentDidMount() {
    window.addEventListener("wheel", event => {
      const delta = Math.sign(event.deltaY);
      console.info(delta);
    });
  }

  render() {
    const { active } = this.props;
    return (
      <section className="hero is-fullheight">
        <Navbar />
        {active ? <Spreeder /> : <Text />}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.toggle.spreed
  };
};

export default connect(mapStateToProps)(Body);
