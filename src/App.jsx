import React from "react";
import Header from "./components/header";
import Region from "./components/region";
import PlayerList from "./components/playerlist";
import JobDetails from "./components/job_details";
import { AiOutlineCloseSquare } from "react-icons/ai";

function App() {
  return (
    <div className="bg-red-50 flex justify-center items-center h-screen w-screen">
      <div className="h-[80vh] w-[60vw] border-8 border-black[200] p-6 rounded-xl relative">
        <div className="flex w-full justify-end">
          <AiOutlineCloseSquare className="h-6 w-6 text-red-800 cursor-pointer" />
        </div>
        <div className="flex flex-col justify-evenly  h-full w-full">
          <Header />
          <Region />
          <div className="">
            <div className="w-full flex gap-4">
              <div className="w-[30%]">
                <PlayerList />
              </div>
              <div className="w-[70%]">
                <JobDetails />
              </div>
            </div>
            <div className="flex justify-center items-center w-full bg-green-300 py-3 rounded-md mt-8 cursor-pointer">
              <h2 className="text-white font-semibold text-2xl">Job Start</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
