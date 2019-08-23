import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/ArticlesView';
import NotesView from 'views/NotesView';
import TwittersView from 'views/TwittersView';
import DetailsPageView from 'views/DetailsPageView';
import { routes } from 'routes/index';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route path={routes.home} exact render={() => <Redirect to={routes.notes} />} />
        <Route path={routes.notes} exact component={NotesView} />
        <Route path={routes.note} component={DetailsPageView} />
        <Route path={routes.articles} exact component={ArticlesView} />
        <Route path={routes.article} component={DetailsPageView} />
        <Route path={routes.twitters} exact component={TwittersView} />
        <Route path={routes.twitter} component={DetailsPageView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
