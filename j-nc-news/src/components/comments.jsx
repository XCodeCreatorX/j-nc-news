import React from "react";
import Axios from "axios";

class Comments extends React.Component {
  state = {
    comments: [],
  };

  getAllComments() {
    const articleID = this.props.articleID;
    console.log(articleID);

    return Axios.get(
      `https://j-nc-news.herokuapp.com/api/articles/${articleID}/comments`
    ).then((article) => {
      this.setState(() => {
        return { comments: article.data.comments };
      });
    });
  }

  componentDidMount() {
    this.getAllComments();
  }

  render() {
    return (
      <div className="commentContainer">
        <p>Comments:</p>

        {this.state.comments.map((comment) => {
          return (
            <div className="commentsContainer">
              <p>{comment.body}</p>
              <p>Created By: {comment.author}</p>
              <p>{comment.votes}</p>
              <p>{comment.created_at}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
