import React, {useContext, useState} from "react"
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {BASE_URL} from "../utilities/config";
import {NewtonsCradle} from "@uiball/loaders";
import {
    faBowlFood,
    faBus,
    faFileContract,
    faHotel,
    faMoneyBillWave,
    faPlane,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SearchContext} from "../context/SearchContext";

const TripDetails = () => {
    const {date} = useContext(SearchContext);

    // Access the start and end dates from the 'date' variable
    const startDate = date[0];
    const endDate = date[1];
    console.log(startDate, endDate)

    const {id} = useParams()
    const {data: trip, loading, error} = useFetch(`${BASE_URL}/trips/${id}?startDate=${startDate}&endDate=${endDate}`)

    const [weatherVisible, setWeatherVisible] = useState(false);
    const [foodVisible, setFoodVisible] = useState(false);

    const toggleWeather = () => {
        setWeatherVisible(!weatherVisible);
    };

    const toggleFood = () => {
        setFoodVisible(!foodVisible);
    };


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
                        <button className="btn btn-primary btn-gap">Book Now</button>
                        <button className="btn btn-solid">Save Trip</button>
                    </div>
                </div>
                <div className="description">
                    <p>{trip.description}</p>
                    <ul className="features">
                        <li><FontAwesomeIcon className="icon margin" icon={faPlane} fontSize={20}/> Flight
                            Cost: {trip.flightCost} EGP
                        </li>
                        <li><FontAwesomeIcon className="icon margin" icon={faHotel}
                                             fontSize={20}/> Accommodation: {trip.accommodationCost} EGP
                        </li>
                        <li><FontAwesomeIcon className="icon margin" icon={faBus} fontSize={20}/> Transportation
                            Costs: {trip.transportationCost} EGP
                        </li>
                        <li><FontAwesomeIcon className="icon margin" icon={faFileContract} fontSize={20}/> Visa
                            Costs: {trip.visaCost} EGP
                        </li>
                        <li><FontAwesomeIcon className="icon margin" icon={faBowlFood} fontSize={20}/> Meal
                            Costs: {trip.mealCost} EGP
                        </li>
                        <li><FontAwesomeIcon className="icon margin" icon={faMoneyBillWave} fontSize={20}/> Currency
                            Exchange: {trip.currencyData} EGP
                            to {trip.currencyCode}
                        </li>
                    </ul>
                    <div className="weather-food-grid">
                        <div className="weather">
                            <h2 onClick={toggleWeather}>Weather</h2>
                            {weatherVisible && (
                                <>
                                    {trip.weatherData && trip.weatherData.length > 0 ? (
                                        trip.weatherData.map((weather, index) => (
                                            <div className="weather-item" key={index}>
                                                <h3>{weather.date}</h3>
                                                <p>Evening Temperature: {weather.eve}°C</p>
                                                {/* Add more weather data as needed */}
                                            </div>
                                        ))
                                    ) : (
                                        <div>No weather data available</div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="food">
                            <h2 onClick={toggleFood}>Famous Food</h2>
                            {foodVisible && (
                                <>
                                    {trip.foodData && trip.foodData.length > 0 ? (
                                        trip.foodData.map((food, index) => (
                                            <div className="food-item" key={index}>
                                                <p>{food.strMeal}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <div>No food data available</div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TripDetails