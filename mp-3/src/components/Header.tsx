import styled from "styled-components";

const StyledHeader = styled.header`
    text-align: left;
    background-color: #005461;
    color: #FFFFFF;
    padding: 1%;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Danaid Sinani</h1>
            <p>
                Danaid's Resume | A website to showcase Danaid's career objectives and
                goals
            </p>
        </StyledHeader>
    );
}
