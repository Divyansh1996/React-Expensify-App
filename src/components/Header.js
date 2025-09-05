import {Link, NavLink} from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({startLogout}) => (
    <div>
        <h1>Expensify App</h1>
        {/* <Link to = "/">DashboardPage Link</Link><br/>
        <Link to = "/create">Create Page Link</Link><br/>
        <Link to = "/edit">Edit Page Link</Link><br/>
        <Link to = "/help">Help Page Link</Link><br/> */}
        <NavLink to = "/dashboard" activeClassName="nav-properties" exact={true}>DashboardPage Link</NavLink><br/>
        <NavLink to = "/create" activeClassName="nav-properties">Create Page Link</NavLink><br/>
        <NavLink to = "/edit" activeClassName="nav-properties">Edit Page Link</NavLink><br/>
        <NavLink to = "/help" activeClassName="nav-properties">Help Page Link</NavLink><br/>
        <button onClick={startLogout}>Logout</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);