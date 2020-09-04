import React from "react";
import Axios from "axios";
import { Link } from "@reach/router";


import Title from "./home";

class Topics extends React.Component {
  state = {
    topics: [],
  };

  getAllTopics() {
    return Axios.get("https://j-nc-news.herokuapp.com/api/topics").then(
      (topics) => {
        this.setState(() => {
          return { topics: topics.data.topics };
        });
      }
    );
  }

  componentDidMount() {
    this.getAllTopics();
  }

  render() {
    return (
      <div className="topicsContainer">
        <Title />
        <h1>Topics:</h1>

        {this.state.topics.map((topic) => {
          return (
            <div className="topicContainer">
              <Link to={topic.slug}><h3 id={topic.slug}>{topic.slug}</h3></Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Topics;
