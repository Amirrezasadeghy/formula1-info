import React from 'react';
import { Link } from 'react-router-dom';

const TeamsCardAPI = ({ team }) => {
  return (

    <Link to={`/team/${encodeURIComponent(team.name)}`}>
      <div className="relative flex flex-row items-center p-3 rounded-br-3xl border-solid border-black border-r-4 border-b-8 hover:border-r-red-600 hover:border-b-red-600 hover:bg-gray-100">

        <img className="w-1/2 h-auto" src={team.image} alt={team.team.name} />

        <div className="mt-4 text-left flex flex-row gap-2">
          <div className='flex flex-col w-72'>
            <h2 className="text-2xl font-f1regular font-bold">{team.team.name}</h2>
            <p className="text-5xl font-f1bold font-bold">{team.points} PTS</p>
          </div>
          <p className="absolute right-10 top-50% text-8xl font-f1regular text-red-600">{team.position}</p>
        </div>

      </div>
    </Link>
  );
};

export default TeamsCardAPI;
