import {Outlet, Route, Routes} from 'react-router-dom'
import Directory from "./utilities/Directory"
import TopCountries from "./pages/TopCountries"
import Home from "./pages/Home/Home"
import TopDestinations from "./pages/TopDestinations"
import Error from "./pages/Error"
import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Copyrights from "./components/Copyrights";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={Directory.EMPTY_CHILD} element={<Outlet/>}>
                    <Route exact path={Directory.EMPTY_CHILD} element={<Home/>}/>
                    <Route path={Directory.TOP_COUNTRIES} element={<TopCountries/>}/>
                    <Route path={Directory.TOP_DESTINATIONS} element={<TopDestinations/>}/>
                </Route>
                <Route path={Directory.ERROR} element={<Error/>}/>

            </Routes>
            <Footer/>
            <Copyrights/>
        </>
    )
}

export default App
