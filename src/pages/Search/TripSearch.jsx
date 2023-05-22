//import locations from "../Home/LocationsList"
import React from "react"
import {useLocation} from "react-router-dom"
import ListingCard from "../../components/ListingCard"
import SearchBar from "../../components/SearchBar"

const TripSearch = () => {
    const location = useLocation()

    const data = location.state;


    console.log(data)
    return (<section className="trip-search-page">
        {/*<Filter/>*/}

        <div className="search-div grid">
            <SearchBar position="bottom"/>
        </div>

        <div className="search-results-section">
            <ul className="trip-items">
                {data.length === 0 ? (<h4>No results found</h4>) : (data?.map((location) => {
                    return (<li key={location._id} className="trip-item">
                        <ListingCard location={location}/>
                    </li>)
                }))

                }
            </ul>
        </div>
    </section>)
}

export default TripSearch