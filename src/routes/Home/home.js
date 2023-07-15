import { useState } from "react";
import { data } from "../../datas/data";
import styles from "./home.module.scss";

import banner from "../../assets/imgs/fond_accueil.jpg";

const Main = () => {
  const [test, setTest] = useState(true);

  return (
    <div className={styles.home_container}>
      <div className={styles.hero_banner_container}>
        <img
          className={styles.hero_banner_container__hero_banner}
          src={banner}
          alt="collines"
          width="auto"
          height="auto"
        />
        <p>Chez vous, partout et ailleurs</p>
      </div>

      <div className={styles.accomo_card_container}>
        {/* {data.map((el) => (
        <p>{el.description}</p>
        ))}
        {test ? (
          <button onClick={() => setTest(!test)}>Vrai</button>
          ) : (
            <button onClick={() => setTest(!test)}>Faux</button>
          )} */}
      </div>
    </div>
  );
};

export default Main;
