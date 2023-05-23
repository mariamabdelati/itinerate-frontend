import React, {useContext, useRef, useState} from "react"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import DatePicker, {utils} from "@amir04lm26/react-modern-calendar-date-picker"
import {useNavigate} from "react-router-dom"
import Directory from "../utilities/Directory"
import {BASE_URL} from "../utilities/config";
import {SearchContext} from "../context/SearchContext";


const SearchBar = ({position}) => {
    const navigate = useNavigate()
    const locationRef = useRef('')
    const budgetRef = useRef()
    const {dispatch} = useContext(SearchContext);


    const searchHandler = async () => {
        const location = locationRef.current.value
        const date = selectedDayRange
        const budget = budgetRef.current.value

        if ((location.trim().length === 0 && budget.trim().length === 0) || selectedDayRange.from == null) {
            return alert('Please enter a valid search criteria: you can search by trip or budget or both but must include trip dates');
        }

        const startDate =
            `${date.from.year}-${date.from.month}-${date.from.day}`
        let endDate = startDate;
        if (date.to != null) {
            endDate = `${date.to.year}-${date.to.month}-${date.to.day}`
        }

        const stDate = new Date(startDate).setHours(0, 0, 0, 0);
        const eDate = new Date(endDate).setHours(0, 0, 0, 0);
        dispatch({
            type: "NEW_SEARCH",
            payload: {
                location,
                date: [startDate, endDate],
                budget,
            },
        });

        const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
        let dateDifferenceInDays = 1;
        if (eDate !== stDate) {
            dateDifferenceInDays = Math.round((eDate - stDate) / millisecondsPerDay);
        }


        const dailyCost = budget / dateDifferenceInDays;

        const res = await fetch(
            `${BASE_URL}/trips/search?destinationName=${location}&startDate=${startDate}&endDate=${endDate}&dailyCost=${dailyCost}`
        );

        if (!res.ok) {
            return alert('An error occurred while searching for trips. Please try again later.')
        }

        const result = await res.json()

        navigate(`/${Directory.SEARCH_TRIP}?destinationName=${location}&startDate=${startDate}&endDate=${endDate}&dailyCost=${dailyCost}`, {
            state: result.data
        });
    }

    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null,
    })

    let formatInputValue

    if (selectedDayRange.from == null && selectedDayRange.to == null) {
        formatInputValue = ''
    } else if (selectedDayRange.from != null && selectedDayRange.to == null) {
        formatInputValue = `${selectedDayRange.from.day}/${selectedDayRange.from.month}/${selectedDayRange.from.year}`
    } else if (selectedDayRange.from == null && selectedDayRange.to != null) {
        formatInputValue = `${selectedDayRange.to.day}/${selectedDayRange.to.month}/${selectedDayRange.to.year}`
    } else {
        formatInputValue = `${selectedDayRange.from.day}/${selectedDayRange.from.month}/${selectedDayRange.from.year} - ${selectedDayRange.to.day}/${selectedDayRange.to.month}/${selectedDayRange.to.year}`
    }

    const renderCustomInput = ({ref}) => (
        <input
            readOnly
            ref={ref} // necessary
            placeholder="Select Trip Dates"
            value={
                formatInputValue
            }
            className="date-input" // a styling class
        />
    )

    return (
        <div className="search-bar grid">
            <div className="destDiv">
                <label htmlFor="dest">Destination</label>
                <input type="search" id="dest" placeholder="Destination" ref={locationRef}/>
            </div>
            <div className="dateDiv">
                <label htmlFor="date">Trip Dates</label>
                <DatePicker
                    value={selectedDayRange}
                    onChange={setSelectedDayRange}
                    calendarPopperPosition={position}
                    renderInput={renderCustomInput}
                    focusInputOnDateSelect={false}
                    colorPrimary="#0057d9"
                    colorPrimaryLight="rgba(0, 87, 217, 0.2)"
                    minimumDate={utils().getToday()}
                    wrapperClassName="date-range"
                />
            </div>
            <div className="budgetDiv">
                <label htmlFor="budget">Trip Budget</label>
                <input type="text" id="budget" placeholder="EGP 0" ref={budgetRef}/>
            </div>
            <button className="btn btn-primary" onClick={searchHandler}>Explore Now</button>
        </div>
    )
}
export default SearchBar