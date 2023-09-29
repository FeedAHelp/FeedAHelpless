import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { fetchIngredients } from "~/utils/cms/fetchIngredients";
import { urlForThumbnail } from "~/utils/cms/imageProcess";
import IngredientCheckbox from "~/ui/components/elements/IngredientCheckbox/IngredientCheckbox";
import IngredientSearchInput from "~/ui/components/elements/IngredientSearchInput/IngredientSearchInput";
import { Styled } from "./Ingredients.styled";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    try {
      const socialData = await fetchIngredients();
      setIngredients(socialData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className="customScrollBar mb-2 h-[34rem] w-full overflow-auto">
      <div className="relitive container">
        <div className="row">
          <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 99 }}>
            <div>
              <form>
                <IngredientSearchInput id="ingredient_srearch" />
              </form>
            </div>
          </StickyBox>
          <div className="pt-10">
            <Styled.IngGrid>
              {ingredients.map((ingredient, index) => (
                <Styled.IngGridItem
                  key={index}
                  className="relative flex cursor-pointer justify-center rounded-full"
                >
                  <IngredientCheckbox
                    id={ingredient.englishName}
                    imgSrc={urlForThumbnail(ingredient.image)}
                    imgAlt={ingredient.englishName}
                  />
                </Styled.IngGridItem>
              ))}
            </Styled.IngGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
