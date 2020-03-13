import React from "react"
import ReactDOM from 'react-dom';
import Article from "./article.js"
import Nav from './Nav.js';
const nav = ["U.S.", "Home", "World", "Science"];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    };
  }
 componentDidMount() {
    const url = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=ajba3SMj5gAAjiZG7WjOXdJ3htyjVE1h";
    fetch(url)
    .then( response => response.json())
    .then((data) => {
      console.log(data.results)
      this.setState({
        articles : data.results
      });
    })
  }

  render() {
    return <div className="app">
      <div className="nav">
      <Nav nav={nav[0]}/>
      <Nav nav={nav[1]}/>
      <Nav nav={nav[2]}/>
      <Nav nav={nav[3]}/>
      </div>
      <div className="articles">
      {this.state.articles.map((article) => {
        return <Article article={article}/>
      })}
      </div>
    </div>
  }
}

export default App;