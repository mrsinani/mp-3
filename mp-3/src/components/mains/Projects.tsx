import styled from "styled-components";
import StyledMain from "../StyledMain";
import useCalculator from "../../hooks/useCalculator";

const StyledCalculator = styled.div`
    background-color: #005461;
    padding: 2%;
`;

const StyledButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 2% 0;
`;

export default function Projects() {
    const {input1, input2, result, isNegative, setInput1, setInput2, calculate, clear} = useCalculator();

    return (
        <StyledMain>
            <h1>Projects</h1>

            <h2>JavaScript Calculator</h2>

            <StyledCalculator>
                <div>
                    <label htmlFor="first-number">First Number</label>
                    <input
                        type="text"
                        id="first-number"
                        value={input1}
                        placeholder="Enter a number"
                        onChange={(e) => setInput1(e.target.value)}
                    />
                    <label htmlFor="second-number">Second Number</label>
                    <input
                        type="text"
                        id="second-number"
                        value={input2}
                        placeholder="Enter a number"
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>

                <StyledButtonRow>
                    <button onClick={() => calculate("+")}>+</button>
                    <button onClick={() => calculate("-")}>-</button>
                    <button onClick={() => calculate("*")}>*</button>
                    <button onClick={() => calculate("/")}>/</button>
                    <button onClick={() => calculate("**")}>**</button>
                    <button onClick={() => clear()}>Clear</button>
                </StyledButtonRow>

                <p id="result" style={{color: isNegative ? "red" : ""}}>
                    {result}
                </p>
            </StyledCalculator>
        </StyledMain>
    );
}