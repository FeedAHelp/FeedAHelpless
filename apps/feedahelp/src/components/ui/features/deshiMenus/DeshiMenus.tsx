import React from "react";
import { Styled } from "./DeshiMenus.styled";
import StickyBox from "react-sticky-box";
import IngredientSearchInput from "~/ui/components/elements/IngredientSearchInput/IngredientSearchInput";
import DeshiSocial from "./DeshiSocial";
import DeshiMenuCaptions from "./DeshiMenuCaption";

const DeshiMenus = () => {
  return (
    <div className="mb-2 h-96 w-full overflow-auto">
      <div className="relitive container">
        <div className="row">
          <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 9999 }}>
            <div>
              <form>
                <IngredientSearchInput />
              </form>
            </div>
          </StickyBox>
          <div className="pt-10">
            <div className="grid grid-cols-3 gap-5">
              <Styled.Container>
                <Styled.Header>
                  <Styled.Logo
                    src="https://www.pngkey.com/png/full/366-3662220_hot-and-spicy-chicken-biryani.pnghttps://s5.postimg.cc/j9r8yf9gn/sws1.pnghttps://s5.postimg.cc/wy79025cz/nike_Logo_White.png"
                    alt=""
                  />
                  <Styled.Title>
                    <h2>Chicken<b>BIRANY</b></h2>
                    <DeshiMenuCaptions />
                  </Styled.Title>
                  <DeshiSocial />
                </Styled.Header>
                <Styled.Body>
                    <Styled.Price>
                      USD <b>23,453</b>
                    </Styled.Price>
                  <Styled.Rating></Styled.Rating>
                </Styled.Body>
              </Styled.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeshiMenus;
