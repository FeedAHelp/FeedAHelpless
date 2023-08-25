import { Styled } from "./Hero.styled";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="heroTextWrapper">
        <h1 className="heroText">
          <span className="mb-5 inline">Your Recipe,</span>
          <br className="hidden md:block" />
          <span className="mb-5 inline">Our Expertise</span>
          <br className="hidden md:block" />
          <span className="mb-5 inline">- We&rsquo;ll Bring </span>
          <br className="hidden md:block" />
          <span className="mb-5 inline">Smiles</span>
        </h1>
      </div>
      <Styled.Background data-testid="hero-background"></Styled.Background>
    </div>
  );
};

export default Hero;
