import React, { useEffect, useRef, useState } from "react";
import { Styled } from "./Hero.styled";

interface DisplayImage {
  src: string;
  width: number;
  height: number;
}

const Hero: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [displayImages, setDisplayImages] = useState<DisplayImage[]>([]);
  const [scrollTimeOut, setScrollTimeOut] = useState<boolean>(false);

  const intervalTime: number = 3000;

  useEffect(() => {
    const listItems = document.querySelectorAll("ul li");
    const newDisplayImages: DisplayImage[] = [];

    listItems.forEach((item) => {
      const img = item.querySelector("img");
      if (img) {
        newDisplayImages.push({
          src: img.src,
          width: img.width,
          height: img.height,
        });
      }
    });

    setDisplayImages(newDisplayImages);

    const handleResize = () => {
      positionActiveItemBorder();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    positionActiveItemBorder();
    positionDisplayImg();
    setAutoScroll();

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollTimeOut || e.wheelDeltaY === 0) return;
      setScrollTimeOut(true);
      clearTimeout(scrollTimer);
      const scrollTimer = setTimeout(() => {
        setScrollTimeOut(false);
      }, 500);

      const direction = e.wheelDeltaY / -Math.abs(e.wheelDeltaY);
      setActiveItem((prevActiveItem) => {
        let newActiveItem = prevActiveItem + direction;
        if (newActiveItem > displayImages.length - 1) newActiveItem = 0;
        else if (newActiveItem < 0) newActiveItem = displayImages.length - 1;
        positionActiveItemBorder();
        positionDisplayImg();
        setAutoScroll();
        return newActiveItem;
      });
    };

    document.querySelector("ul")?.addEventListener("wheel", handleWheel);

    return () => {
      document.querySelector("ul")?.removeEventListener("wheel", handleWheel);
      clearInterval(autoScroll);
    };
  }, [activeItem, scrollTimeOut]);

  const positionActiveItemBorder = () => {
    const listItems = document.querySelectorAll("ul li");
    const activeItemElement = listItems[activeItem] as HTMLElement;
    if (activeItemElement) {
      const bounding = activeItemElement.getBoundingClientRect();
      const activeItemBorder = document.getElementById("active-item-border");
      if (activeItemBorder) {
        activeItemBorder.style.top = bounding.top + "px";
        activeItemBorder.style.left = bounding.left + "px";
        activeItemBorder.style.width = bounding.width + "px";
        activeItemBorder.style.height = bounding.height + "px";
      }
    }
  };

  const positionDisplayImg = () => {
    const displayContainer = document.getElementById("display-container");
    if (displayContainer) {
      displayContainer.scrollTop =
        displayImages[activeItem]?.height * activeItem || 0;
    }
  };

  let autoScroll: NodeJS.Timeout | null = null;

  const setAutoScroll = () => {
    clearInterval(autoScroll as NodeJS.Timeout);
    autoScroll = setInterval(() => {
      setActiveItem((prevActiveItem) => {
        let newActiveItem = prevActiveItem + 1;
        if (newActiveItem > displayImages.length - 1) newActiveItem = 0;
        positionActiveItemBorder();
        positionDisplayImg();
        return newActiveItem;
      });
    }, intervalTime);
  };

  return (
    <>
      <Styled.ulLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/ezSFnAFi9hY/500x500"
            alt="cut citrus fruits. "
          />
          Lorem Ipsum
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/TIGDsyy0TK4/500x500"
            alt="sliced mango. "
          />
          Dolor Sit
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/TdDtTu2rv4s/500x500"
            alt="a bunch of blueberries. "
          />
          Amet Consectetur
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/eudGUrDdBB0/500x500"
            alt="a pineapple sitting on a table. "
          />
          Adipiscing Elit
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/eJH4f1rlG7g/500x500"
            alt="frozen raspberries. "
          />{" "}
          Nunc Tortor
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/24RUrLSW1HI/500x500"
            alt="a sliced strawberry. "
          />
          Metus Mollis
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/h5yMpgOI5nI/500x500"
            alt="an arrangement of assorted sliced fruits. "
          />
          Congue Sagittis
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/2TYrR2IB72s/500x500"
            alt="sliced watermelons. "
          />
          Vestibulum Et
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/1cWZgnBhZRs/500x500"
            alt="grapefruits, lemons, and pomegranates. "
          />
          Donec Eget
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/9aOswReDKPo/500x500"
            alt="half of an avocado. "
          />
          Maecenas et Justo
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/Nl7eLS8E2Ss/500x500"
            alt="half of a Styled.liListsme. "
          />
          Malesuada Quam
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/3HhXWJzG5Ko/500x500"
            alt="a single cherry with stem. "
          />
          Ultricies SolStyled.liListscitudin
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/fczCr7MdE7U/500x500"
            alt="a bunch of bananas. "
          />
          Gravida Nibh
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/uI900SItAyY/500x500"
            alt="three pears. "
          />
          Pellentesque Sapien
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/0AynZdszfz0/500x500"
            alt="a basket full of peaches next to a plate with sStyled.liListsced peaches. "
          />
          Suspendisse Vel
        </Styled.liLists>
        <Styled.liLists>
          {" "}
          <Styled.Images
            src="https://source.unsplash.com/C6JhUKs9q8M/500x500"
            alt="a bowl of avocados. "
          />
          Mauris Consectetur
        </Styled.liLists>
      </Styled.ulLists>
      <Styled.displayContainer>
        {displayImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            width={image.width}
            height={image.height}
          />
        ))}
      </Styled.displayContainer>
      <Styled.activeItemBorder></Styled.activeItemBorder>
    </>
  );
};

export default Hero;
