import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Home.css";
import WorkoutContainer from "../workout/WorkoutContainer";

const sections = `arts, automobiles, books, business, fashion, food, health,
home, insider, magazine, movies, national, nyregion, obituaries,
opinion, politics, realestate, science, sports, sundayreview,
technology, theater, tmagazine, travel, upshot, world`
    .replace(/ /g, "")
    .split(",");

function HomePage() {
    const [selectedSection, setSelectedSection] = useState("arts");
    const [articles, setArticles] = useState([]);
    const [initialized, setInitialized] = useState(false);


    return (
        <div className="HomePage">
            <div className="col-12">
                <div className="row">
                    <div className="col-md-3 d-none d-md-block d-lg-block d-xl-block">

                    </div>
                    <div className="col right">
                        <WorkoutContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;