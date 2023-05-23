import Directory from "../utilities/Directory"
import { useNavigate } from "react-router-dom"

const Error = () => {
    const navigate = useNavigate()

    const BackHome = () => {
        navigate(Directory.EMPTY_CHILD)
    }

    return (
        <section className="error-section">
            <div className="error-section-content">
                <div className="image-layer"></div>
                <h2 className="secondary-title-white">Page Not Found</h2>
                <p>The Page you requested could not be Found </p>
                <button className="btn btn-solid"
                        onClick={BackHome}>Back Home
                </button>
            </div>
        </section>

    )
}

export default Error