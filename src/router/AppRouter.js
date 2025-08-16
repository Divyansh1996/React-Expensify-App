import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import PageNotFound from '../components/PageNotFound';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import React from "react";
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            {/* <Routes>
                <Route path="/" element={<DashboardPage />}/>
                <Route path="/create" element={<CreatePage />} />
                <Route path="/edit" element={<EditPage />} />
                <Route path="/edit/:id" element={<EditPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path = "*" element={<PageNotFound />}/>
            </Routes> */}
            <Switch>
                <Route path="/" component={DashboardPage} exact ={true}/>
                <Route path="/create" component={CreatePage} />
                <Route path="/edit/:id" component={EditPage} exact ={true}/>
                <Route path="/edit" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route path = "*" component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;