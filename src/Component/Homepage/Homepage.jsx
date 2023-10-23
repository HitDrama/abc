import React from 'react'
import Header from '../Header/Header'
import Aboutus from '../Aboutus/Aboutus'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'
import { Routes, Route } from 'react-router-dom'


function Homepage() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Footer />} />
                <Route path="2" element={<Footer />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/about" element={<Aboutus />} />
            </Routes>
            <Footer />

        </div>
    )
}

export default Homepage