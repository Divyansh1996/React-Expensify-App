import {Link} from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({startLogout}) => (
    
        <header className="header">
            {/* <Link to = "/">DashboardPage Link</Link><br/>
            <Link to = "/create">Create Page Link</Link><br/>
            <Link to = "/edit">Edit Page Link</Link><br/>
            <Link to = "/help">Help Page Link</Link><br/> */}
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to = "/dashboard">
                    <h1>Expensify</h1>
                    </Link>
                    {/* <NavLink to = "/create" activeClassName="nav-properties">Create Page Link</NavLink><br/>
                    <NavLink to = "/edit" activeClassName="nav-properties">Edit Page Link</NavLink><br/>
                    <NavLink to = "/help" activeClassName="nav-properties">Help Page Link</NavLink><br/> */}
                    <button onClick={startLogout} className="button-layout button-layout--link">Logout</button>
                </div>
            </div>
        </header>
    
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);