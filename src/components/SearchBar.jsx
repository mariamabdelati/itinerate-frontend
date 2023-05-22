import React, {useRef, useState} from "react"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import DatePicker, {utils} from "@amir04lm26/react-modern-calendar-date-picker"
import {useNavigate} from "react-router-dom"
import Directory from "../utilities/Directory"
import {BASE_URL} from "../utilities/config";


const SearchBar = ({position}) => {
    const navigate = useNavigate()
    const locationRef = useRef('')
    const budgetRef = useRef(0)

    const searchHandler = async () => {
        const location = locationRef.current.value
        const date = selectedDayRange
        const budget = budgetRef.current.value

        if ((location.trim().length === 0 && budget.trim().length === 0) || selectedDayRange.from == null) {
            return alert('Please enter a valid search criteria: you can search by trip or budget or both but must include trip dates');
        }

        const startDate = new Date(
            `${date.from.year}-${date.from.month}-${date.from.day}`
        ).setHours(0, 0, 0, 0);
        const endDate = new Date(
            `${date.to.year}-${date.to.month}-${date.to.day}`
        ).setHours(0, 0, 0, 0);

        const res = await fetch(
            `${BASE_URL}/trips/search?destinationName=${location}&startDate=${startDate}&endDate=${endDate}&dailyCost=${budget}`
        );

        if (!res.ok) {
            return alert('An error occurred while searching for trips. Please try again later.')
        }

        const result = await res.json()

        navigate(`/${Directory.SEARCH_TRIP}?destinationName=${location}&startDate=${startDate}&endDate=${endDate}&dailyCost=${budget}`, {
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