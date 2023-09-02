import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { fetchIngredients } from "~/utils/cms/fetchIngredients";
import { urlForThumbnail } from "~/utils/cms/imageProcess";
import IngredientCheckbox from "~/ui/components/elements/IngredientCheckbox/IngredientCheckbox";
import IngredientSearchInput from "~/ui/components/elements/IngredientSearchInput/IngredientSearchInput";

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
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="relative flex cursor-pointer justify-center rounded-full"
                >
                  <IngredientCheckbox
                    id={ingredient.englishName}
                    imgSrc={urlForThumbnail(ingredient.image)}
                    imgAlt={ingredient.englishName}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
