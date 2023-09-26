import styled from "@emotion/styled";

const PaymentWrapper = styled.div`
  display: flex;
  padding-top: 20px;
`;

const TabContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  margin: 0.625rem;
  border-radius: 1rem;
  background-color: var(--white);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0.4375rem 1.8125rem 0rem;
`;

const TabsUL = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 0.0625rem solid #f0f0f0;
  list-style-type: none;
  padding-right: 1rem;
  gap: 0.5rem;

  a {
    position: relative;
    display: flex;
    text-decoration: none;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--gray-mid);
    text-align: left;
    border-radius: 0.5rem;
    justify-content: start;
    padding: 0.75rem;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease-in-out;

    img {
      height: 1.25rem;
      width: 1.25rem;
    }

    &:hover {
      font-weight: 700;
      outline: none;
      color: white;
      background-color: #3e3e3e;
    }

    img {
      stroke: #9d9d9d;
    }

    &:hover img {
      stroke: #fff;
    }
  }
`;

const TabsContentWrapper = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  height: 28.125rem;
  transition: all 0.45s ease-in-out;
  padding: 0 1rem;
`;

const TabsContent = styled.section`
  font-size: 0.8rem;
  min-height: 18.75rem;
  min-width: 15rem;
  overflow-x: auto;
  transition: all 0.45s ease-in-out;

  h2 {
    color: #3e3e3e;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

export const Styled = {
  PaymentWrapper,
  TabContainer,
  TabsUL,
  TabsContentWrapper,
  TabsContent,
};
