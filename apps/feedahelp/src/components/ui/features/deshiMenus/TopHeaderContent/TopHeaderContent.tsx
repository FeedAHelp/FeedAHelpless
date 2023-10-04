import React, { useState } from "react";
import { Styled } from "./TopHeaderContent.styled";
import DeshiSocial from "./DeshiSocial";
import { star } from "react-icons-kit/fa/star";
import { withBaseIcon } from "react-icons-kit";
import { urlForThumbnail } from "~/utils/cms/imageProcess";

type TopHeaderprops = {
  menuName: string;
  images: {
    asset: {
      _ref: string;
    };
  };
  imageIngredient: {
    asset: {
      _ref: string;
    };
  };
  ingredients: {
    name: string;
  }[];
  rating: string;
};

const TopHeaderContent = ({
  menuName,
  images,
  imageIngredient,
  ingredients,
  rating,
}: TopHeaderprops) => {
  const StarIcon = withBaseIcon({ size: 25 });

  return (
    <Styled.Header>
      <Styled.Heading>
        <Styled.deshiMenuImage
          src={urlForThumbnail(images.asset._ref)}
          alt={menuName}
        />
        <Styled.Title>{menuName}</Styled.Title>
        <Styled.BackgroundImage
          src={urlForThumbnail(imageIngredient.asset._ref)}
          alt="bg"
          width={150}
          height={150}
        />
      </Styled.Heading>
      <Styled.MenuRating>
        <h2>{rating}</h2>
        <StarIcon icon={star} />
      </Styled.MenuRating>
      <DeshiSocial />
    </Styled.Header>
  );
};

export default TopHeaderContent;
