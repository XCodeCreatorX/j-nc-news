import React from "react";
import { Link } from "@reach/router";

class Articles extends React.Component {
  state = {
    articles: [],
  };

  getArticles = () => {
    fetch("https://j-nc-news.herokuapp.com/api/articles")
      .then((response) => response.json())
      .then((articlesArr) => {
        this.setState(() => {
          return { articles: articlesArr.articles };
        });
      });
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    return (
      <div className="articlesContainer">
        <h1>All Articles</h1>

        {this.state.articles.map((article) => {
          return <div className="articleContainer">
            <p>Title: {article.title}</p>
            <p>Author: {article.author}</p> 
            <p>Votes: {article.votes}</p> 
            <Link to="/chosenArticle"><button className="viewArticleButton" article={this.state.articles}>View Article</button></Link>
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