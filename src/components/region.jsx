import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdRadioButtonOn } from "react-icons/io";

function Region() {
  const [totalRegion, setTotalRegion] = useState(3);
  const [regionsData, setRegionsData] = useState(regionData);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaLocationDot className="h-8 w-8" />
          <div>
            <h2 className="font-medium">Select Job Region</h2>
            <h3>Choose</h3>
          </div>
        </div>
        <div>
          <h2>Total Region</h2>
          <h2 className="font-medium">3 Regions</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-3">
        {regionsData.map((region) => (
          <RegionCard region={region} />
        ))}
      </div>
    </div>
  );
}
const regionData = [
  {
    name: "Region 1",
    place: "Los Sentos Police Department",
    level: "No Level Required",
    player: "1-4 player",
    task: ["20 areas to be cleared", "2 areas to be driven"],
    award: 56000,
  },
  {
    name: "Region 2",
    place: "Los Polos Hermanos",
    level: "Level 5",
    player: "3-8 player",
    task: ["20 areas to be cleared", "2 areas to be driven"],
    award: 120000,
  },
  {
    name: "Region 3",
    place: "Hasta la vista",
    level: "Level 2",
    player: "1 player",
    task: ["20 areas to be cleared", "2 areas to be driven"],
    award: 15000,
  },
];
const RegionCard = ({ region }) => {
  return (
    <div className="border rounded-md h-full relative">
      <div className=" px-4 py-3 mb-10">
        <h2 className="font-medium">{region?.name}</h2>
        <h2 className="text-sm mt-1">{region?.place}</h2>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="bg-blue-50 px-3 py-1 rounded-sm mt-2">
            <h2 className="font-medium">{region?.level}</h2>
          </div>
          <div className="bg-lime-300 px-3 py-1 rounded-sm mt-2">
            <h2 className="font-medium">{region?.player}</h2>
          </div>
        </div>
        <h2 className="font-medium text-base mt-5 mb-1">Job Task:</h2>
        {region?.task.map((taskname) => (
          <div className="flex gap-2 items-center">
            <IoMdRadioButtonOn className="text-green-500" />
            <h2 className="text-green-500 ">{taskname}</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-between bg-green-100 px-4 py-2 absolute bottom-0 w-full">
        <h2>Awards:</h2>
        <h2 className="text-green-500 font-semibold">${region?.award}</h2>
      </div>
    </div>
  );
};

export default Region;
