import React from "react";
import Axios from "axios";

const chosenArticles = (props) => {
  const articleID = props.article_id;

  const getArticle = () => {
    return Axios.get(`https://j-nc-news.herokuapp.com/api/articles/${articleID}`)
  };

  const componentDidMount = () => {
    getArticle()
  };

  componentDidMount();

  return (
    <div className="articleContainer">
      <h3>Hello</h3>
      {console.log()}
    </div>
  );
};

export default chosenArticles;