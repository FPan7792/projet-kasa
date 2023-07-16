/* eslint-disable no-const-assign */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./accomodation.module.scss";
import arrowIcon from "../../assets/icons/arrow_white.svg";

const Accomodation = () => {
  const { state } = useLocation();
  const infos = state.infos;

  const [imgIndex, setImgIndex] = useState(1);

  const switchImg = (direction) => {
    if (infos.pictures.length) {
      direction === 1 &&
        imgIndex < infos.pictures.length - 1 &&
        setImgIndex(imgIndex + 1);
      direction === 0 && imgIndex > 1 && setImgIndex(imgIndex - 1);
    }
  };

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

        <p className={styles.accomo_page_imgs_container__p}>{`${imgIndex}/${
          infos.pictures.length - 1
        }`}</p>
      </div>
    </div>
  );
};

export default Accomodation;
