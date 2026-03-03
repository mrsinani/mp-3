import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Experiences from "./components/mains/Experiences";
import Skills from "./components/mains/Skills";
// import Projects from "./components/mains/Projects";
import Contact from "./components/mains/Contact";
import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #3BC1A8;
`;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

function Root() {
    return (
        <StyledWrapper>
            <Header />
            <StyledContainer>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="education.html" element={<Education />} />
                    <Route path="experiences.html" element={<Experiences />} />
                    <Route path="skills.html" element={<Skills />} />
                    {/* <Route path="projects.html" element={<Projects />} /> */}
                    <Route path="contact.html" element={<Contact />} />
                </Routes>
            </StyledContainer>
            <Footer />
        </StyledWrapper>
    );
}

const router = createBrowserRouter(
    [{path: "*", Component: Root}]
);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}