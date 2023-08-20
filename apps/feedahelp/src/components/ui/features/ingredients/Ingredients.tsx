import React from "react";
import GenericLink from "../../../../../../../packages/ui/components/elements/GenericLink/GenericLink"

const Ingredients = () => {
  return (
    <div className="mb-2 h-96 w-full border border-red-700">
      This is the Ingredients section.

      <div>
      <p>hello this is for test the generic link: </p> <br />
      <GenericLink color='red'  href="http://www.facebook.com" > Facebook</GenericLink>
      </div>
    </div>
  );
};

export default Ingredients;
