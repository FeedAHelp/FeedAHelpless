import React from "react";
import { Grid } from "@mui/material";
import Ingredients from "../../ingredients/Ingredients";
import DeshiMenu from "../../deshiMenus/DeshiMenus";
import { Styled } from "./DeshiMenuIngredients.styled";

const DeshiMenuIngredients = () => {
  return (
    <Styled.Splitter>
      <Styled.First>
        <Ingredients />
      </Styled.First>
      <Styled.Separator></Styled.Separator>
      <Styled.Second>
        <DeshiMenu />
      </Styled.Second>
      {/*  <Grid item xs={12} md={4}>
        <Ingredients />
      </Grid>
      <Grid item xs={12} md={8}>
        <DeshiMenu />
      </Grid> */}
    </Styled.Splitter>
  );
};

export default DeshiMenuIngredients;
