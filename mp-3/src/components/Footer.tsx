import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #005461;
    color: #FFFFFF;
    padding: 1%;
    text-align: center;
    a {
        color: #FFFFFF;
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All right reserved by Danaid Sinani &copy;{" "}
                <Link to="https://danaidsinani.com" target="_blank">Credits</Link>
            </p>
        </StyledFooter>
    );
}