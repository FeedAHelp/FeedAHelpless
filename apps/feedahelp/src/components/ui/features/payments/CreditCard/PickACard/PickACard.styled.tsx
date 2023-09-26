import styled from "styled-components";

const PickACard = styled.div`
    display: flex;
    align-items: center;
`;

const RadioTileGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const InputRadioLite = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 2px solid #079ad9;
    border-radius: 5px;
    padding: 5px;
    transition: transform 300ms ease;
`;

const InputRadio = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    cursor: pointer;

    &:checked + ${InputRadioLite} {
        background-color: #079ad9;
        border: 2px solid #079ad9;
        color: white;
        transform: scale(1.1, 1.1);
      }
`;

export const Styled = {
  PickACard,
  RadioTileGroup,
  InputContainer,
  InputRadio,
  InputRadioLite
};
