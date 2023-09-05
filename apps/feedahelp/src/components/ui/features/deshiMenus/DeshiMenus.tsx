import React from "react";
import { Styled } from "./DeshiMenus.styled";
import StickyBox from "react-sticky-box";
import IngredientSearchInput from "~/ui/components/elements/IngredientSearchInput/IngredientSearchInput";
import DeshiSocial from "./DeshiSocial";
import DeshiMenuCaptions from "./DeshiMenuCaption";
import { items } from "./data";

const DeshiMenus = () => {
  return (
    <div className="mb-2 h-96 w-full overflow-auto">
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
                      <Styled.Price>
                        USD <b>23,453</b>
                      </Styled.Price>
                      <Styled.Rating></Styled.Rating>
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
