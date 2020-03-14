import React from "react";
import './nav.css';



class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.setState({
      section: "us"
    })
  }

  change(sec){
    this.setState({
      section: sec
    })
  }

  render () {
    const navIcon = this.props.nav;
    return <button onClick={this.change.bind(this, navIcon)}>{navIcon}</button>
  }
}

export default Nav;