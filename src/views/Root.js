import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/ArticlesView';
import NotesView from 'views/NotesView';
import TwittersView from 'views/TwittersView';
import DetailsPageView from 'views/DetailsPageView';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/notes" />} />
        <Route path="/notes" exact component={NotesView} />
        <Route path="/notes/:id" component={DetailsPageView} />
        <Route path="/articles" exact component={ArticlesView} />
        <Route path="/articles/:id" component={DetailsPageView} />
        <Route path="/twitters" exact component={TwittersView} />
        <Route path="/twitters/:id" component={DetailsPageView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
