import React from "react";
import FAHCounterDisplay from "./FAHCounterDisplay";
import FAHCounterData from "./FAHCounter.json";

const FAHCounter = () => {
  return (
    <div className="grid grid-cols-1 gap-8 p-10 lg:grid-cols-2 xl:grid-cols-4">
      {FAHCounterData.map((item, i) => (
        <FAHCounterDisplay
          key={i}
          title={item?.title}
          imageIcon={item?.imageIcon}
          imageAlt={item?.imageAlt}
          value={item?.value}
          monthlyIncrease={item?.monthlyIncrease}
        />
      ))}
    </div>
  );
};

export default FAHCounter;
