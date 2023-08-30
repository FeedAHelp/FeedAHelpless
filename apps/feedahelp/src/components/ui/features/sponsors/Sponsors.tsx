import { items } from "./data";
import Image from "next/image";
import CircularText from "./circularText/circularText";

const Sponsors = () => {
  return (
    <div className="mb-2 border">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {items.map((value, index) => (
            // <Styled.bgCover key={index}>
            <div
              className="relative flex h-[150px] w-[150px] md:h-[200px] md:w-[200px] items-center justify-center mx-auto"
              key={index}
            >
              <Image
                src={value.imgSrc}
                alt={value.alt}
                width={150}
                height={150}
                className={`rounded-full md:w-[150px] md:h-[150px] w-[110px] h-[110px]`}
              />
              <CircularText text={value.text} />
            </div>
            // </Styled.bgCover>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
