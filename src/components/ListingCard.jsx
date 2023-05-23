import React from "react"
import {faCalendarDay, faLocationDot, faMoneyBillWave, faStar} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "react-router-dom";

const ListingCard = ({location}) => {
    // const {destinationName, location, continent, language, nationality,images, description,flightCost,accommodationCost,
    //     mealCost,visaCost,dailyCost, currencyCode, transportationModes,transportationCost, visaIsRequired,
    //     visaRequirements, timeZone, bestTimeToVisit, bestPlacesToVisit} = trip
    return (
        <div className="listing-card" key={location._id}>
            <figure className="listing-card-banner">
                <img src={location.images[0]} alt={location.destinationName} loading="lazy"/>
            </figure>
            <div className="listing-body">
                <h3 className="listing-card-title">{location.destinationName}, {location.location}</h3>
                <p className="listing-card-text">{location.description}</p>

                <ul className="listing-card-details">
                    <li className="details-item">
                        <div className="details-box">
                            <FontAwesomeIcon className="list-icon" icon={faMoneyBillWave}/>
                            <p className="text">{location.currencyCode}</p>
                        </div>
                    </li>
                    <li className="details-item">
                        <div className="details-box">
                            <FontAwesomeIcon className="list-icon" icon={faLocationDot}/>
                            <p className="text">{location.continent}</p>
                        </div>
                    </li>
                    <li className="details-item">
                        <div className="details-box">
                            <FontAwesomeIcon className="list-icon" icon={faCalendarDay}/>
                            <p className="text">{location.timeZone}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="listing-price">
                <div className="listing-wrapper">
                    <p className="listing-reviews">(25 reviews)</p>
                    <div className="listing-rating">
                        <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                        <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                        <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                        <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                        <FontAwesomeIcon className="rating-icon" icon={faStar}/>
                    </div>
                </div>
                <p className="price-text">{location.dailyCost}<span> / night</span></p>

                <Link className="btn btn-solid" to={`/trips/${location._id}`}> View Details </Link>

            </div>
        </div>
    )
}

export default ListingCard