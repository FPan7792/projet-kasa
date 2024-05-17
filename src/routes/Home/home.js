import { data } from "../../datas/data";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

import banner from "../../assets/imgs/fond_accueil.jpg";
import Cards from "../../components/AccomoCards/Cards";

const Home = () => {
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
        <div className={styles.hero_banner_container__hero_banner_layer}></div>
        <p>Chez vous, partout et ailleurs</p>
      </div>

      <div className={styles.accomo_card_container}>
        {data.map((el) => (
          <Link key={el.id} to={`/accomodation/${el.id}`} state={{ infos: el }}>
            <Cards infos={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
