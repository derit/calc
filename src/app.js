import React, { useState, useCallback } from "react";
import style from "./styles.module.scss";

const CalcApp = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);

  const [result, setResult] = useState(0);

  const GetChecked = () => {
    const checkResult = [checked1, checked2, checked3].filter((value) => value)
      .length;
    return checkResult;
  };
  const GetCheckedValue = (method) => {
    const checkResult = [
      {
        state: checked1,
        value: parseInt(input1),
      },
      {
        state: checked2,
        value: parseInt(input2),
      },
      {
        state: checked3,
        value: parseInt(input3),
      },
    ].filter(({ state }) => {
      return state == true;
    });

    if (method === "+") {
      const sum = checkResult.reduce((a, b) => a + b.value, 0);
      return sum;
    } else if (method === "-") {
      let res = checkResult[0].value;
      for (let i = 1; i < checkResult.length; i++) {
        res = res - checkResult[i].value;
      }
      return res; 
    } else if (method === "*") {
      let res = checkResult[0].value;
      for (let i = 1; i < checkResult.length; i++) {
        res = res * checkResult[i].value;
      }
      return res;
    } else if (method === "/") {
      let res = checkResult[0].value;
      for (let i = 1; i < checkResult.length; i++) {
        res = res / checkResult[i].value;
      }
      return res;
    }
  };

  const Calc = (method) => {
    const checkResult = GetChecked();
    if (checkResult > 1) {
      const val = GetCheckedValue(method);
      setResult(val);
    } else {
      alert("checked must be 2 or 3");
    }
  };

  const Input = useCallback(({ input, setInput, checked, setChecked }) => {
    return (
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="number"
          className={style.Input}
        />
        <input
          className={style.Checkbox}
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
    );
  }, []);

  return (
    <div className={style.AppContainer}>
      <Input
        input={input1}
        setInput={setInput1}
        checked={checked1}
        setChecked={setChecked1}
      />
      <Input
        input={input2}
        setInput={setInput2}
        checked={checked2}
        setChecked={setChecked2}
      />
      <Input
        input={input3}
        setInput={setInput3}
        checked={checked3}
        setChecked={setChecked3}
      />

      <div className={style.ActionContainer}>
        <div onClick={() => Calc("+")}>+</div>
        <div onClick={() => Calc("-")}>-</div>
        <div onClick={() => Calc("*")}>*</div>
        <div onClick={() => Calc("/")}>/</div>
      </div>

      <div>
        Hasil : <div>{result}</div>
      </div>
    </div>
  );
};
export default CalcApp;
