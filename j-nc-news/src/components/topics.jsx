import React from "react";
import Axios from "axios";

import Title from "./home";

class Topics extends React.Component {
  state = {
    Topics: [],
  };

  getAllTopics() {
    Axios.get("https://j-nc-news.herokuapp.com/api/topics").then((topics) => {
      console.log(topics.data.topics)
    })
  }

  componentDidMount() {
    this.getAllTopics();
  }

  render() {
    return (
      <div className="topicsContainer">
        <Title />
        <h1>Topics:</h1>
      </div>
    );
  }
}

export default Topics;
