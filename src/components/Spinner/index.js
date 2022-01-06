import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Spinner() {
  const { promiseInProgress } = usePromiseTracker();
  console.log(promiseInProgress);

  return (
    promiseInProgress && (
        <Loader type="ThreeDots" color="#ffffff" height="45"/>
    )
  );
};

export default Spinner;