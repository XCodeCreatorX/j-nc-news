import React from "react";
import Axios from "axios"
import { Link } from "@reach/router";

import Title from "./home"

class Articles extends React.Component {
  state = {
    articles: [],
  };

  getAllArticles() {
    return Axios.get("https://j-nc-news.herokuapp.com/api/articles")
      .then((articlesArr) => {
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
    const chosenTopic = this.props.chosen_topic;

    return (
      <div className="articlesContainer">
        <Title />

        {this.state.articles.map((article) => {
          if (article.topic === chosenTopic) {
            return <div className={article.title} key={article.title}>
              <p>{article.title}</p>
              <p>{article.author}</p>
              <Link to={`/articles/${article.article_id}`}><button className="viewArticleButton">View Article</button></Link>
            </div>
          }
        })}

        <br></br>
      </div>
    );
  }
}

export default Articles;