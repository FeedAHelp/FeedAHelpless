import { Styled } from "./Logo.styled";

const Logo = () => {
  return (
    <Styled.Logo>
      <div className="container">
        <svg viewBox="0 0 250 250">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="80%">
              f
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
      <Styled.LogoText>FeedAHelp</Styled.LogoText>
    </Styled.Logo>
  );
};

export default Logo;
