import styled from "@emotion/styled";

const PaymentWrapper = styled.div`
    display: flex;
    padding-top: 20px;
`;

const TabContainer = styled.div`
    padding: 16px;
    width: 100%;
    display: flex;
	margin: 10px;
	border-radius: 16px;
    background-color: var(--white);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const TabsUL = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #F0F0F0;
    list-style-type: none;
    padding-right: 16px;
    gap: 8px;

    a {
        position: relative;
        display: flex;
        text-decoration: none;
        width: 100%;
        font-size: 14px;
        font-weight: 600;
        color: var(--gray-mid);
        text-align: left;
        border-radius: 8px;
        justify-content: start;
        padding: 12px;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease-in-out;

        img {
            height: 20px;
            width: 20px;
        }

        &:hover {
            font-weight: 700;
            outline: none;
            color: white;
            background-color: #3e3e3e;
        }

        img {
            stroke: #9D9D9D;
        }

        &:hover img {
            stroke: #fff;
        }
    }
`;

const TabsContentWrapper = styled.div`
    overflow-y: hidden;
    overflow-x: auto;
    height: 300px;
    transition: all 0.45s ease-in-out;
    padding: 0 16px;
`;

const TabsContent = styled.section`
    font-size: 0.8rem;
    min-height: 300px;
    min-width: 240px;
    overflow-x: auto;
    transition: all 0.45s ease-in-out;

    h2 {
        color: #3e3e3e;
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 0px;
        margin-bottom: 8px;
    }
`;

export const Styled = {
    PaymentWrapper,
    TabContainer,
    TabsUL,
    TabsContentWrapper,
    TabsContent
};
