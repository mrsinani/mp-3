export default function Projects() {
  function addition() {
    return (
        <main>
      <h1>Projects</h1>

      <h2>JavaScript Calculator</h2>

      <div id="calculator">
        <div id="calc-inputs">
          <label for="first-number">First Number</label>
          <input type="text" id="first-number">
          <label for="second-number">Second Number</label>
          <input type="text" id="second-number">
        </div>

        <div id="calc-buttons">
          <button onclick="addition()">+</button>
          <button onclick="subtract()">-</button>
          <button onclick="multiply()">*</button>
          <button onclick="divide()">/</button>
          <button onclick="exponent()">**</button>
          <button onclick="clearCalculator()">Clear</button>
        </div>

        <p id="result"></p>
      </div>
    </main>
    );
}``