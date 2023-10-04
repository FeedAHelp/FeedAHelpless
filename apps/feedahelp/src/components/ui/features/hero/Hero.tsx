import React, { useRef, useState, useEffect } from "react";
import { Styled } from "./Hero.styled";
import { fetchHeroImages } from "~/utils/cms/fetchHeroImages";
import { urlForThumbnail } from "~/utils/cms/imageProcess";
import { useTranslation } from "next-i18next";

interface HeroImagesType {
  title: string;
  imgSrc: string;
}

const Hero = () => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const displayRef = useRef<HTMLDivElement | null>(null);
  const activeItemBorderRef = useRef<HTMLDivElement | null>(null);
  const displayImgsRef = useRef<(HTMLImageElement | null)[]>([]);
  const [heroImages, setHeroImages] = useState<HeroImagesType[]>([]);
  const { t } = useTranslation("common");

  console.log(t("Shared Meal"));

  const getHeroImages = async () => {
    try {
      const data = await fetchHeroImages();
      setHeroImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHeroImages();
  }, []);

  const intervalTime = 3000;
  const [activeItem, setActiveItem] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const list = listRef.current;

    const display = document.createElement("div");
    display.id = "display-container";
    list?.appendChild(display);

    const activeItemBorder = document.createElement("div");
    activeItemBorder.id = "active-item-border";
    document.body.appendChild(activeItemBorder);

    positionActiveItemBorder();

    const handleResize = () => {
      positionActiveItemBorder();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(autoScrollRef.current as NodeJS.Timeout);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
  };

  let count = 0;
  const handleWheel = (e: React.WheelEvent) => {
    setIsScrolling(false);
    count++;

    if (e.deltaY > 0 && count > 5) {
      activeItem === 15 ? setActiveItem(0) : setActiveItem(activeItem + 1);
      count = 0;
    }

    if (e.deltaY < 0 && count > 5) {
      activeItem === 0 ? setActiveItem(15) : setActiveItem(activeItem - 1);
      count = 15;
    }
  };

  function disableScroll() {
    const scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.marginTop = `-${scrollPosition}px`;
  }

  function enableScroll() {
    const scrollPosition = parseInt(
      document.body.style.marginTop.replace("-", ""),
      10
    );
    document.body.style.position = "";
    document.body.style.marginTop = "";
    window.scrollTo(0, scrollPosition);
  }

  useEffect(() => {
    document.body.style.marginRight = isScrolling ? "0.9rem" : "0rem";
    isScrolling ? disableScroll() : enableScroll();
  }, [isScrolling]);

  useEffect(() => {
    positionActiveItemBorder();
  }, [activeItem]);

  useEffect(() => {
    positionDisplayImg();
    setActiveItem(0);
    setAutoScroll();
  }, []);

  const handleClick = (index: number) => {
    positionDisplayImg();
    setActiveItem(index);
    setAutoScroll();
  };

  const positionActiveItemBorder = () => {
    const bounding = listItemsRef.current[activeItem]?.getBoundingClientRect();
    if (activeItemBorderRef.current) {
      activeItemBorderRef.current.style.top = bounding?.top + "px";
      activeItemBorderRef.current.style.left = bounding?.left + "px";
      activeItemBorderRef.current.style.width = bounding?.width + "px";
      activeItemBorderRef.current.style.height = bounding?.height + "px";
    }
  };

  const positionDisplayImg = () => {
    if (displayRef.current) {
      displayRef.current.scrollTop = displayImgsRef.current[activeItem]
        ?.offsetTop as number;
    }
  };

  const setAutoScroll = () => {
    clearInterval(autoScrollRef.current as NodeJS.Timeout);
    autoScrollRef.current = setInterval(() => {
      listItemsRef.current[activeItem]?.classList.remove("active");
      let newActiveItem = activeItem + 1;
      if (newActiveItem > listItemsRef.current.length - 1) {
        newActiveItem = 0;
      } else if (newActiveItem < 0) {
        newActiveItem = listItemsRef.current.length - 1;
      }
      setActiveItem(newActiveItem);
      positionActiveItemBorder();
      positionDisplayImg();
    }, intervalTime);
  };
  setAutoScroll();

  return (
    <div>
      <Styled.ulLists
        ref={listRef}
        onWheel={handleWheel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {heroImages.map((item, index) => (
          <Styled.liLists
            key={index}
            onClick={() => handleClick(index)}
            isActive={activeItem === index ? true : false}
            ref={(element) => (listItemsRef.current[index] = element)}
          >
            <Styled.SideImages
              src={urlForThumbnail(item.image)}
              alt="hero-image"
              width={100}
              height={100}
            />
          </Styled.liLists>
        ))}
        <Styled.displayContainer ref={displayRef}>
          {heroImages.map((item, index) => {
            if (index === activeItem) {
              return (
                <div key={index}>
                  <Styled.converImage
                    src={urlForThumbnail(item.image)}
                    alt="hero-image"
                  />
                  <div className="absolute top-0">
                    <Styled.LogoImage
                      src={"/static/images/feedahelp/logo.png"}
                      alt="logo"
                      width={150}
                      height={50}
                      priority={true}
                    />
                    <Styled.ImageContentMobile>
                      {t(item.title)}
                    </Styled.ImageContentMobile>
                  </div>
                </div>
              );
            }
          })}
        </Styled.displayContainer>
      </Styled.ulLists>
    </div>
  );
};

export default Hero;
