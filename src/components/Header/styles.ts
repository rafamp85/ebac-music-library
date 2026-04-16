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

const HeaderSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export {
  HeaderTitle,
  HeaderSection,
}