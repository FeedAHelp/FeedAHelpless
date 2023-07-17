import type { Meta } from "@storybook/react";

import { Heading } from "../../elements/Heading";
import { fontCombinations, fontFamilies, fontWeights } from ".";

export default {
  title: "Foundation/Fonts",
  parameters: {
    docs: {
      description: {
        component: "Lists the available fonts",
      },
    },
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export function FontFamilies() {
  return (
    <>
      <div>
        <ol>
          {Object.entries(fontFamilies).map(([key, value], i) => (
            <li key={i} style={{ fontFamily: value }}>
              {key} = {value}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export function FontWeights() {
  const sansFontCombinations = fontCombinations.filter((fontCombination) => {
    return fontCombination.fontFamily === fontFamilies.sansWithoutFallback;
  });
  const availableSansFontWeights: Array<number> = [];

  sansFontCombinations.forEach((sansFontCombination) => {
    availableSansFontWeights.push(sansFontCombination.fontWeight);
  });

  const serifFontCombinations = fontCombinations.filter((fontCombination) => {
    return fontCombination.fontFamily === fontFamilies.serifWithoutFallback;
  });
  const availableSerifFontWeights: Array<number> = [];

  serifFontCombinations.forEach((serifFontCombination) => {
    availableSerifFontWeights.push(serifFontCombination.fontWeight);
  });

  return (
    <>
      <div>
        <Heading spacingBottom={0.5} tag="h3" variant="h3BoldSerif">
          Font Weights
        </Heading>
        <Heading spacingBottom={0.5} tag="h4" variant="h4Sans">
          AllTogetherSans
        </Heading>
        <ol>
          {Object.entries(fontWeights).map(([key, value], i) => {
            if (availableSansFontWeights.indexOf(value) !== -1) {
              return (
                <li key={i} style={{ fontWeight: value }}>
                  <span
                    style={{ fontFamily: "AllTogetherSans", fontWeight: value }}
                  >
                    {key} = {value}
                  </span>
                </li>
              );
            }
          })}
        </ol>
        <br />
        <Heading spacingBottom={0.5} tag="h4" variant="h4BoldSerif">
          AllTogetherSerif
        </Heading>
        <ol>
          {Object.entries(fontWeights).map(([key, value], i) => {
            if (availableSerifFontWeights.indexOf(value) !== -1) {
              return (
                <li key={i} style={{ fontWeight: value }}>
                  <span
                    style={{
                      fontFamily: "AllTogetherSerif",
                      fontWeight: value,
                    }}
                  >
                    {key} = {value}
                  </span>
                </li>
              );
            }
          })}
        </ol>
      </div>
    </>
  );
}

export function FontCombinations() {
  return (
    <>
      <div>
        <Heading spacingBottom={0.5} tag="h3" variant="h3BoldSerif">
          Font Combinations
        </Heading>
        <ol>
          {Object.entries(fontCombinations).map(([_key, value]) => (
            <li key={_key}>
              <span
                style={{
                  fontFamily: value.fontFamily,
                  fontWeight: value.fontWeight,
                }}
              >
                {value.fontFamily}, font weight {value.fontWeight} (
                {value.fontWeightName})
              </span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
