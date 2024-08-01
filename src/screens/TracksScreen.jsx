import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TracksCard from "../components/TracksCard";


const Tracks = [
    {  name: 'Formula 1 Pirelli Gran Premio DItalia 2024 ', date:'30 - 01 AUG - SEP', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png',  image: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png' },
    {  name: 'Formula 1 Qatar Airways Azebaijan Grand Prix 2024', date:'13 - 15 SEP', flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',  image: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png' },
];

const TracksScreen = () => {
    return (

        <>
            <NavBar/>

            <div>

                <div className='container ml-10 mr-10 mt-24'>
                    <h2 className='text-lg font-f1bold w-44 pt-5 pb-5 pl-5 bg-gray-100 border-solid border-l-8 border-l-black shadow-md'>2024 Teams</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-10 mr-10 mt-10">
                    {Tracks.map((Track) => (
                    <TracksCard key={Track.rank} Track={Track}/>
                    ))}
                </div>

            </div>

            <Footer/>
        </>

    )
}

export default TracksScreen;