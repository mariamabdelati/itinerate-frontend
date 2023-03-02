import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outlet, Route, Routes } from 'react-router-dom';
import Directory from "./utilities/Directory";
import TopCountries from "./components/TopCountries";
import Home from "./components/Home";
import TopDestinations from "./components/TopDestinations";
import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations/Recommendations";
import Navbar from "./components/Navbar/Navbar";

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
            </Routes>
        </>
    )
}

export default App
