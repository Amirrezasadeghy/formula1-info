import React from "react";
import { useState } from 'react';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TeamsCard from "../components/TeamsCard";


const Teams = [
    { rank: 1, name: 'Red Bull Racing', points: 408, driver1: 'Max Verstappen', driver1image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png' , driver2:'Sergio Perez', driver2image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png', image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png' },
    { rank: 2, name: 'McLaren', points: 366, driver1: 'Lando Norris', driver1image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png' , driver2:'Oscar Piastri', driver2image:'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png', image: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png' },
];

const TeamsScreen = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <>
        <NavBar/>

            <div>

                <div className='container ml-10 mr-10 mt-24'>
                    <h2 className='text-lg font-f1bold w-44 pt-5 pb-5 pl-5 bg-gray-100 border-solid border-l-8 border-l-black shadow-md'>2024 Teams</h2>
                </div>

                <div className="flex flex-col gap-10 ml-10 mr-10 mt-10">
                    {Teams.slice(0, showMore ? Teams.length : 2).map((Team) => (
                    <TeamsCard key={Team.rank} Team={Team}/>
                    ))}
                </div>


            </div>

        <Footer/>
        </>
    )
}

export default TeamsScreen;