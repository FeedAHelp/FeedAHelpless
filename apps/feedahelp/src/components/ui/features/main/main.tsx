import { Grid } from "@mui/material";
import React from "react";
import Hero from "../hero/Hero";
import FeedAHelpCounter from "../fahCounter/FAHCounter";
import Ingredients from "../ingredients/Ingredients";
import DeshiMenu from "../deshiMenus/DeshiMenus";
import Sponsors from "../sponsors/Sponsors";

export const MainPage = () => {
  return (
    <div className="mx-2 pt-16">
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <Hero />
        </Grid>
        <Grid item xs={12} md={12}>
          <FeedAHelpCounter />
        </Grid>
        <Grid item xs={12} md={4}>
          <Ingredients />
        </Grid>
        <Grid item xs={12} md={8}>
          <DeshiMenu />
        </Grid>
        <Grid item xs={12} md={12}>
          <Sponsors />
        </Grid>
      </Grid>
    </div>
  );
};
