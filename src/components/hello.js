import React from "react";
import './hello.css';
class Hello extends React.Component {
  render() {
    return <div>
    <header>
      <p>
        Hello {this.props.name}.
      </p>
    </header>
  </div>;
  }
}

export default Hello;