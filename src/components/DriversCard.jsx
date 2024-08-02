import React from 'react';
import { Link } from 'react-router-dom';

const DriverCard = ({ driver }) => {
  return (

    <Link to={`/driver/${encodeURIComponent(driver.name)}`}>
      <div className="relative flex flex-row gap-2 items-center rounded-br-3xl border-solid border-black border-r-4 border-b-8 hover:border-r-red-600 hover:border-b-red-600 hover:bg-gray-100">

        <img className="w-64 h-64" src={driver.image} alt={driver.name} />

        <div className="w-24 mt-4 text-left flex flex-col gap-1">
          <h2 className="text-2xl font-f1regular font-bold">{driver.name}</h2>
          <p className="absolute right-7 top-10 text-9xl font-f1regular text-red-600">{driver.rank}</p>
          <p className="text-5xl font-f1bold font-bold">{driver.points} PTS</p>
          <p className="absolute bottom-3 text-md font-f1regular text-gray-500">{driver.team}</p>
        </div>

      </div>
    </Link>

  );
};

export default DriverCard;




