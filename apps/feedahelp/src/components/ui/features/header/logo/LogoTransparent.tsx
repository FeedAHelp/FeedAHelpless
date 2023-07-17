import { Styled } from "./Logo.styled";

const LogoTransparent = () => {
  return (
    <Styled.LogoTransparent>
      <div className="container">
        <svg viewBox="0 0 250 250">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="80%">
              p
            </text>
          </symbol>

          <g className="g-ants">
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
          </g>
        </svg>
      </div>
      <Styled.LogoText>partybroz</Styled.LogoText>
    </Styled.LogoTransparent>
  );
};

export default LogoTransparent;
