import React from "react";
import { Router } from "@reach/router";

import "./css/Home.css";
import "./css/Articles.css";
import "./css/chosenArticles.css";
import "./css/comments.css"
import "./css/topics.css"

import Home from "./components/home";
import AllArticles from "./components/articles";
import ChosenArticle from "./components/chosenArticle"
import Topics from "./components/topics"
import ChosenTopic from "./components/chosenTopic"

function homePage() {
  return (
    <div className="AppContainer">
      <Router>
        <Home path="/" />
        <AllArticles path="/articles"/>
        <ChosenArticle path="/articles/:article_id"/>
        <Topics path="/topics"/>
        <ChosenTopic path="/topics/:chosen_topic"/>
      </Router>
    </div>
  );
}

export default homePage;
