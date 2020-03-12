import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Article from './components/article.js';
import * as serviceWorker from './serviceWorker';

const article = {
  "title": "In Rare Oval Office Speech, Trump Voices New Concerns and Old Themes"
};
const root = <div>< Article article={article}/></div>;

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
