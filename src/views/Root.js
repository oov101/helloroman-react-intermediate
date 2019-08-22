import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/ArticlesView';
import NotesView from 'views/NotesView';
import TwittersView from 'views/TwittersView';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route path="/" exact component={NotesView} />
        <Route path="/articles" component={ArticlesView} />
        <Route path="/twitters" component={TwittersView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
