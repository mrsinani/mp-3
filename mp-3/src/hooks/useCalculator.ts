import {useState} from "react";

export default function useCalculator() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [result, setResult] = useState("");
    const [isNegative, setIsNegative] = useState(false);

    function calculate(operator: string) {
        let answer = 0;

        switch (operator) {
            case "+":
                answer = Number(input1) + Number(input2);
                break;
            case "-":
                answer = Number(input1) - Number(input2);
                break;
            case "*":
                answer = Number(input1) * Number(input2);
                break;
            case "/":
                answer = Number(input1) / Number(input2);
                break;
            case "**":
                answer = Number(input1);
                for (let i = 1; i < Number(input2); i++) {
                    answer = answer * Number(input1);
                }
                break;
            default:
                break;
        }

        setIsNegative(answer < 0);
        setResult(String(answer));
    }

    function clear() {
        setInput1("");
        setInput2("");
        setResult("");
        setIsNegative(false);
    }

    return {input1, input2, result, isNegative, setInput1, setInput2, calculate, clear};
}
