import React from "react";
import { Router } from "@reach/router";

import "./css/Home.css";
import "./css/Articles.css";
import "./css/Articles.css";

import Home from "./components/home";
import AllArticles from "./components/articles";
import ChosenArticle from "./components/chosenArticle"

function homePage() {
  return (
    <div className="AppContainer">
      <Router>
        <Home path="/" />
        <AllArticles path="/articles"/>
        <ChosenArticle path="/articles/:article_id"/>
      </Router>
    </div>
  );
}

export default homePage;
