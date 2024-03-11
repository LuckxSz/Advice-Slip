import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import dice from "../../assets/dice.png";
import { Header } from "../Header/Header";
export const Main = () => {
  const [data, setData] = useState(null);
  const [diceClicked, setDiceClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (diceClicked) {
      fetchData();
      setDiceClicked(false);
    } else {
      fetchData();
    }
  }, [diceClicked]);
  const handleDiceClick = () => {
    setDiceClicked(true);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}></div>
      <div className={styles.wrapper}>
        {data && <p>&quot;{data.slip.advice}&quot; </p>}
      </div>
      <img
        className={styles.dice}
        src={dice}
        alt="dice"
        onClick={handleDiceClick}
      />
    </div>
  );
};
