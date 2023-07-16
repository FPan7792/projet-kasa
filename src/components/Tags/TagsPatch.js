import styles from "./tagspatch.modules.scss";

const TagsPatch = (props) => {
  return <button className={styles.tag__btn}>{props.children}</button>;
};

export default TagsPatch;
