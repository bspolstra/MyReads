import React from "react";
import "./App.css";
import ListBooks from "./ListBooks";
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";

const BooksApp = props => {
  return (
    <div className="app">
      <Route exact path="/" component={ListBooks} />
      <Route path="/search" component={SearchBooks} />
    </div>
  );
};

export default BooksApp;
