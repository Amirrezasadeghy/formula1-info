import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const DriversDetail = () => {
    return (

      <>
      <NavBar/>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <img
            src="/path-to-image/driver-photo.png" // Replace with actual image path
            alt="Max Verstappen"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold">Max Verstappen</h1>
          <div className="flex items-center mt-2">
            <span className="flag-icon flag-icon-nl mr-2"></span>
            <span className="text-lg">Netherlands</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-gray-600">Team</div>
            <div className="font-medium">Red Bull Racing</div>
  
            <div className="text-gray-600">Podiums</div>
            <div className="font-medium">107</div>
  
            <div className="text-gray-600">Points</div>
            <div className="font-medium">2861.5</div>
  
            <div className="text-gray-600">Grands Prix entered</div>
            <div className="font-medium">199</div>
  
            <div className="text-gray-600">World Championships</div>
            <div className="font-medium">3</div>
  
            <div className="text-gray-600">Highest race finish</div>
            <div className="font-medium">1 (x61)</div>
  
            <div className="text-gray-600">Highest grid position</div>
            <div className="font-medium">1</div>
  
            <div className="text-gray-600">Date of birth</div>
            <div className="font-medium">30/09/1997</div>
  
            <div className="text-gray-600">Place of birth</div>
            <div className="font-medium">Hasselt, Belgium</div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">
            He's Max by name, and max by nature. Arriving as Formula 1’s youngest
            ever competitor at just 17 years old, Verstappen pushed his car, his
            rivals and the sport’s record books to the limit. The baby-faced
            Dutchman with the heart of a lion took the Toro Rosso - and then the
            Red Bull - by the horns with his instinctive racing style.
            <br />
            F1’s youngest points scorer soon became its youngest race winner - at
            the age of 18 years and 228 days - with a competitive but controlled
            drive on debut for Red Bull in Barcelona 2016. A true wheel-to-wheel
            racer, another stunning drive in Brazil from the back of the pack to
            the podium on a treacherous wet track kept the plaudits coming.
            <br />
            Verstappen's no-holds-barred attitude and hard defending have
            sometimes landed him in hot water with his peers and paymasters. But
            the mistakes that initially marred his potential have given way to
            maturity, while the bravado and energy that make him a blockbuster
            talent have remained - and the victories have kept on coming.
            <br />
            They led to his first F1 drivers’ crown after that now legendary,
            final-round showdown with Lewis Hamilton in 2021. He followed that up
            with a powerhouse title defence in 2022, before an epic third
            successive championship triumph, featuring a record 19 wins from 23
            Grands Prix.
            <br />
            The son of former F1 driver Jos Verstappen and super-quick karting Mum
            Sophie Kumpen, racing runs through his genes. Despite moving out of
            Dad’s house to live in Monaco, Verstappen remains close to his family,
            and though he’s not afraid to speak his mind, he can still be
            surprisingly shy.
            <br />
            Having become the Netherlands’ first world champion aged just 24, the
            expectations for the new generation’s leading light are sky high -
            but with Verstappen there’s a feeling that the sky’s the limit.
          </p>
        </div>
      </div>

      <Footer/>
      </>
      
    )
}

export default DriversDetail;

