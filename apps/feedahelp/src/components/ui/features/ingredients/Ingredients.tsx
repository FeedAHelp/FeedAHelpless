import React from "react";
import { Styled } from "./Ingredients.styled";
import Image from "next/image";

const Ingredients = () => {
  return (
    <div className="mb-2 h-96 w-full overflow-auto">
      <div className="relitive container">
        <div className="grid grid-cols-3 gap-5">
          <div className="relative flex cursor-pointer justify-center rounded-full">
            <Styled.CheckboxInput type="checkbox" id="inputOne" />
            <Styled.CheckboxLabel htmlFor="inputOne">
              <Image
                src="https://media.istockphoto.com/id/119472897/photo/three-fresh-onion-bulbs-on-white-background.jpg?s=612x612&w=0&k=20&c=TpLRSQpJlU5wfvgsVmfKBmW5t3XgjBty5o9L0zPfXKc="
                alt="baby with headphones"
                className="h-36 w-36 rounded-full object-cover"
                width={80}
                height={80}
              />
            </Styled.CheckboxLabel>
          </div>
          <div className="relative flex cursor-pointer justify-center rounded-full">
            <Styled.CheckboxInput type="checkbox" id="inputTwo" />
            <Styled.CheckboxLabel htmlFor="inputTwo">
              <Image
                src="https://media.istockphoto.com/id/466175630/photo/tomato-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ELzCVzaiRMgiO7A5zQLkuws0N_lvPxrgJWPn7C7BXz0="
                alt="baby with headphones"
                className="h-36 w-36 rounded-full object-cover"
                width={80}
                height={80}
              />
            </Styled.CheckboxLabel>
          </div>
          <div className="relative flex cursor-pointer justify-center rounded-full">
            <Styled.CheckboxInput type="checkbox" id="inputThree" />
            <Styled.CheckboxLabel htmlFor="inputThree">
              <Image
                src="https://media.istockphoto.com/id/499147864/photo/garlic.jpg?s=612x612&w=0&k=20&c=-9b483V6UP2UrljEYZDcEBEwzkPqb3u5MIJ3-Maofuc="
                alt="baby with headphones"
                className="h-36 w-36 rounded-full object-cover"
                width={80}
                height={80}
              />
            </Styled.CheckboxLabel>
          </div>
          <div className="relative flex cursor-pointer justify-center rounded-full">
            <Styled.CheckboxInput type="checkbox" id="inputFour" />
            <Styled.CheckboxLabel htmlFor="inputFour">
              <Image
                src="https://media.istockphoto.com/id/1158646949/photo/garam-masala-powder.jpg?s=612x612&w=0&k=20&c=DnNPukaJDXzZxLWs8FpANYay7z_CcGlO1hORBSLDlBk="
                alt="baby with headphones"
                className="h-36 w-36 rounded-full object-cover"
                width={80}
                height={80}
              />
            </Styled.CheckboxLabel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
