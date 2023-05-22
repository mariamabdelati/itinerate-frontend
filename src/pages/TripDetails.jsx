import React from "react"
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {BASE_URL} from "../utilities/config";
import {NewtonsCradle} from "@uiball/loaders";
import {faCircleCheck, faCircleXmark, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TripDetails = () => {
    const {id} = useParams()
    const {data: trip, loading, error} = useFetch(`${BASE_URL}/trips/${id}`)


    // Check if the data is still a Promise
    if (loading || !trip) {
        return <NewtonsCradle size={35} color={"#0057d9"}/>;
    }

    // Handle error case
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className="trip-details">
            <div className="box">
                <div className="images">
                    {trip.images && trip.images.length > 0 ? (
                        trip.images.map((image, index) => (
                            <div className={`img-holder ${index === 0 ? 'active' : ''}`} key={index}>
                                <img src={image} alt={`Image ${index + 1}`}/>
                            </div>
                        ))
                    ) : (
                        <div>No images available</div>
                    )}
                </div>
                <div className="basic-info">
                    <h1>{trip.destinationName}, {trip.location}</h1>
                    <div className="rate">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <span>{trip.dailyCost} EGP</span>
                    <div className="options">
                        <a href="#">Book Now</a>
                        <a href="#">Save Trip</a>
                    </div>
                </div>
                <div className="description">
                    <p>{trip.description}</p>
                    <ul className="features">
                        <li><FontAwesomeIcon icon={faCircleCheck}/>Flight Cost: {trip.flightCost}</li>
                        <li><FontAwesomeIcon icon={faCircleCheck}/>Accommodation: {trip.accommodationCost}</li>
                        <li><FontAwesomeIcon icon={faCircleCheck}/>Meal Costs: {trip.mealCost}</li>
                        <li><FontAwesomeIcon icon={faCircleXmark}/>Currency Exchange: {trip.currencyData} EGP
                            to {trip.currencyCode}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TripDetails