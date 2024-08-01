import React from "react";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import DriversSection from "../components/DriversSection";
import TeamsSection from "../components/TeamsSection";
import TracksSection from "../components/TracksSection";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
        <NavBar/>
        <Hero/>
        <DriversSection/>
        <TeamsSection/>
        <TracksSection/>
        <Footer/>
        </>
    )
}

export default HomePage;