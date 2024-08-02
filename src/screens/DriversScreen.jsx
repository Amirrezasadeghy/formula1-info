import React from "react";
import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DriverCardAPI from "../components/DriversCardAPI";

const DriversScreen = () => {

    const [drivers, setDrivers] = useState ([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://v1.formula-1.api-sports.io/rankings/drivers?season=2024', {
          headers: {
            'x-rapidapi-key': 'f7972ca67cb09d4b2ca4c1c253f9da77',
            'x-rapidapi-host': 'v1.formula-1.api-sports.io',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setDrivers(data.response);
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
            <Circles
              height="100"
              width="100"
              color="#000"
              ariaLabel="loading"
            />
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
                <DriverCardAPI key={driver.position} driver={driver} linkTo="/DriversDetail"/>
                ))}
            </div>

        </div>

        <Footer/>
        </>
    )
}

export default DriversScreen;