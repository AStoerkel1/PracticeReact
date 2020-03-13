import React from "react";
import './nav.css';



class Nav extends React.Component {

  change = (section) => {
    alert(section);
  }

  render () {
    const navIcon = this.props.nav;
    return <button onClick={this.change.bind(this, navIcon)}>{navIcon}</button>
  }
}

export default Nav;