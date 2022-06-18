import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, About, Blog,Login,Register, Header,Footer } from '../../views'

const MainApp = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/blog" exact element={<Blog />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
            </Routes>
            <Footer />
        </>
    )
}

export default MainApp