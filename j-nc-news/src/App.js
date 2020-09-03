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

function homePage() {
  return (
    <div className="AppContainer">
      <Router>
        <Home path="/" />
        <AllArticles path="/articles"/>
        <ChosenArticle path="/articles/:article_id"/>
        <Topics path="/topics"/>
      </Router>
    </div>
  );
}

export default homePage;
