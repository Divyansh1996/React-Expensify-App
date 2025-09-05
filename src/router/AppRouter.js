import {Router, Route, Switch} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import CreatePage from '../components/CreatePage';
import createHistory from 'history/createBrowserHistory';
import EditPage from '../components/EditPage';
import PageNotFound from '../components/PageNotFound';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import React from "react";
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            {/* <Routes>
                <Route path="/" element={<DashboardPage />}/>
                <Route path="/create" element={<CreatePage />} />
                <Route path="/edit" element={<EditPage />} />
                <Route path="/edit/:id" element={<EditPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path = "*" element={<PageNotFound />}/>
            </Routes> */}
            <Switch>
                <Route path="/" component={LoginPage} exact ={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} exact ={true}/>
                <PrivateRoute path="/create" component={CreatePage} />
                <PrivateRoute path="/edit/:id" component={EditPage} exact ={true}/>
                <PrivateRoute path="/edit" component={EditPage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <Route path = "*" component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;