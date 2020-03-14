import React from "react"
// import ReactDOM from 'react-dom';
import Article from "./article.js"
import './nav.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      section: "us",
      nav: ["us", "arts", "home", "science", "world"],
    };
  }

 componentDidMount(sec) {
   this.change.bind(this, sec);
    const url = "https://api.nytimes.com/svc/topstories/v2/" + (sec || this.state.section) + ".json?api-key=ajba3SMj5gAAjiZG7WjOXdJ3htyjVE1h";
    fetch(url)
    .then( response => response.json())
    .then((data) => {
      console.log(data.results)
      this.setState({
        articles : data.results
      });
    })
  }

  change(sec){
    this.setState({
      section: sec
    })
  }

  render() {
    return <div className="app">
      <div className="nav">

      {this.state.nav.map((sec) => {
        return <button onClick={this.componentDidMount.bind(this, sec)}>{sec}</button>
      })}

      </div>
      <div className="articles">

    <h2>Section {this.state.section}</h2>
    
      {this.state.articles.map((article) => {
        return <Article article={article}/>
      })}

      </div>
    </div>
  }
}

export default App;