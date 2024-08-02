import React from "react";
import { useNavigate } from 'react-router-dom';

import TracksCard from "./TracksCard";


const Tracks = [
    {  name: 'Formula 1 Pirelli Gran Premio DItalia 2024 ', date:'30 - 01 AUG - SEP', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png',  image: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png' },
    {  name: 'Formula 1 Qatar Airways Azebaijan Grand Prix 2024', date:'13 - 15 SEP', flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',  image: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png' },
];

const TracksSection = () => {

    const navigate = useNavigate();

    return (

        <div>
            <div className='container ml-10 mr-10 mt-24'>
                <h2 className='text-lg font-f1bold w-44 pt-5 pb-5 pl-5 bg-gray-100 border-solid border-l-8 border-l-black shadow-md'>2024 Races</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-10 mr-10 mt-10">
                {Tracks.map((Track) => (
                <TracksCard key={Track.rank} Track={Track}/>
                ))}
            </div>

            <button
                    className="absolute right-12 text-xl font-f1regular mt-4 p-2 border-r-2 border-b-2 border-r-gray-400 border-b-gray-400 rounded-br-2xl text-gray-400 hover:text-black hover:border-r-2 hover:border-b-2 hover:border-r-black hover:border-b-black"
                    onClick={() => navigate('/TracksScreen')}
                >
                    More...
            </button>


        </div>

    )
}

export default TracksSection;