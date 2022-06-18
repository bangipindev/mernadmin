import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {MainApp} from '../views'

const MainRoutes = () => {
    return (
       <Router>
            <Routes>
                <Route path="*" exact element={<MainApp />} />
            </Routes>
       </Router> 
    )
}

export default MainRoutes