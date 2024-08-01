import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TeamsCard from './TeamsCard';


const Teams = [
    { rank: 1, name: 'Red Bull Racing', points: 408, driver1: 'Max Verstappen', driver1image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png' , driver2:'Sergio Perez', driver2image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png', image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png' },
    { rank: 2, name: 'McLaren', points: 366, driver1: 'Lando Norris', driver1image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png' , driver2:'Oscar Piastri', driver2image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png', image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png' },
    { rank: 3, name: 'Ferrari', points: 345, driver1: 'Charles Leclerc', driver1image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png' , driver2:'Carlos Sainz', driver2image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png', image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari.png' },
];

const TeamsSection = () => {

    const navigate = useNavigate();

    return (

        <div>
            <div className='container ml-10 mr-10 mt-24'>
                <h2 className='text-lg font-f1bold w-44 pt-5 pb-5 pl-5 bg-gray-100 border-solid border-l-8 border-l-black shadow-md'>2024 Teams</h2>
            </div>

            <div className="flex flex-col gap-10 ml-10 mr-10 mt-10">
                {Teams.map((Team) => (
                <TeamsCard key={Team.rank} Team={Team}/>
                ))}
            </div>

            <button
                    className="absolute right-12 text-xl font-f1regular mt-4 p-2 border-r-2 border-b-2 border-r-gray-400 border-b-gray-400 rounded-br-2xl text-gray-400 hover:text-black hover:border-r-2 hover:border-b-2 hover:border-r-black hover:border-b-black"
                    onClick={() => navigate('/TeamsScreen')}
                >
                    More...
            </button>


        </div>

    )
}

export default TeamsSection;