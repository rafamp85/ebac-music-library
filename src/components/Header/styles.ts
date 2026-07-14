import styled from "styled-components";

const HeaderTitle = styled.h1`
    font-weight: 700;
    cursor: pointer;
    color: white;

    &:hover {
        color: cadetblue;
        text-decoration: underline;
    }
`;

const HeaderNav = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const HeaderLinkButton = styled.button`
    border: 1px solid cadetblue;
    background: transparent;
    color: white;
    padding: 8px 14px;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 700;

    &:hover {
        color: cadetblue;
        border-color: white;
    }
`;

const HeaderSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export {
  HeaderTitle,
  HeaderSection,
  HeaderNav,
  HeaderLinkButton,
}