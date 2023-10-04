import React, { useState } from "react";
import Ingredients from "../../ingredients/Ingredients";
import DeshiMenu from "../../deshiMenus/DeshiMenus";
import { Styled } from "./DeshiMenuIngredients.styled";

const DeshiMenuIngredients = () => {
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const separator = e.currentTarget;
    const first = separator.previousSibling as HTMLDivElement;
    const second = separator.nextSibling as HTMLDivElement;

    const md = {
      e,
      offsetLeft: separator.offsetLeft,
      firstWidth: first.offsetWidth,
      secondWidth: second.offsetWidth,
    };

    const onMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - md.e.clientX;
      const newFirstWidth = Math.min(
        Math.max(md.firstWidth + delta, 300),
        md.firstWidth + md.secondWidth - 400
      );

      separator.style.left = md.offsetLeft + delta + "px";
      first.style.width = newFirstWidth + "px";
      second.style.width =
        md.firstWidth + md.secondWidth - newFirstWidth + "px";
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <Styled.Splitter>
      <Styled.First>
        <Ingredients />
      </Styled.First>
      <Styled.Separator onMouseDown={onMouseDown}>
        <Styled.IngredientSelected>Selected?</Styled.IngredientSelected>
        <Styled.IngredientCount>0</Styled.IngredientCount>
      </Styled.Separator>
      <Styled.Second>
        <DeshiMenu />
      </Styled.Second>
    </Styled.Splitter>
  );
};

export default DeshiMenuIngredients;
