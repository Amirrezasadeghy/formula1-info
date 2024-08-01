import React from 'react';

const TracksCard = ({ Track }) => {
  return (
    <div className="relative flex flex-row gap-20 items-center p-10 rounded-br-3xl border-solid border-black border-r-4 border-b-8 hover:border-r-red-600 hover:border-b-red-600">

      <img className="w-1/3 h-auto" src={Track.image} alt={Track.name} />

      <div className="mt-4 text-left flex flex-col gap-3">
        <p className="text-5xl font-f1bold font-bold">{Track.date}</p>
        <div className='flex flex-row gap-5 items-cente'>
          <img className="w-14 h-10 rounded-xl bg-gray-200" src={Track.flag} alt={Track.name} />
          <h2 className="text-2xl font-f1regular font-bold">{Track.name}</h2>
        </div>
      </div>

    </div>
  );
};

export default TracksCard;
