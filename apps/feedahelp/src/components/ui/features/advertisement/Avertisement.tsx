import React from "react";
import GenericLinkEffects from "~/components/genericLinkEffects/GenericLinkEffects";

const Avertisement = () => {
  return (
    <div className="h-44 border border-red-600">
      This is the Avertisement section.
      <br />
      Hi guys, check it out the generic link effect: <span className="ml-2"></span>
      <GenericLinkEffects
        href="https://www.facebook.com"
        color="text-blue-500"
        backgroundColor="bg-gray-100"
        fontSize="text-lg"
      >
        facebook
      </GenericLinkEffects>

    </div>
  );
};

export default Avertisement;
