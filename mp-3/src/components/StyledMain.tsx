import styled from "styled-components";

const StyledMain = styled.main`
    height: 100vh;
    width: 70%;
    text-align: center;
    font-size: calc(2px + 2vw);
    background-color: #E0F5F0;
    padding: 1% 2%;

    * {
        margin: 2% 0;
    }

    img {
        max-width: 40%;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 100vh;
    }
`;

export default StyledMain;
