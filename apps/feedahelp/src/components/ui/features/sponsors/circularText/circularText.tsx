import { FC, useEffect, useState } from "react";
import { RotatingDiv } from "./circular.styled";

interface CircularTextProps {
  text: string;
}

const CircularText: FC<CircularTextProps> = ({ text }) => {
  const chars = text.split("");
  const [rotation, setRotation] = useState(12);
  const [transformOrigin, setTransformOrigin] = useState(75);
  useEffect(() => {
    const handleResize = () => {
      const rotationValue = window.innerWidth >= 768 ? 10 : 12;
      const transformOriginValue = window.innerWidth >= 768 ? 100 : 75;

      setRotation(rotationValue);
      setTransformOrigin(transformOriginValue);
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <RotatingDiv className="text absolute h-full w-full text-black">
      <p>
        {chars.map((char, i) => {
          const rotationValue = i * rotation;
          const transformOriginValue = `0 ${transformOrigin}px`;

          const charStyle = {
            transform: `rotate(${rotationValue}deg)`,
            transformOrigin: transformOriginValue,
          };

          return (
            <span
              className="absolute left-1/2 text-sm md:text-xl"
              style={charStyle}
              key={i}
            >
              {char}
            </span>
          );
        })}
      </p>
    </RotatingDiv>
  );
};

export default CircularText;
