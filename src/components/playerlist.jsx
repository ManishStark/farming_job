import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { AiTwotonePlusSquare } from "react-icons/ai";

function PlayerList() {
  const [players, setPlayers] = useState(playerData);

  const inviteButtonCount = 4 - players.length;

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <HiMiniUserGroup className="text-green-500 h-5 w-5" />
        <h2 className="font-medium text-lg">Player List</h2>
      </div>
      {players.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
      {Array(inviteButtonCount)
        .fill(null)
        .map((_, index) => (
          <InviteButton key={index} />
        ))}
    </div>
  );
}

const playerData = [
  {
    img: "",
    name: "Brenden Randall",
    role: "Owner",
    level: "Level 3",
  },
  {
    img: "",
    name: "Lisa Millar",
    role: "",
    level: "Level 12",
  },
  {
    img: "",
    name: "John Smith",
    role: "",
    level: "Level 3",
  },
];

const PlayerCard = ({ player }) => {
  return (
    <div className="flex items-center gap-3 mb-3  border py-3 px-4 rounded-md">
      <div className="h-8 w-8 rounded-full flex justify-center items-center bg-green-400">
        {player?.img ? (
          <img src={player.image} className="h-6 w-6" alt={player.name} />
        ) : (
          <IoPerson color="white" />
        )}
      </div>
      <div>
        <h2 className="font-medium">
          {player?.name}{" "}
          {player?.role && (
            <span className="font-normal text-sm">({player?.role})</span>
          )}
        </h2>
      </div>
    </div>
  );
};

const InviteButton = () => {
  return (
    <div className="flex justify-center items-center gap-3 mb-3 border py-3 cursor-pointer rounded-md">
      <div className="flex items-center gap-2">
        <AiTwotonePlusSquare />
        <h2 className="font-medium">Player Invite</h2>
      </div>
    </div>
  );
};

export default PlayerList;
