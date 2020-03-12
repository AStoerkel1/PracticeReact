import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Article from './components/article.js';
import Nav from './components/Nav.js'
import * as serviceWorker from './serviceWorker';

const nav = ["u.s.", "home", "world", "science"]
const article = {
  title: "In Rare Oval Office Speech, Trump Voices New Concerns and Old Themes",
  thumbnail:  "https://static01.nyt.com/images/2020/03/11/us/politics/11dc-trump-sub1/merlin_170379696_e6d00afa-4a1b-4355-9eb2-876db46a59d1-thumbStandard.jpg",
  url: "https://www.nytimes.com/2020/03/12/us/politics/trump-surveillance-bill.html",
  alt: "A photo of president Trump"
};
const root = <div className="app">
  <div className="nav">
  <Nav nav={nav[0]}/>
  <Nav nav={nav[1]}/>
  <Nav nav={nav[2]}/>
  </div>
  <div className="articles">
  <Article article={article}></Article>
  </div>
</div>;

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
