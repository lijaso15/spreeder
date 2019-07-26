import React from "react";
import { setToggle } from "../../actions";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";

interface NavbarProps {
  toggleBreadcrumb(): any;
  active: boolean;
  isSpreeding: boolean;
}

class Navbar extends React.Component<NavbarProps> {
  render() {
    const { toggleBreadcrumb, active, isSpreeding } = this.props;
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" data-tip="© Jason Li 2019">
              <img src={process.env.PUBLIC_URL + "icon.png"} alt="Logo" />
            </a>
            <ReactTooltip place="top" type="dark" effect="float" />
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li
                      className={active ? "is-active" : ""}
                      onClick={toggleBreadcrumb}
                    >
                      <a
                        href="#"
                        style={{
                          color: isSpreeding
                            ? "#363636"
                            : active
                            ? ""
                            : "ghostwhite"
                        }}
                      >
                        {" "}
                        spreed{" "}
                      </a>
                    </li>
                    <li
                      className={!active ? "is-active" : ""}
                      onClick={toggleBreadcrumb}
                    >
                      <a
                        href="#"
                        style={{
                          color: isSpreeding
                            ? "#363636"
                            : !active
                            ? ""
                            : "ghostwhite"
                        }}
                      >
                        {" "}
                        text{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.toggle.spreed,
    isSpreeding: state.spreeding
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleBreadcrumb: () => dispatch(setToggle("BREADCRUMB"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
