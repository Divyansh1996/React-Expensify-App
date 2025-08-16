import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info:</h1>
        <p>{props.info}</p>
    </div>
)

const DuplicateInfo = (props) => (
    <div>
        <h1>Duplicate Info:</h1>
        <p>{props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAdmin && <p>This is a private info, Please don't share!!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <WrappedComponent {...props} />}
            {!props.isAuthenticated && <p>Please be authenticated first</p>}
        </div>
    )
}
const HOC = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo info ="This is a new detail" isAuthenticated={true}/>, document.getElementById("newApp"));