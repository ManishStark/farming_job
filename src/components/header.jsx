import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";

function Header() {
  const [level, setLevel] = useState("5");
  const [exp, setExp] = useState("1250");
  const [user, setUser] = useState({ name: "Brenden Randall", money: "56000" });
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="h-28 p-2 border border-black rounded-md">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center justify-center">
            <input type="radio" name="player" id="player_radio" checked />
            <h2 className="text-black font-medium">Level {level} </h2>
          </div>
          <h2 className="text-[#90938b]">
            required exp{" "}
            <span className="text-black font-medium">{exp} Exp</span>
          </h2>
        </div>
        <div className="bg-black h-1 w-full rounded-md mt-3">
          <div className="bg-green-300 w-[70%] h-1"></div>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <h2>1250 Exp</h2>
          <h2>1500 Exp</h2>
        </div>
      </div>
      <div className="h-28 p-2 border border-black rounded-md flex flex-col items-center justify-center w-full">
        <h2 className="font-medium text-2xl">TWORST</h2>
        <h2>Gardner</h2>
      </div>
      <div className="h-28 p-2 border border-black rounded-md flex gap-4">
        <div className="h-10 w-10 bg-green-600 rounded-full flex justify-center items-center">
          <IoPerson color="white" />
        </div>
        <div>
          <h2>{user?.name}</h2>
          <h2>${user?.money}</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
