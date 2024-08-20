import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Packages from '../pages/Packages'
import TourInformation from '../pages/TourInformation'

function RoutePath() {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/packages' element={<Packages/>} />
                <Route path='/tourdetails' element={<TourInformation/>}/>
            </Routes>
        </div>
    )
}

export default RoutePath