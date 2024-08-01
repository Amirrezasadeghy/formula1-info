import React from "react";
import { useState } from 'react';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import DriverCardAPI from "../components/DriversCardAPI";

const drivers = [
    { rank: 1, name: 'Max Verstappen', points: 265, team: 'Red Bull Racing', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png' },
    { rank: 2, name: 'Lando Norris', points: 189, team: 'McLaren', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png' },
    { rank: 3, name: 'Charles Leclerc', points: 145, team: 'Ferrari', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png' },
    { rank: 4, name: 'Oscar Piastri', points: 89, team: 'McLaren', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png' },
    { rank: 5, name: 'Carlos Sainz', points: 140, team: 'Ferrari', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png' },
    { rank: 6, name: 'Lewis Hamilton', points: 167, team: 'Mercedes', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png' },
    { rank: 7, name: 'Sergio Perez', points: 160, team: 'Red Bull Racing', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png' },
    { rank: 8, name: 'George Russell', points: 132, team: 'Mercedes', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png' },
    { rank: 9, name: 'Fernando Alonso', points: 120, team: 'Aston Martin', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png' },
    { rank: 10, name: 'Lance Stroll', points: 82, team: 'Aston Martin', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png' },
];

const DriversScreen = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <>
        <NavBar/>

        <div>
            <div className='ml-10 mr-10 mt-10'>
                <h2 className='text-3xl font-f1bold p-7 bg-gray-100 border-solid border-l-8 border-l-black shadow-md'>2024 Drivers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-10 mr-10 mt-10">
                {drivers.slice(0, showMore ? drivers.length : 10).map((driver) => (
                <DriverCardAPI key={driver.rank} driver={driver} linkTo="/DriversDetail"/>
                ))}
            </div>

        </div>

        <Footer/>
        </>
    )
}

export default DriversScreen;