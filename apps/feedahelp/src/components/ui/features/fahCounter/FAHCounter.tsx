import React, { useEffect, useState } from "react";
import FAHCounterDisplay from "./FAHCounterDisplay";
import { fetchCounter } from "~/utils/cms/fetchCounter";

type CounterItemProps = {
  title: string;
  imageIcon: string;
  imageAlt: string;
  value: number;
  monthlyIncrease: string;
};

const FAHCounter = () => {
  const [counterData, setCounterData] = useState<CounterItemProps[]>([]);

  const getCounter = async () => {
    try {
      const counterData: CounterItemProps[] = await fetchCounter();
      setCounterData(counterData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCounter();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
      {counterData.map((item, i) => (
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
