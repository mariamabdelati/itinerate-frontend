import React, {useRef} from 'react'
import Slider from 'react-slick'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import Card from "../../components/Card"
import useFetch from "../../hooks/useFetch";
import {BASE_URL} from "../../utilities/config";
import {NewtonsCradle} from '@uiball/loaders'

const Recommendations = () => {
    const sliderRef = useRef(null)

    const next = () => {
        sliderRef.current.slickNext()
        console.log('next')
    }

    const previous = () => {
        sliderRef.current.slickPrev()
        console.log('prev')
    }

    const {data: featureDestinations, loading, error} = useFetch(BASE_URL + '/trips')

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
        <>
            {loading && <NewtonsCradle size={35} color={"#0057d9"}/>}
            {error && <div>{error}</div>}
            {!loading && !error && (
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
                                                     onClick={previous}/>
                                    <FontAwesomeIcon className="controls" icon={faArrowRight} onClick={next}/>
                                </div>
                                <div className="flex">
                                    <a href="Home/Recommendations#" className="btn">View all Locations</a>
                                </div>
                            </div>
                        </div>

                        <div className="recommendations-slider">
                            <Slider ref={sliderRef} {...settings}>
                                {featureDestinations.slice(0, 5).map((location) => {
                                    return (
                                        <Card location={location}/>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </section>)}
        </>
    )
}

export default Recommendations