import React, { useState } from "react";
import { Styled } from "./DeshiMenus.styled";
import StickyBox from "react-sticky-box";
import IngredientSearchInput from "~/ui/components/elements/IngredientSearchInput/IngredientSearchInput";
import DeshiSocial from "./DeshiSocial";
import DeshiMenuCaptions from "./DeshiMenuCaption";
import Link from "next/link";
import { items } from "./data";
import { ic_info_outline } from "react-icons-kit/md/ic_info_outline";
import { withBaseIcon } from "react-icons-kit";

const DeshiMenus = () => {
  const [donateAmount, setDonateAmount] = useState(100);

  const SideIconContainer = withBaseIcon({ size: 25 });

  return (
    <div className="customScrollBar mb-2 h-96 w-full overflow-auto">
      <div className="relitive container">
        <div className="row">
          <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 99 }}>
            <div>
              <form>
                <IngredientSearchInput />
              </form>
            </div>
          </StickyBox>
          <>
            <Styled.DeshiGrid>
              {items.map((item, index) => {
                return (
                  <Styled.Container key={index}>
                    <Styled.Header>
                      <Styled.Heading>
                        <Styled.Logo
                          src="https://www.pngkey.com/png/full/366-3662220_hot-and-spicy-chicken-biryani.pnghttps://s5.postimg.cc/j9r8yf9gn/sws1.pnghttps://s5.postimg.cc/wy79025cz/nike_Logo_White.png"
                          alt=""
                        />
                        <Styled.Title>
                          Chicken<b>BIRANY</b>
                        </Styled.Title>
                        {/* <DeshiMenuCaptions /> */}
                      </Styled.Heading>
                      <DeshiSocial />
                    </Styled.Header>
                    <Styled.Body>
                      <Styled.InsideContainer>
                        <div className="icon">
                          <SideIconContainer icon={ic_info_outline} />
                        </div>
                        <div className="contents"></div>
                      </Styled.InsideContainer>
                      <Styled.ElWrapper>
                        <Styled.BoxDown>
                          <Styled.HeaderBg>
                            <Styled.HeaderBgInner></Styled.HeaderBgInner>
                          </Styled.HeaderBg>
                          <Styled.Cart>
                            <Styled.DonateAmount>
                              ${donateAmount}
                            </Styled.DonateAmount>
                            <Styled.QtyInput>
                              <Styled.Slider>
                                <Styled.SliderOutput>100</Styled.SliderOutput>
                                <Styled.SliderRange
                                  type="range"
                                  min="100"
                                  max="10000"
                                  value="100"
                                  step="50"
                                  oninput="move()"
                                  id="range"
                                />
                              </Styled.Slider>
                            </Styled.QtyInput>
                          </Styled.Cart>
                        </Styled.BoxDown>
                        <Styled.DonateButton>
                          <Styled.DonateButtonIcon>
                            <Styled.DeshiShareIcon
                              src="https://cdn.sanity.io/images/s98tqz9i/production/caf473f4c94fbb175ba834421beb4ef363bc142d-3144x3026.png"
                              width={30}
                              height={30}
                              alt={"feedahelpLogo"}
                              className="object-cover"
                            />
                          </Styled.DonateButtonIcon>
                        </Styled.DonateButton>
                      </Styled.ElWrapper>
                    </Styled.Body>
                  </Styled.Container>
                );
              })}
            </Styled.DeshiGrid>
          </>
        </div>
      </div>
    </div>
  );
};

export default DeshiMenus;
