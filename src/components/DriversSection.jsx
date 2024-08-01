import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DriverCard from "./DriversCard";


const drivers = [
    { rank: 1, name: 'Max Verstappen', points: 265, team: 'Red Bull Racing', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png' },
    { rank: 2, name: 'Lando Norris', points: 189, team: 'McLaren', image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png' },
    // Add more driver objects here
];

const DriversSection = () => {
    
    const navigate = useNavigate();

    return (

            <div>
                <div className='container ml-10 mr-10 mt-10'>
                    <h2 className='text-lg font-f1bold w-44 pt-5 pb-5 pl-5 bg-gray-100 border-solid border-l-8 border-l-black shadow-md'>2024 Drivers</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-10 mr-10 mt-10">
                    {drivers.map((driver) => (
                    <DriverCard key={driver.rank} driver={driver}/>
                    ))}
                </div>

               
                <button
                    className="absolute right-12 text-xl font-f1regular mt-4 p-2 border-r-2 border-b-2 border-r-gray-400 border-b-gray-400 rounded-br-2xl text-gray-400 hover:text-black hover:border-r-2 hover:border-b-2 hover:border-r-black hover:border-b-black"
                    onClick={() => navigate('/DriversScreen')}
                >
                    More...
                </button>


            </div>

    )
}

export default DriversSection;