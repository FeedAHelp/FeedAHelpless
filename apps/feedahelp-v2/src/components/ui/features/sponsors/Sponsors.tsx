import React, { useState, useEffect } from "react";
import Image from "next/image";
import CircularText from "./circularText/circularText";
import { fetchSponsers } from "~/utils/cms/fetchSponsers";

type SponserProps = {
  sponserName: string;
  image: string;
};

const FAHSponsers = () => {
  const [sponserData, setSponserData] = useState<SponserProps[]>([]);

  const getSponsers = async () => {
    try {
      const sponserData: SponserProps[] = await fetchSponsers();
      setSponserData(sponserData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSponsers();
  }, []);

  return (
    <div className="mb-2">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {sponserData.map((value, index) => (
            <div className="sponsor-wrapper" key={index}>
              <Image
                src={value.image}
                alt={value.sponserName}
                width={150}
                height={150}
                className={`h-[110px] w-[110px] rounded-full md:h-[150px] md:w-[150px]`}
              />
              <CircularText text={value.sponserName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAHSponsers;
