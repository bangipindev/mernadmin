import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector} from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from '../../routes'
import { Home, About, Blog,Login,Register, Header ,Profile} from '../../views/web'

const MainApp = () => {
    const { user }                = useSelector(state => state.Authenticated)
  
    return (
        <>
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
                    ) : "" }
                </Switch>
            </Container>
        </>
    )
}

export default MainApp