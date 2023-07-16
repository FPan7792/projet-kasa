import styles from "./ratings.module.scss";
import fullStar from "../../assets/icons/star_red.svg";
import emptyStar from "../../assets/icons/star_grey.svg";

const Rating = (props) => {
  const { totalRate } = props;

  const rateValue = Number(props.rateValue);

  const starsContainer = [];

  for (let i = 0; i < totalRate; i++) {
    if (i <= rateValue) {
      starsContainer.push(1);
    } else starsContainer.push(0);
  }

  return (
    <div className={styles.container}>
      {starsContainer.map((elem, index) => {
        if (elem) {
          return (
            <img
              key={index}
              src={fullStar}
              alt="full star"
              height="auto"
              width="auto"
            />
          );
        }
        return (
          <img
            key={index}
            src={emptyStar}
            alt="empty star"
            height="auto"
            width="auto"
          />
        );
      })}
    </div>
  );
};

export default Rating;
