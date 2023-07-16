import { data } from "../../datas/data";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

import banner from "../../assets/imgs/fond_accueil.jpg";
import Cards from "../../components/AccomoCards/Cards";

const Main = () => {
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
        {data.map((el) => (
          <Link to={`/accomodation/${el.id}`}>
            <Cards infos={el} key={el.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
