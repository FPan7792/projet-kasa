import { useState } from "react";
import { data } from "../datas/data";

const Main = () => {
  const [test, setTest] = useState(true);

  return (
    <>
      <h1>Test</h1>

      {/* {data.map((el) => (
        <p>{el.description}</p>
      ))}
      {test ? (
        <button onClick={() => setTest(!test)}>Vrai</button>
      ) : (
        <button onClick={() => setTest(!test)}>Faux</button>
      )} */}
    </>
  );
};

export default Main;
