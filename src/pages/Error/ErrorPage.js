import { Link } from "react-router-dom";
import styles from "./error.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.error_page}>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas </p>
      <Link className={styles.backlink} to={"/"}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
