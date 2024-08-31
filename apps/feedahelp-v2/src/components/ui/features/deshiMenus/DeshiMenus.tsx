import React, { useState, useEffect } from "react";
import { Styled } from "./DeshiMenus.styled";
import StickyBox from "react-sticky-box";
import IngredientSearchInput from "~/ui/components/elements/IngredientSearchInput/IngredientSearchInput";
import TopHeaderContent from "./TopHeaderContent/TopHeaderContent";
import ExtraInformation from "./ExtraInformation/ExtraInformation";
import MainContent from "./MainContent/MainContent";
import CTA from "./Cta/Cta";
import { fetchDeshiMenus } from "~/utils/cms/fetchDeshiMenus";
import Modal from "~/ui/components/elements/Modal/GenericModal";
import Payment from "../payments/Payment";

type DeshiMenuProps = {
  englishName: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  Ingredients: {
    name: string;
  }[];
  isPublished: boolean;
};

const DeshiMenus = () => {
  const [DeshiMenus, setDeshiMenus] = useState<DeshiMenuProps[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = (): void => {
    setModalOpen(false);
  };

  const openModal = (): void => {
    setModalOpen(true);
  };

  const getDeshiMenus = async () => {
    try {
      const DeshiMenus: DeshiMenuProps[] = await fetchDeshiMenus();
      setDeshiMenus(DeshiMenus);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDeshiMenus();
  }, []);

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
              {DeshiMenus.map((_deshiMenu, index) => {
                if (_deshiMenu.isPublished) {
                  return (
                    <Styled.Container key={index}>
                      <TopHeaderContent
                        menuName={_deshiMenu.englishName}
                        images={_deshiMenu.image}
                        imageIngredient={_deshiMenu.imageIngredient}
                        ingredients={_deshiMenu.Ingredients}
                        rating={_deshiMenu.rating}
                      />
                      <Styled.Body>
                        {/* EXTRA CONTENT */}
                        <ExtraInformation />
                        {/* MAIN CONTENT */}
                        <MainContent mainContents={_deshiMenu.mainContents} />
                        {/* CTA */}
                        <CTA
                          menuNameId={_deshiMenu._id}
                                  menuPrice={_deshiMenu.pricePerPerson}
                                  openModal={openModal}
                                  closeModal={closeModal}
                        />
                      </Styled.Body>
                    </Styled.Container>
                  );
                }
              })}
            </Styled.DeshiGrid>
            <Modal isOpen={modalOpen} closeModal={closeModal}>
              <div className="payment-modal-dimention">
                <Payment />
              </div>
            </Modal>
          </>
        </div>
      </div>
    </div>
  );
};

export default DeshiMenus;
