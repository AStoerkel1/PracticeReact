import React from "react";
import './nav.css';

class Nav extends React.Component {
  render () {
    const navIcon = this.props.nav;
    return <button className="navButton"><img src="src/icons8-usa-30.png" alt="flag"></img></button>
  }
}

export default Nav;