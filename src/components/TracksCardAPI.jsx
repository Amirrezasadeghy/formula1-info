import React from 'react';

const TracksCardAPI = ({ track }) => {
  return (
    <div className="relative flex flex-row gap-20 items-center p-10 rounded-br-3xl border-solid border-black border-r-4 border-b-8 hover:border-r-red-600 hover:border-b-red-600 hover:bg-gray-100">
      <img className="w-1/3 h-auto" src={track.circuit.image} alt={track.circuit.name} />

      <div className="mt-4 text-left flex flex-col gap-3">
        <p className="text-4xl font-f1bold">{track.competition.name}</p>
        <p className="text-xl font-f1bold">Location: {track.competition.location.country}, {track.competition.location.city}</p>
        <p className="text-xl font-f1bold">Circuit: {track.circuit.name}</p>
        <p className="text-xl font-f1bold">Season: {track.season}</p>
        <p className="text-xl font-f1bold">{track.type}</p>
        <p className="text-xl font-f1bold">{new Date(track.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default TracksCardAPI;
