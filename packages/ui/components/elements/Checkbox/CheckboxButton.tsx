import { Styled } from "./CheckboxButton.styled";
export type CloseButtonProps = {
  chackboxTitle: string;
};

export function CheckboxButton({chackboxTitle}: CloseButtonProps) {
  return (
    <Styled.CheckboxButton>
      <input id="wp-comment-cookies-consent" name="FAHCheckbox" type="checkbox" value="yes" />
      <label htmlFor="wp-comment-cookies-consent">{chackboxTitle}</label>
    </Styled.CheckboxButton>
  );
}
