import React from "react"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "react-router-dom";

const Card = ({location}) => {
    return (
        <div className="card" key={location._id}>
            <figure className="card-img-top">
                <img src={location.images[0]} alt={location.destinationName} loading="lazy"/>
            </figure>
            <div className="card-body">
                <div className="card-rating">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <h3 className="card-title">
                    <Link to={`/trips/${location._id}`}> {location.destinationName}, {location.location} </Link>
                </h3>
                <p className="card-text">{location.description}</p>
            </div>
        </div>
    )
}

export default Card