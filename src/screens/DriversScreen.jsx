import React from "react";
import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DriverCardAPI from "../components/DriversCardAPI";

const DriversScreen = () => {

    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);

    const customImages = [
        { name: "Max Verstappen", color:"blue", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png" },
        { name: "Lando Norris", color:"orange", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png" },
        { name: "Charles Leclerc", color:"red", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png" },
        { name: "Oscar Piastri", color:"orange", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png" },
        { name: "Carlos Sainz Jr", color:"red", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png" },
        { name: "Lewis Hamilton", color:"cyan", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png" },
        { name: "Sergio Perez", color:"blue", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png" },
        { name: "George Russell", color:"cyan", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png" },
        { name: "Fernando Alonso", color:"green", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png" },
        { name: "Lance Stroll", color:"green", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png" },
        { name: "Nico Hulkenberg", color:"grey", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png" },
        { name: "Yuki Tsunoda", color:"blue", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png" },
        { name: "Daniel Ricciardo", color:"blue", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png" },
        { name: "Oliver Bearman", color:"red", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png" },
        { name: "Pierre Gasly", color:"blue", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png" },
        { name: "Kevin Magnussen", color:"grey", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png" },
        { name: "Alexander Albon", color:"blue", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png" },
        { name: "Esteban Ocon", color:"blue", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png" },
        { name: "Guanyu Zhou", color:"green", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png" },
        { name: "Logan Sargeant", color:"blue", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png" },
        { name: "Valtteri Bottas", color:"green", image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png" },
    ];

    useEffect(() => {
        fetch('https://v1.formula-1.api-sports.io/rankings/drivers?season=2024', {
            headers: {
                'x-rapidapi-key': 'f7972ca67cb09d4b2ca4c1c253f9da77',
                'x-rapidapi-host': 'v1.formula-1.api-sports.io',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            const driversWithImages = data.response.map((driver) => {
                const customImage = customImages.find(img => img.name === driver.driver.name);
                return {
                    ...driver,
                    image: customImage ? customImage.image : 'default-image-url.png'
                };
            });
            setDrivers(driversWithImages);
            setLoading(false); 
        })
        .catch((error) => {
            console.error('Error fetching drivers:', error);
            setLoading(false); 
        });
    }, []);
    
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Circles height="100" width="100" color="#000" ariaLabel="loading" />
            </div>
        );
    }

    return (
        <>
        <NavBar/>

        <div>
            <div className='ml-10 mr-10 mt-10'>
                <h2 className='text-3xl font-f1bold p-7 bg-gray-100 border-solid border-l-8 border-l-black shadow-md'>2024 Drivers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-10 mr-10 mt-10">
                {drivers.map((driver) => (
                    <DriverCardAPI key={driver.position} driver={driver} />
                ))}
            </div>

        </div>

        <Footer/>
        </>
    );
}

export default DriversScreen;
