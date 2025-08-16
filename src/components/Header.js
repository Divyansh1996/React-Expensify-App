import {Link, NavLink} from "react-router-dom";
import React from "react";
const Header = () => (
    <div>
        <h1>Expensify App</h1>
        {/* <Link to = "/">DashboardPage Link</Link><br/>
        <Link to = "/create">Create Page Link</Link><br/>
        <Link to = "/edit">Edit Page Link</Link><br/>
        <Link to = "/help">Help Page Link</Link><br/> */}
        <NavLink to = "/" activeClassName="nav-properties" exact={true}>DashboardPage Link</NavLink><br/>
        <NavLink to = "/create" activeClassName="nav-properties">Create Page Link</NavLink><br/>
        <NavLink to = "/edit" activeClassName="nav-properties">Edit Page Link</NavLink><br/>
        <NavLink to = "/help" activeClassName="nav-properties">Help Page Link</NavLink><br/>
    </div>
)

export default Header;