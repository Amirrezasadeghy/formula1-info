import React from 'react';
import { Link } from 'react-router-dom';

const DriverCardAPI = ({ driver }) => {
  return (
    <Link to={`/driver/${encodeURIComponent(driver.driver.name)}`}>
      <div className="relative flex flex-row gap-2 items-center rounded-br-3xl border-solid border-black border-r-4 border-b-8 hover:border-r-red-600 hover:border-b-red-600 hover:bg-gray-100">
        
        <img className="w-96 h-96" src={driver.image} alt={driver.driver.name} />

        <div className="mt-4 text-left flex flex-col gap-3">
          <h2 className="text-2xl font-f1regular font-bold">{driver.driver.name}</h2>
          <p className="absolute right-10 top-10 text-8xl font-f1regular text-red-600">{driver.position}</p>
          <p className="text-5xl font-f1bold font-bold">{driver.points} PTS</p>
          <p className="text-md font-f1regular text-gray-500">{driver.team.name}</p>
        </div>

      </div>
    </Link>
  );
};

export default DriverCardAPI;
