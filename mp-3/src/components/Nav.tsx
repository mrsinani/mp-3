import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: #249E94;
    overflow: hidden;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledList = styled.ul`
    padding-left: 0;
    margin: 0;
    list-style: none;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`;

const StyledListItem = styled.li`
    border: 0.5vw solid #0C7779;
    width: 80%;
    margin: 5% auto;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 750px) {
        width: 14%;
        padding: 1%;
        margin: 1%;
    }
`;

const StyledLink = styled(Link)`
    font-size: calc(2px + 2vw);
    color: #005461;
    text-decoration: none;
    white-space: nowrap;
    @media screen and (max-width: 750px) {
        font-size: calc(2px + 1.5vw);
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem><StyledLink to="/">Home</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/education.html">Education</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/experiences.html">Experiences</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/skills.html">Skills</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/projects.html">Projects</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/contact.html">Contact</StyledLink></StyledListItem>
            </StyledList>
        </StyledNav>
    );
}