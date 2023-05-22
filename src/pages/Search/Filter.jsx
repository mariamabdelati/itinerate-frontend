import {
    faAngleDown,
    faAngleUp,
    faCircleXmark,
    faFilter,
    faGlobe,
    faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Filter = () => {
    const [filter, setFilter] = useState(true)
    const [globe, setGlobe] = useState(true)
    const [money, setMoney] = useState(true)

    const openFilter = () => {
        if (filter) {
            setFilter(false)
        } else {
            setFilter(true)
        }
    }


    const openGlobe = () => {
        if (globe) {
            setGlobe(false)
        } else {
            setGlobe(true)
        }
    }

    const openBudget = () => {
        if (money) {
            setMoney(false)
        } else {
            setMoney(true)
        }
    }

    return (

        <div className="filter">
            <div className="filter-header">
                <div className="filter-left-header">
                </div>
                <div className="filter-right-header" onClick={() => openFilter()}>
                    <FontAwesomeIcon className="icon" icon={faFilter}/>
                    <span>Filter</span> {filter ? <FontAwesomeIcon className="icon" icon={faAngleUp}/> :
                    <FontAwesomeIcon className="icon" icon={faAngleDown}/>}
                </div>

            </div>
            {filter && (
                <div className="filter-options">
                    <div className="filter-option-items-wrapper">
                        <div className="filter-option-items">
                            <div className="filter-option-item" onClick={() => openBudget()}>
                                <FontAwesomeIcon className="icon" icon={faMoneyBillWave}/>
                                <span>Budget</span> <FontAwesomeIcon icon={faCircleXmark}/>
                            </div>
                            <div className="filter-option-item" onClick={() => openGlobe()}>
                                <FontAwesomeIcon className="icon" icon={faGlobe}/>
                                <span>Country</span> {filter ? <FontAwesomeIcon className="icon" icon={faAngleUp}/> :
                                <FontAwesomeIcon className="icon" icon={faAngleDown}/>}
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Filter