import React from "react";
import Axios from "axios"
import { Link } from "@reach/router";

class Articles extends React.Component {
  state = {
    articles: [],
  };

  getAllArticles() {
    Axios.get("https://j-nc-news.herokuapp.com/api/articles").then(
      (articlesArr) => {
        this.setState(() => {
          return { articles: articlesArr.data.articles };
        });
      }
    );
  }

  componentDidMount() {
    this.getAllArticles();
  }

  render() {
    return (
      <div className="articlesContainer">
        <h1>All Articles</h1>

        {this.state.articles.map((article) => {
          return <div className="articleContainer" key={article.article_id}>
            <p>Title: {article.title}</p>
            <p>Author: {article.author}</p> 
            <p>Votes: {article.votes}</p> 
            <Link to={`${article.article_id}`}><button className="viewArticleButton">View Article</button></Link>
          </div>
        })}

        <br></br>

        <div className="articleList">
          <ul id="articleList"></ul>
        </div>
      </div>
    );
  }
}

export default Articles;