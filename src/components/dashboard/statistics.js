import React from "react";

function Statistics() {
  const statsData = [
    { label: "Active Orders", stats: "14" },
    { label: "Completed Orders", stats: "57" },
    { label: "OverAll Spent", stats: "$1375" },
  ];

  return (
    <>
      <div className="card w-full p-5 h-fit">
        <div className="bg-white">
          <div className="flex">
            {statsData.map((stat) => (
              <Stats label={stat.label} stats={stat.stats} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export const Stats = ({ label, stats }) => {
  return (
    <div className="w-full text-center">
      <p className="text-xs md:text-sm font-medium leading-none  uppercase">
        {label}
      </p>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 -800 mt-3 md:mt-5">
        {stats}
      </p>
    </div>
  );
};

export default Statistics;
