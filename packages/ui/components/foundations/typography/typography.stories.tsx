import type { Meta, Story } from "@storybook/react";

import type { TypographyProps } from "../../elements/Typography";
import { Typography } from "../../elements/Typography";
import { typography } from ".";

export default {
  title: "Foundation/Typography",
  parameters: {
    docs: {
      description: {
        component: "Lists the available typography variants.",
      },
    },
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export function HeadingVariants() {
  return (
    <div>
      <Typography spacingBottom={0.25} tag="h1" variant="h1WideBlackSerif">
        Heading 1 - Wide - Black Serif (Note: Only to be used on Homepage Hero!)
      </Typography>
      <Typography spacingBottom={0.25} tag="h1" variant="h1BigBoldSerif">
        Heading 1 - Big - Bold Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h1" variant="h1BigLightSerif">
        Heading 1 - Big - Light Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h1" variant="h1BoldSerif">
        Heading 1 - Bold Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h1" variant="h1LightSerif">
        Heading 1 - Light Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h2" variant="h2BoldSerif">
        Heading 2 - Bold Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h2" variant="h2LightSerif">
        Heading 2 - Light Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h3" variant="h3BoldSerif">
        Heading 3 - Bold Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h3" variant="h3Sans">
        Heading 3 - Sans
      </Typography>
      <Typography spacingBottom={0.25} tag="h4" variant="h4BoldSerif">
        Heading 4 - Bold Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h4" variant="h4LightSerif">
        Heading 4 - Light Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h4" variant="h4Sans">
        Heading 4 - Sans
      </Typography>
      <Typography spacingBottom={0.25} tag="h5" variant="h5BoldSerif">
        Heading 5 - Bold Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h5" variant="h5Sans">
        Heading 5 - Sans
      </Typography>
      <Typography spacingBottom={0.25} tag="h6" variant="h6BoldSerif">
        Heading 6 - Bold Serif
      </Typography>
      <Typography spacingBottom={0.25} tag="h6" variant="h6BoldSans">
        Heading 6 - Bold Sans
      </Typography>
    </div>
  );
}

export function BodyVariants() {
  return (
    <>
      <div>
        <Typography spacingBottom={0.25} tag="p" variant="bodyLarge">
          Body - Large (aka P-Large in design)
        </Typography>
        <Typography spacingBottom={0.25} tag="p" variant="bodyMedium">
          Body - Medium (aka P-Default in design)
        </Typography>
        <Typography spacingBottom={0.25} tag="p" variant="bodyMediumBoldSans">
          Body - Medium - Bold Sans (aka bolded P-Default in design)
        </Typography>
        <Typography spacingBottom={0.25} tag="p" variant="bodySmall">
          Body - Small (aka P-Small in design)
        </Typography>
        <Typography spacingBottom={0.25} tag="p" variant="bodySmallBoldSans">
          Body - Small - Bold Sans (aka Label in design)
        </Typography>
        <Typography spacingBottom={0.25} tag="p" variant="bodyExtraSmall">
          Body - Extra Small (aka P-Caption in design)
        </Typography>
        <Typography
          spacingBottom={0.25}
          tag="p"
          variant="bodyExtraSmallBoldSans"
        >
          Body - Extra Small - Bold Sans (aka Label-Small in design)
        </Typography>
        <Typography
          spacingBottom={0.25}
          tag="p"
          variant="bodyExtraSmallBoldSerif"
        >
          Body - Extra Small - Bold Serif (aka CTA-Small in design)
        </Typography>
        <Typography
          spacingBottom={0.25}
          tag="p"
          variant="bodyExtraExtraSmallBoldSans"
        >
          Body - Extra Extra Small - Bold Sans (not named in design)
        </Typography>
      </div>
    </>
  );
}

const characterSets = {
  ascii:
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
  latin1:
    " ¡¢£¤¥¦§¨©ª«¬\n®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
  latinExtendedA:
    "ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſ",
  latinExtendedB:
    "ƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏ",
  latinExendedAdditional: "ḂḃḊḋḞḟṀṁṖṗṠṡṪṫẀẁẂẃẄẅẛỲỳ",
};

type CharacterSetProps = { characterSet: keyof typeof characterSets } & Pick<
  TypographyProps,
  "variant"
>;

export const CharacterSet: Story<CharacterSetProps> = ({
  characterSet,
  variant,
}) => (
  <Typography tag="div" variant={variant}>
    {characterSets[characterSet].split("").map((char) => (
      <span key={char} style={{ display: "inline-block", margin: "0.5rem" }}>
        {char}
      </span>
    ))}
  </Typography>
);
CharacterSet.args = { characterSet: "ascii", variant: "bodyMedium" };
CharacterSet.argTypes = {
  characterSet: {
    control: {
      type: "select",
      options: Object.keys(characterSets),
    },
  },
  variant: {
    control: {
      type: "select",
      options: Object.entries(typography)
        .filter(([, value]) => typeof value === "object")
        .map(([key]) => key),
    },
  },
};
