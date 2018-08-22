import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import IssueListPage from './components/containers/IssueListPage';
import IssueDescription from './components/ui/IssueDescription';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/:user/:repo/issues" component={IssueListPage} />
                <Route exact path="/:user/:repo/issues/:issueId" component={IssueDescription} />
                <Redirect exact from="/" to="/facebook/react/issues" />
                <Redirect exact from="/:user/:repo" to="/:user/:repo/issues" />
                <Route render={() => (
                    <h2>404 Page not Found</h2>
                )} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;