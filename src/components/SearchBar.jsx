import React, {useState} from "react"
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css"
// import "react-dates/initialize"
// import "react-dates/lib/css/_datepicker.css"
// import { DateRange } from "react-date-range";
import DatePicker, {utils} from "@amir04lm26/react-modern-calendar-date-picker"

const SearchBar = () => {
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
                <input type="search" id="dest" placeholder="Destination"/>
            </div>
            <div className="dateDiv">
                <label htmlFor="date">Trip Dates</label>
                <DatePicker
                    value={selectedDayRange}
                    onChange={setSelectedDayRange}
                    calendarPopperPosition={"bottom"}
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
                <input type="text" id="budget" placeholder="$1000"/>
            </div>
            <button className="btn btn-primary">Explore Now</button>
        </div>
    )
}
export default SearchBar