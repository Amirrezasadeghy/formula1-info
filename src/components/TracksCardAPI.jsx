import React from 'react';

const TracksCardAPI = ({ track }) => {
  return (
    <div className="relative flex flex-row gap-20 items-center p-10 rounded-br-3xl border-solid border-black border-r-4 border-b-8 hover:border-r-red-600 hover:border-b-red-600 hover:bg-gray-100">
      <img className="w-1/3 h-auto" src={track.image} alt={track.track.name} />

      <div className="mt-4 text-left flex flex-col gap-3">
        <p className="text-5xl font-f1bold font-bold">{track.date}</p>
        <div className='flex flex-row gap-5 items-center'>
          <img className="w-14 h-10 rounded-xl bg-gray-200" src={track.flag} alt={track.track.name} />
          <h2 className="text-2xl font-f1regular font-bold">{track.Track.name}</h2>
        </div>
        <p className="text-xl font-f1regular">Next: {track.next}</p>
        <p className="text-xl font-f1regular">Last: {track.last}</p>
        <p className="text-xl font-f1regular">Competition: {track.competition}</p>
        <p className="text-xl font-f1regular">Circuit: {track.circuit}</p>
        <p className="text-xl font-f1regular">Season: {track.season}</p>
        <p className="text-xl font-f1regular">Type: {track.type}</p>
        <p className="text-xl font-f1regular">Timezone: {track.timezone}</p>
      </div>
    </div>
  );
};

export default TracksCardAPI;
