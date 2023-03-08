import React from "react"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ( { location } ) => {
    return (
        <div className="card" key={location.id}>
            <figure className="card-img-top">
                <img src={location.image} alt={location.title} loading="lazy"/>
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
                    <a href="#"> {location.title} </a>
                </h3>
                <p className="card-text">{location.description}</p>
            </div>
        </div>
    )
}

export default Card