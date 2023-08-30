import { FC, useEffect, useState } from "react";

interface CircularTextProps {
  text: string;
}

const CircularText: FC<CircularTextProps> = ({ text }) => {
  const chars = text.split("");
  const [rotation, setRotation] = useState(12);
  const [transformOrigin, setTransformOrigin] = useState(75);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setRotation(10);
        setTransformOrigin(100);
      } else {
        setRotation(12);
        setTransformOrigin(75);
      }
    });
    if (window.innerWidth >= 768) {
        setRotation(10);
        setTransformOrigin(100);
      } else {
        setRotation(12);
        setTransformOrigin(75);
      }
  }, []);

  return (
    <div className="text absolute h-full w-full animate-spin-slow text-black">
      <p>
        {chars.map((char, i) => (
          <span
            className="absolute left-1/2 text-sm md:text-xl"
            style={{
              transform: `rotate(${i * rotation}deg)`,
              transformOrigin: ` 0 ${transformOrigin}px`,
            }}
            key={i}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default CircularText;
