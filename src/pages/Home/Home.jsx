import React, { Component } from "react"
import Hero from "./Hero"
import Recommendations from "./Recommendations"

class Home extends Component {

    render() {
        return (
            <>
                <Hero/>
                <Recommendations/>
            </>

        )
    }
}

export default Home