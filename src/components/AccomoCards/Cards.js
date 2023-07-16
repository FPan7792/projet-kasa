import styles from "./cards.module.scss";

const Cards = ({ infos }) => {
  return (
    <div className={styles.card}>
      <img src={infos.cover} alt={infos.title} height="auto" width="auto" />
      <p>{infos.title}</p>
    </div>
  );
};

export default Cards;
