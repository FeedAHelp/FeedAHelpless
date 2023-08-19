import { Styled } from "./Hero.styled";

const Hero = () => {
  return (
    <div className="flex ">
      <div className=" bg-neutral-50">
        <h1 className="mt-16 w-32 py-10  ps-3 text-base font-semibold text-neutral-400 md:w-96 md:ps-14 md:text-3xl lg:text-5xl">
          <span className="mb-5 inline-block">Your Recipe,</span> <br />
          <span className="mb-5 inline-block">Our Expertise</span>
          <br />
          <span className="mb-5 inline-block">- We&rsquo;ll Bring </span>
          <br />
          <span className="mb-5 inline-block">Smiles</span>
        </h1>
      </div>
      <Styled.Background data-testid="hero-background" ></Styled.Background>
      
    </div>
  );
};

export default Hero;
