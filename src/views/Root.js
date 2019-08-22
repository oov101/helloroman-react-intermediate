import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/ArticlesView';
import NotesView from 'views/NotesView';
import TwittersView from 'views/TwittersView';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/notes" />} />
        <Route path="/notes" component={NotesView} />
        <Route path="/articles" component={ArticlesView} />
        <Route path="/twitters" component={TwittersView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
