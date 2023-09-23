import React from "react";
import { Styled } from "./DeshiMenus.styled";
import StickyBox from "react-sticky-box";
import IngredientSearchInput from "~/ui/components/elements/IngredientSearchInput/IngredientSearchInput";
import { items } from "./data";
import TopHeaderContent from "./TopHeaderContent/TopHeaderContent";
import ExtraInformation from "./ExtraInformation/ExtraInformation";
import MainContent from "./MainContent/MainContent";
import CTA from "./Cta/Cta";

const DeshiMenus = () => {
  return (
    <div className="customScrollBar mb-2 h-[34rem] w-full overflow-auto">
      <div className="relitive container">
        <div className="row">
          <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 99 }}>
            <div>
              <form>
                <IngredientSearchInput id="deshi_menu_search" />
              </form>
            </div>
          </StickyBox>
          <>
            <Styled.DeshiGrid>
              {items.map((item, index) => {
                return (
                  <Styled.Container key={index}>
                    {/* TOP HEADER CONTENT */}
                    <TopHeaderContent />
                    <Styled.Body>
                      {/* EXTRA CONTENT */}
                      <ExtraInformation />
                      {/* MAIN CONTENT */}
                      <MainContent />
                      {/* CTA */}
                      <CTA />
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
