import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

export const PrivateRoute = ({isAuthenticated, component:Component, ...rest}) => {
    return (
        <div>
            <Header />
            <Route {...rest} component = {(props) => {
                return isAuthenticated ? <Component {...props} /> : <Redirect to = "/" />
            }}/>
        </div>
    )

}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)