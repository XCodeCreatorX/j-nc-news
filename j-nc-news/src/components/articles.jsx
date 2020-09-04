import React from "react";
import Axios from "axios";
import { Link } from "@reach/router";
import Title from "./home";

class Articles extends React.Component {
  state = {
    articles: [],
  };

  getAllArticles() {
    return Axios.get("https://j-nc-news.herokuapp.com/api/articles").then(
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

  getSorted(event) {
    const target = event.target.innerHTML
    console.log(target)

    
  }

  render() {
    return (
      <div className="articlesContainer">
        <Title />
        <h1>All Articles</h1>

        <div className="dropDown">
          <h4 className="dropBtn">Sort Articles By:</h4>
          <div className="dropdownContent">
            <a className="sortBy" onClick={this.getSorted}>Date Created</a>
            <a className="sortBy" onClick={this.getSorted}>Comment Count</a>
            <a className="sortBy" onClick={this.getSorted}>Votes</a>
          </div>
        </div>

        {this.state.articles.map((article) => {
          return (
            <div className="articleContainer" key={article.article_id}>
              <p>Title: {article.title}</p>
              <p>Author: {article.author}</p>
              <p>Votes: {article.votes}</p>
              <Link to={`${article.article_id}`}>
                <button className="viewArticleButton">View Article</button>
              </Link>
            </div>
          );
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
