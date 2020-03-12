import React from "react";
import './article.css';


class Article extends React.Component {
  render() {
    const title =  this.props.article.title;
    const url = this.props.article.url;
    const photo = this.props.article.thumbnail;
    const alt = this.props.article.abstract;
    const style = {
      backgroundImage: "url('" + this.props.article.thumbnail + "')"
    };

    return <div className="article">
    <div className="article-pic"><img src={photo} alt={alt}></img></div>
    <div className="article-title">
      <a href={url} >{title}</a>
    </div>
  </div>;
  }
}

export default Article;