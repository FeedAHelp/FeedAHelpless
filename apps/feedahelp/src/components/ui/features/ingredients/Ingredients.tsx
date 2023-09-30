import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { fetchIngredients } from "~/utils/cms/fetchIngredients";
import { urlForThumbnail } from "~/utils/cms/imageProcess";
import IngredientCheckbox from "~/ui/components/elements/IngredientCheckbox/IngredientCheckbox";
import IngredientSearchInput from "~/ui/components/elements/IngredientSearchInput/IngredientSearchInput";
import { getMethod } from "~/utils/api/getMethod";
import FuzzySearch from "fuzzy-search";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [searchedIngredients, setSearchedIngredients] = useState<any[]>([]);

  const getIngredients = async () => {
    try {
      const { data } = await getMethod("ingredient/all", "");
      setIngredients(data);
      setSearchedIngredients(data);
    } catch (error) {
      console.error(error);
    }
  };

  function searchIngredient(searchTerm: string): void {
    const searcher = new FuzzySearch(ingredients, ["name"], {
      caseSensitive: false,
    });

    const searchResult = searcher.search(searchTerm);

    setSearchedIngredients(searchResult);
  }

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className="customScrollBar mb-2 h-[34rem] w-full overflow-auto">
      <div className="relitive container">
        <div className="row">
          <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 99 }}>
            <div>
              <div>
                <IngredientSearchInput
                  id="ingredientSearchInput"
                  searchIngredient={searchIngredient}
                />
              </div>
            </div>
          </StickyBox>
          <div className="pt-10">
            <div className="grid grid-cols-3 gap-5">
              {searchedIngredients.map((ingredient) => (
                <div
                  key={ingredient.id}
                  className="relative flex cursor-pointer justify-center rounded-full"
                >
                  <IngredientCheckbox
                    id={ingredient.id}
                    //todo: need to decide how to resolve this
                    //imgSrc={urlForThumbnail(ingredient.imageName)}
                    imgSrc=""
                    imgAlt={ingredient.name}
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
