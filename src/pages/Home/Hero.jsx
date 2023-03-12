import SearchBar from "../../components/SearchBar"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content wrapper">
                <div className="hero-text">
                    <h1 className="hero-title">Explore Your Way</h1>

                    <p className="hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                                                    natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
                                                    tenetur!</p>
                </div>

                <SearchBar/>

            </div>
        </section>
    )
}

export default Hero