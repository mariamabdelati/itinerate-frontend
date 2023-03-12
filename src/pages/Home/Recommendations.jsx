import React, {Component} from 'react'
import Slider from 'react-slick'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import Card from "../../components/Card"
import locations from "./LocationsList"

class Recommendations extends Component {

    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }

    next() {
        this.slider.slickNext()
        console.log("next")
    }

    previous() {
        this.slider.slickPrev()
        console.log("prev")
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            centerMode: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 735,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        }


        return (
            <section className="recommendations section wrapper">
                <div className="recommendations-content">
                    <div className="recommendations-header flex">
                        <div className="recommendations-text">
                            <p>Plan Your Trip</p>
                            <h2 className="recommendations-title">Recommended Locations</h2>
                        </div>
                        <div className="recommendations-controls flex">
                            <div className="arrows">
                                <FontAwesomeIcon className="controls leftArrow" icon={faArrowLeft}
                                                 onClick={this.previous}/>
                                <FontAwesomeIcon className="controls" icon={faArrowRight} onClick={this.next}/>
                            </div>
                            <div className="flex">
                                <a href="Home/Recommendations#" className="btn">View all Locations</a>
                            </div>
                        </div>
                    </div>

                    <div className="recommendations-slider">
                        <Slider ref={(c) => (this.slider = c)} {...settings}>
                            {locations.map((location) => {
                                return (
                                    <Card location={location}/>
                                )
                            })}
                        </Slider>
                    </div>


                </div>
            </section>
        )
    };
}

export default Recommendations