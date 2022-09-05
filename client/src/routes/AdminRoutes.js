import React from "react";
import { Route , Redirect} from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem("user") ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

export default AdminRoute;
