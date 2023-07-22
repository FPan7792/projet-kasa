import styles from "./collapse.module.scss";
import arrowIcon from "../../assets/icons/arrow_white.svg";
import { useState } from "react";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={[styles.collapse__container]}>
      <div className={styles.collapse__container__title_container}>
        <p className={styles.collapse__container__title}>{props.title}</p>
        <img
          className={
            !isOpen
              ? styles.collapse__container__arrow_up
              : styles.collapse__container__arrow_down
          }
          onClick={() => setIsOpen(!isOpen)}
          src={arrowIcon}
          alt="arrow white"
          height="auto"
          width="auto"
        />
      </div>
      <div className={!isOpen ? styles.closed_description : styles.description}>
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
