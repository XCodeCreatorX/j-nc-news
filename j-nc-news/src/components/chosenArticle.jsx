import React from "react";
import Axios from "axios";
import Comments from "./comments"
import Title from "./home"


class ChosenArticles extends React.Component {
  state = {
    article: [],
  };

  getArticle() {
    const articleID = this.props.article_id

    return Axios.get(`https://j-nc-news.herokuapp.com/api/articles/${articleID}`)
      .then((article) => {
        this.setState(() => {
          return { article: article.data.article };
        });
      }
      );
  }

  componentDidMount() {
    this.getArticle()
  }

  render() {
    return (
      <div className="articleContainer">
        <Title />
        <h1>{this.state.article.title}</h1>
        <h2>{this.state.article.author}</h2>

        <br></br>

        <p>{this.state.article.body}</p>
        <p>{this.state.article.created_at}</p>

        <br></br>

        <h5>Votes: {this.state.article.votes}</h5>
        <h5>Comments: {this.state.article.comment_count}</h5>
        <Comments articleID={this.props.article_id}/>

      </div>
    )
  }
}

export default ChosenArticles;