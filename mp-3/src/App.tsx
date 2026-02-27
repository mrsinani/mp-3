import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Experiences from "./components/mains/Experiences";
import Skills from "./components/mains/Skills";
// import Projects from "./components/mains/Projects";
import Contact from "./components/mains/Contact";

function Root() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="education.html" element={<Education/>}></Route>
        <Route path="experiences.html" element={<Experiences/>}></Route>
        <Route path="skills.html" element={<Skills/>}></Route>
        {/* <Route path="projects.html" element={<Projects/>}></Route> */}
        <Route path="contact.html" element={<Contact/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}


const router =createBrowserRouter(
  [{path:"*",Component: Root}]
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}