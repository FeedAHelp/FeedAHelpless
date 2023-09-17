import styled from "@emotion/styled";

const Splitter = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
`;

const First = styled.div`
  background-color: #fff;
  width: 20%;
  height: 100%;
  min-width: 10px;
`;

const Separator = styled.div`
  cursor: col-resize;
  background-color: #aaa;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='30'><path d='M2 0 v30 M5 0 v30 M8 0 v30' fill='none' stroke='black'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
  width: 10px;
  height: 100%;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Second = styled.div`
  background-color: #fff;
  width: 80%;
  height: 100%;
  min-width: 10px;
`;

export const Styled = {
  Splitter,
  First,
  Separator,
  Second,
};
