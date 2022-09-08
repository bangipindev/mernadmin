import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { history } from '../helper'
import { Home, About, Blog,Login,Register, Header} from '../views/web'

const WebRoute = () => {
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
                        </Switch>
                    </Container>
                </Route>
            </Switch>
        </Router>
    )
}

export default WebRoute