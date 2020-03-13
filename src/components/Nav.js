import React from "react";
import './nav.css';



class Nav extends React.Component {



  change = () => {
    const navIcon = this.props.nav;
    alert(navIcon);
  }

  render () {
    const navIcon = this.props.nav;
    return <button className="navButton" onClick={this.change}><img src="icons8-usa-30.png" alt=""/>{navIcon}</button>
  }
}

export default Nav;