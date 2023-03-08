import React from "react"
import { faCalendarDay, faLocationDot, faStar, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ListingCard = ( { location } ) => {
    return (
        <div className="listing-card" key={location.id}>
            <figure className="listing-card-banner">
                <img src={location.image} alt={location.title} loading="lazy"/>
            </figure>
            <div className="listing-body">
                <h3 className="listing-card-title">{location.title}</h3>
                <p className="listing-card-text">{location.description}</p>

                <ul className="listing-card-details">
                    <li className="details-item">
                        <div className="details-box">
                            <FontAwesomeIcon className="list-icon" icon={faUserGroup}/>
                            <p className="text">{location.title}</p>
                        </div>
                    </li>
                    <li className="details-item">
                        <div className="details-box">
                            <FontAwesomeIcon className="list-icon" icon={faLocationDot}/>
                            <p className="text">{location.title}</p>
                        </div>
                    </li>
                    <li className="details-item">
                        <div className="details-box">
                            <FontAwesomeIcon className="list-icon" icon={faCalendarDay}/>
                            <p className="text">{location.title}</p>
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
                <p className="price-text">{location.price}<span> / night</span></p>


                <button className="btn btn-solid">Book Now</button>
            </div>
        </div>
    )
}

export default ListingCard