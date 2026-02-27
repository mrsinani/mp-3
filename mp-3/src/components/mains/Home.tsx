export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <img
      // Files in the public directory are served at the root path.
      // Instead of /public/headshot.jpeg, use /headshot.jpeg. (x4 times)
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
    </main>
  );
}
