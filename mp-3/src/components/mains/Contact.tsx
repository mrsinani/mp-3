import { Link } from "react-router";
export default function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <ul>
        <li>Email: danaid@bu.edu</li>
        <li>
          LinkedIn:
          <Link to="https://www.linkedin.com/in/mrsinani/" target="_blank">
            LinkedIn
          </Link>
        </li>
        <li>
          GitHub:
          <Link to="https://github.com/mrsinani" target="_blank">
            GitHub
          </Link>
        </li>
      </ul>
    </main>
  );
}
