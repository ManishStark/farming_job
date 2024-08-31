import React, { useState } from "react";
import { CgFileDocument } from "react-icons/cg";
import { IoMdRadioButtonOn } from "react-icons/io";

function JobDetails() {
  const [jobSteps, setJobSteps] = useState(jobStepsData);
  const [itemsGiven, setItemsGiven] = useState(itemGivenData);
  const [rewardAmount, setRewardAmount] = useState("100000");
  const [exp, setExp] = useState("1250");
  return (
    <div className="border rounded-md px-4 py-3 ">
      <div className=" flex gap-2 items-center mb-4">
        <CgFileDocument />
        <h2 className="font-medium">Job Details</h2>
      </div>
      {jobStepsData.map((step, index) => (
        <JobStepCard step={step} index={index} />
      ))}
      <div className="flex w-full mt-8">
        <div className="w-[65%]">
          <h2 className="text-lg font-medium mb-2">Items Given:</h2>
          <div className="grid grid-cols-2">
            {itemsGiven.map((item) => (
              <ItemCard item={item} />
            ))}
          </div>
        </div>
        <div className="w-[35%] flex flex-col items-center">
          <h2>reward you will receive</h2>
          <h2 className="text-green-500 text-2xl font-medium mt-3">
            ${rewardAmount}
          </h2>
          <h2 className="text-orange-300">{exp} Exp</h2>
        </div>
      </div>
    </div>
  );
}
const jobStepsData = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque, eos unde quos quisquam dolorum laudantium porro nam suscipit dignissimos.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laborum?",
];
const itemGivenData = [
  "2 mowing shears",
  "1 vehicle",
  "2 lawn mowers",
  "1 trailer",
];
const JobStepCard = ({ step, index }) => {
  return (
    <div className="mb-2.5">
      <h2 className="font-medium">Job Step {index}</h2>
      <h2 className="mt-0">{step}</h2>
    </div>
  );
};
const ItemCard = ({ item }) => {
  return (
    <div className="flex items-center gap-2">
      <IoMdRadioButtonOn className="text-green-500" />
      <h2 className="font-medium text-green-500">{item}</h2>
    </div>
  );
};
export default JobDetails;
