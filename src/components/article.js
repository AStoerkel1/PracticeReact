import React from "react";
import './article.css';

class Article extends React.Component {


  render() {
    const title =  this.props.article.title;
    const url = this.props.article.url;
    const photo = (this.props.article.multimedia != null) ? this.props.article.multimedia[4].url : '';

    // const alt = this.props.article.abstract;

    return <a href={url} >
  <div className="article">
    <div className="article-pic"><img src={photo} alt="Not available"/></div><br/>
    <div className="article-title">{title}</div>
  </div>
  </a>;
  }
}

export default Article;