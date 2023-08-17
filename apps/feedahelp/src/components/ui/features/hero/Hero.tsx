import React, { useState } from "react";
import CustomSpinner from "./../../../../../../../packages/ui/components/elements/GenericSpinner/CustomSpinner";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fakeData, setFakeData] = useState("");

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setFakeData("This is Fake Data!!!");
      setIsLoading(false);
    }, 5000);
  };

  const renderContent = () => {
    if (isLoading) {
      return <CustomSpinner isLoading={isLoading} />;
    }
    return <p>{fakeData}</p>;
  };

  return (
    <div className="mt-28 h-72 w-full border border-red-600">
      This is the Hero section.
      <div className="w-20 border-2 bg-green-100">
        <button className="h-auto w-20" onClick={fetchData}>
          <p>Click me</p>
        </button>
      </div>
      {renderContent()}     
    </div>
  );
};

export default Hero;
