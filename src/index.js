import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"
//import "./index.css"
import "./styles/main.scss"
import App from "./App"
import {SearchContextProvider} from "./context/searchContext";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <SearchContextProvider>
                <App/>
            </SearchContextProvider>
        </Router>
    </React.StrictMode>,
)
