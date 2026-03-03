import StyledMain from "../StyledMain";

export default function Home() {
    return (
        <StyledMain>
            <h1>Home</h1>
            <img
                src={"headshot.jpeg"}
                alt="Danaid Sinani Headshot"
            />
            <p>
                Hello there, I am Danaid Sinani. I am a
                <strong>
                    <em> Software Engineer</em>
                </strong>{" "}
                with a passion for building
            </p>
            <p>
                I am currently studying at{" "}
                <strong>
                    <em> Boston University</em>
                </strong>
                , with an expected graduation date of May 2026.
            </p>
        </StyledMain>
    );
}
