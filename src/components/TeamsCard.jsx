import React from 'react';

const TeamsCard = ({ Team }) => {
  return (
    <div className="relative flex flex-row gap-20 items-center p-3 rounded-br-3xl border-solid border-black border-r-4 border-b-8 hover:border-r-red-600 hover:border-b-red-600">

      <img className="w-1/2 h-auto" src={Team.image} alt={Team.name} />

      <div className="mt-4 text-left flex flex-col gap-5">
        <h2 className="text-2xl font-f1regular font-bold">{Team.name}</h2>
        <p className="absolute right-10 top-50% text-9xl font-f1regular text-red-600">{Team.rank}</p>
        <p className="text-5xl font-f1bold font-bold">{Team.points} PTS</p>
        <div className='flex flex-row gap-16'>
          <div className='flex flex-row gap-5 items-center'>
            <img className="w-16 h-auto rounded-full bg-gray-200" src={Team.driver1image} alt={Team.name} />
            <p className=" text-md font-f1regular text-gray-500">{Team.driver1}</p>
          </div>
          <div className='flex flex-row gap-5 items-center'>
            <img className="w-16 h-auto rounded-full bg-gray-200" src={Team.driver2image} alt={Team.name} />
            <p className=" text-md font-f1regular text-gray-500">{Team.driver2}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TeamsCard;
