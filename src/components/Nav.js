import React from "react";
import './nav.css';

class Nav extends React.Component {
  render () {
    const navIcon = this.props.nav.icon;
    return <button className="navButton"><img src={navIcon} alt="navigation icon"></img></button>
  
  }
}

export default Nav;