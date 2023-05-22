import React from "react"
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {BASE_URL} from "../utilities/config";
import {NewtonsCradle} from "@uiball/loaders";

const TripDetails = () => {
    const {id} = useParams()
    const {data: trip, loading, error} = useFetch(`${BASE_URL}/trips/${id}`)
    //console.log(trip)

    return (
        <>
            {loading && <NewtonsCradle size={35} color={"#0057d9"}/>}
            {!loading && !error && (<section className="trip-details">
                <div className="box">
                    {/*<div className="images">*/}
                    {/*    {trip.images.map((image, index) => {*/}
                    {/*        return (*/}
                    {/*            <div className="img-holder">*/}
                    {/*                <img key={index} src={image} alt={trip.destinationName}/>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</div>*/}
                    <div className="basic-info">
                        <h1>{trip.destinationName}, {trip.location}</h1>
                        <div className="rate">
                            <i className="filled fas fa-star"></i>
                            <i className="filled fas fa-star"></i>
                            <i className="filled fas fa-star"></i>
                            <i className="filled fas fa-star"></i>
                            <i className="filled fas fa-star"></i>
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
                            <li><i className="fa-solid fa-circle-check"></i>Flight Cost: {trip.flightCost}</li>
                            <li><i className="fa-solid fa-circle-check"></i>Accommodation: {trip.accommodationCost}</li>
                            <li><i className="fa-solid fa-circle-check"></i>Meal Costs: {trip.mealCost}</li>
                            <li><i className="fa-solid fa-circle-xmark"></i>Unsupported Feature</li>
                            <li><i className="fa-solid fa-circle-xmark"></i>Unsupported Feature</li>
                        </ul>
                        <ul className="social">
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>)}
        </>
    )
}

export default TripDetails