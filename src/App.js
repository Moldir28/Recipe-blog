import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { client } from "./client";

import { Posts } from "./Components/Posts";
import { Recipe } from "./Components/Recipe";

import "./App.css";


function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setArticles(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Main>
          <Switch>
            <Route exact path="/">
              <Posts posts={articles} />
            </Route>
            <Route path="/recipe/:id">
              <Recipe />
            </Route>
          </Switch>
        </Main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
