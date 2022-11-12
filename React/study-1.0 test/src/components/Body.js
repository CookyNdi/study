import { useState } from "react";
import React from "react";
import "../App.css";

// const Body = (prop) =>
const Body = (props) => {
  const [getChangeName, setChangeName] = useState("");

  const changeName = () => {
    setChangeName("CookyNdi");
  };

  return (
    <>
      <section className="body">
        <h1>NAMA : {props.name}</h1>
        <h1>NICK : {!getChangeName ? "ProfYDK" : getChangeName }</h1>
        <button onClick={() => changeName()}>Ubah Nama</button>
      </section>
    </>
  );
};

export default Body;
