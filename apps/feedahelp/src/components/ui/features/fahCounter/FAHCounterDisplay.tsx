import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

type CounterDisplayProp = {
  title: string;
  imageIcon: string;
  imageAlt: string;
  value: number;
  monthlyIncrease: string;
};

const CounterDisplay = ({
  title,
  imageIcon,
  imageAlt,
  value,
  monthlyIncrease,
}: CounterDisplayProp) => {
  return (
    <div className="dark:bg-darker flex items-center justify-between rounded-md bg-white p-4 shadow">
      <div>
        <h6 className="dark:text-primary-light text-xs font-medium uppercase leading-none tracking-wider text-gray-500">
          {title}
        </h6>
        <span className="text-xl font-semibold">
          <CountUp
            className="bg-gradient-to-r from-green-400 to-yellow-600 bg-clip-text text-4xl font-extrabold text-transparent"
            end={value}
          />
        </span>
        <span className="ml-2 inline-block rounded-md bg-green-100 px-2 py-px text-xs text-green-500">
          {monthlyIncrease}
        </span>
      </div>
      <div>
        <span>
          <Image src={imageIcon} alt={imageAlt} width={50} height={50} />
        </span>
      </div>
    </div>
  );
};

export default CounterDisplay;
