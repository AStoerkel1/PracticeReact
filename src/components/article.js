import React from "react";
import './article.css';

class Article extends React.Component {


  render() {
    const title =  this.props.article.title;
    const url = this.props.article.url;
    const photo = this.props.article.multimedia[4].url;
    const alt = this.props.article.abstract;

    return <div className="article">
      <a href={url} >
    <div className="article-pic"><img src={photo} alt={alt}/></div><br/>
    <div className="article-title">{title}</div></a>
  </div>;
  }
}

export default Article;