import styles from "./about.module.scss";
import Collapse from "../../components/Collapse/Collapse";
import bannerImg from "../../assets/imgs/fond_about.jpg";

const About = () => {
  const reinsurrances = [
    {
      title: "Fiabilité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel massa eu risus ultrices laoreet vel et tortor. Quisque sit amet sollicitudin urna, id facilisis tortor. Morbi magna ipsum, luctus at sollicitudin vel, elementum eu ipsum. Ut nec sodales odio, ut volutpat ligula. Vivamus suscipit non dui in ullamcorper. Vestibulum interdum odio ac fermentum vehicula. Phasellus nisl odio, finibus ut urna dapibus, feugiat consequat dolor.",
    },
    {
      title: "Respect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel massa eu risus ultrices laoreet vel et tortor. Quisque sit amet sollicitudin urna, id facilisis tortor. Morbi magna ipsum, luctus at sollicitudin vel, elementum eu ipsum. Ut nec sodales odio, ut volutpat ligula. Vivamus suscipit non dui in ullamcorper. Vestibulum interdum odio ac fermentum vehicula. Phasellus nisl odio, finibus ut urna dapibus, feugiat consequat dolor.",
    },
    {
      title: "Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel massa eu risus ultrices laoreet vel et tortor. Quisque sit amet sollicitudin urna, id facilisis tortor. Morbi magna ipsum, luctus at sollicitudin vel, elementum eu ipsum. Ut nec sodales odio, ut volutpat ligula. Vivamus suscipit non dui in ullamcorper. Vestibulum interdum odio ac fermentum vehicula. Phasellus nisl odio, finibus ut urna dapibus, feugiat consequat dolor.",
    },
    {
      title: "Sécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel massa eu risus ultrices laoreet vel et tortor. Quisque sit amet sollicitudin urna, id facilisis tortor. Morbi magna ipsum, luctus at sollicitudin vel, elementum eu ipsum. Ut nec sodales odio, ut volutpat ligula. Vivamus suscipit non dui in ullamcorper. Vestibulum interdum odio ac fermentum vehicula. Phasellus nisl odio, finibus ut urna dapibus, feugiat consequat dolor.",
    },
  ];

  return (
    <div className={styles.container}>
      <img
        className={styles.banner__img}
        src={bannerImg}
        alt="bannière about"
        height={"auto"}
        width={"auto"}
      />
      <div className={styles.collapse_container}>
        {reinsurrances.map((item, index) => (
          <Collapse key={index} title={item.title}>
            {item.description}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;
