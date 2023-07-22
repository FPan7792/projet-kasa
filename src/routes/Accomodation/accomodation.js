import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./accomodation.module.scss";
import arrowIcon from "../../assets/icons/arrow_white.svg";
import TagsPatch from "../../components/Tags/TagsPatch";
import Ratings from "../../components/Rating/Ratings";
import Collapse from "../../components/Collapse/Collapse";

const Accomodation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // accomo datas
  const [infos, setInfos] = useState(null);

  // redirect if no datas existing
  useEffect(() => {
    if (!state || !state.infos) {
      return navigate("/*");
    }
    setInfos(state.infos);
  }, []);

  // imgs manager
  const [imgIndex, setImgIndex] = useState(1);
  const switchImg = (direction) => {
    if (infos && infos.pictures.length) {
      direction === 1 &&
        imgIndex < infos.pictures.length - 1 &&
        setImgIndex(imgIndex + 1);
      direction === 0 && imgIndex > 1 && setImgIndex(imgIndex - 1);
    }
  };

  if (!infos) {
    return <p>Loading</p>;
  }

  return (
    <div className={styles.accomo_page_container}>
      <div className={styles.accomo_page_imgs_container}>
        <img
          className={styles.accomo_page_imgs_container__btn__left}
          onClick={() => switchImg(0)}
          src={arrowIcon}
          alt="arrow white left"
          height="auto"
          width="auto"
        />
        <img
          className={styles.accomo_page_imgs_container__img}
          src={infos.pictures[imgIndex - 1]}
          alt={infos.title}
          height="auto"
          width="auto"
        />

        <img
          className={styles.accomo_page_imgs_container__btn__right}
          onClick={() => switchImg(1)}
          src={arrowIcon}
          alt="arrow white right"
          height="auto"
          width="auto"
        />
        {infos.pictures.length > 1 && (
          <p className={styles.accomo_page_imgs_container__p}>{`${imgIndex}/${
            infos.pictures.length - 1
          }`}</p>
        )}
      </div>

      <div className={styles.accomo_page_description_section}>
        <div className={styles.left_part}>
          <div
            className={styles.accomo_page_description_section__location_section}
          >
            <h1>{infos.title}</h1>
            <p>{infos.location}</p>
          </div>

          <div className={styles.accomo_page_description_section__tags_section}>
            {infos.tags.map((tag, index) => (
              <span key={index}>
                <TagsPatch>{tag}</TagsPatch>
              </span>
            ))}
          </div>
        </div>

        {/* description secrion right part  */}
        <div className={styles.right_part}>
          <div className={styles.accomo_page_description_section__host_section}>
            {!infos.host.name.includes(" ") ? (
              <p>{infos.host.name}</p>
            ) : (
              <div className={styles.splitted_name}>
                <p>{infos.host.name.split(" ")[0]}</p>
                <p>{infos.host.name.split(" ")[1]}</p>
              </div>
            )}
            <img
              src={infos.host.picture}
              alt={infos.host.name}
              height="auto"
              width="auto"
            />
          </div>

          <Ratings rateValue={infos.rating} totalRate={5} />
        </div>
      </div>

      <div className={styles.accomo_page_collapses_container}>
        <Collapse title="Description">{infos.description}</Collapse>
        <Collapse title="Equipement">
          <ul>
            {infos.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Accomodation;
