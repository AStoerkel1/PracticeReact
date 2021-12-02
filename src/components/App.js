import React from "react"
import Article from "./article.js"



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      nav: ["Us", "Arts", "Science", "Technology", "World", "Health"],
      section: "Us",
    };
  }

 componentDidMount(sec) {
  this.setState({
    section: (sec || this.state.nav[0])
  })
    const url = "https://api.nytimes.com/svc/topstories/v2/" + (sec || this.state.section) + ".json?api-key=ajba3SMj5gAAjiZG7WjOXdJ3htyjVE1h";
    fetch(url)
    .then( response => response.json())
    .then((data) => {
      let articles = [] 
      for (let i = 0; i<=9; i++){
	  articles.push(data.results[i])
      }
      console.log(articles)
      this.setState({
        articles : articles
      });
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
        <div className="section">
          <h1>{this.state.section}</h1>
        </div>
    

      {this.state.articles.map((article) => {
        return ((article.title!=="") ? <Article article={article}/> : null)
      })}

      </div>
    </div>
  }
}

export default App;
