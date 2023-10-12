import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { fetchIngredients } from "~/utils/cms/fetchIngredients";
import { urlForThumbnail } from "~/utils/cms/imageProcess";
import IngredientCheckbox from "~/ui/components/elements/IngredientCheckbox/IngredientCheckbox";
import IngredientSearchInput from "~/ui/components/elements/IngredientSearchInput/IngredientSearchInput";
import { getMethod } from "~/utils/api/getMethod";
import FuzzySearch from "fuzzy-search";
import { Styled } from "./Ingredients.styled";

const Ingredients = () => {
  const [ingredientsCMS, setIngredientsCMS] = useState<any[]>([]);
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [searchedIngredients, setSearchedIngredients] = useState<any[]>([]);
  const IterableIngredients =
    searchedIngredients.length > 0 ? searchedIngredients : ingredients;

  useEffect(() => {
    const getIngredientsCMS = async () => {
      try {
        const ingredientsData = await fetchIngredients();
        setIngredientsCMS(ingredientsData);
      } catch (error) {
        console.error(error);
      }
    };
    getIngredientsCMS();
  }, []);

  useEffect(() => {
    const getIngredientsDB = async () => {
      try {
        const { data } = await getMethod("ingredient/all", "");
        setIngredients(data);
        setSearchedIngredients(data);
      } catch (error) {
        console.error(error);
      }
    };
    getIngredientsDB();
  }, []);

  function name2Image(name: string) {
    const foundIngredient = ingredientsCMS.find((i) => i.englishName === name);
    foundIngredient &&
      console.log(
        "Its the Ingredients:",
        urlForThumbnail(foundIngredient.image)
      );
    return foundIngredient ? urlForThumbnail(foundIngredient.image) : "";
  }

  function searchIngredient(searchTerm: string): void {
    const searcher = new FuzzySearch(ingredients, ["name"], {
      caseSensitive: false,
    });
    const searchResult = searcher.search(searchTerm);
    setSearchedIngredients(searchResult);
  }

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
            <Styled.IngGrid>
              {IterableIngredients.map((ingredient) => (
                <Styled.IngGridItem
                  key={ingredient.id}
                  className="relative flex cursor-pointer justify-center rounded-full"
                >
                  <IngredientCheckbox
                    id={ingredient.id}
                    imgSrc={name2Image(ingredient.name)}
                    imgAlt={ingredient.name}
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
