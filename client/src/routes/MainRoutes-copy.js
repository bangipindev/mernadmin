import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { history } from '../helper'
import { Home, About, Blog,Login,Register, Header ,Profile} from '../../views/web'
import PrivateRoute from './PrivateRoute'
import { useSelector } from 'react-redux'

const MainRoutes = () => {
    const { user }                = useSelector(state => state.Authenticated)
    return (
        <Router history={history}>
            <Switch>
                <Route path="*" exact >
                    <Header />
                    <Container>
                        <Switch>
                            <Route path="/" exact >
                                <Home />
                            </Route>
                            <Route path="/about" exact>
                                <About />
                            </Route>
                            <Route path="/blog" exact>
                                <Blog />
                            </Route>
                            <Route path="/login" exact >
                                <Login />
                            </Route>

                            <Route path="/register" exact >
                                <Register />
                            </Route>
                            {user ? (
                                <PrivateRoute path="/profile" exact >
                                    <Profile />
                                </PrivateRoute>
                            ) : ""}
                        </Switch>
                    </Container>
                </Route>
            </Switch>
        </Router>
    )
}

export default MainRoutes