import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./salesConnections";
import { getSales } from "./salesConnections";

const Network = ({ setDataStore }) => {
  const [getError, setGetError] = useState(``);
  // const [postError, setPostError] = useState(``);
  // const [putError, setPutError] = useState(``);

  useEffect(() => {
    const getData = async () => {
      let data = await getSales(setGetError);
      setDataStore(data);
    };
    getData();
  }, []);

  return (
    <>
      {getError && (
        <Modal handleClose={() => setGetError(``)} message={getError} />
      )}
    </>
  );
};

export default Network;
