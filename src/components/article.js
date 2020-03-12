import React from "react";
import './article.css';


class Article extends React.Component {
  render() {
    const title =  this.props.article.title;

    const style = {
      backgroundImage: "url('" + this.props.article.thumbnail_standard + "')"
    };

    return <div className="article">
    <div className="article-pic" style={style}></div>
    <div className="article-title">
      {title}
    </div>
  </div>;
  }
}

export default Article;