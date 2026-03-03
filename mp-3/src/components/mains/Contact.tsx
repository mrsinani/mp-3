import {Link} from "react-router";
import StyledMain from "../StyledMain";

export default function Contact() {
    return (
        <StyledMain>
            <h1>Contact</h1>
            <ul>
                <li>Email: danaid@bu.edu</li>
                <li>
                    LinkedIn:{" "}
                    <Link to="https://www.linkedin.com/in/mrsinani/" target="_blank">
                        LinkedIn
                    </Link>
                </li>
                <li>
                    GitHub:{" "}
                    <Link to="https://github.com/mrsinani" target="_blank">
                        GitHub
                    </Link>
                </li>
            </ul>
        </StyledMain>
    );
}
