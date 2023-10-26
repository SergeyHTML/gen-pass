import { useCallback, useRef, useState } from "react";

import OutputData from "./components/outputData/OutputData";
import InputDataBlock from "./components/inputBlock/InputDataBlock";

import { generatePassword } from "./utils/generatePassword";

import styles from './App.module.scss';

function App() {
  const [password, setPassword] = useState('')
  const inputData = useRef(null);

  const getInputData = useCallback((data) => {
    inputData.current = data
  }, []);

  const handleClick = useCallback(() => {
    const { length, lowercase, uppercase, numbers, symbols } = inputData.current;
    setPassword(generatePassword(length, lowercase, uppercase, numbers, symbols));
  }, []);

  return (
    <div className={styles.app}>
      <OutputData newPassword={password} />
      <InputDataBlock onGetInputData={getInputData} />

      <button
        className={styles.button}
        onClick={handleClick}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
