import React from 'react'
import cl from "classnames";
import ScreenEgg from '../ScreenEgg'



import styles from "./index.module.scss";

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(className, styles.buyCoffee)}>
        <a
          href="https://blog.logrocket.com/react-icons-comprehensive-tutorial-examples/"
          target="__blank"
          className={styles.buyCoffeeButton}
        >
          Would you be so kind to please me
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee