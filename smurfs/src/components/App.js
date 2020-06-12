import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchData } from "../store/actions";
import SmurfList from "./SmurfList";
import NewSmurfForm from "./NewSmurfForm";

const App = (props) => {
  useEffect(() => {
    if (props.smurfs.length === 0) {
      props.fetchData();
    }
  }, [props.smurfs]);
  console.log("PROPS FROM DATA", props);

  return (
    <div className="App">
      <h1> Smurf State Management </h1>
      <button onClick={props.fetchData}>Add Smurf</button>
      <div className="List">
        <SmurfList list={props.smurfs} />
        <NewSmurfForm />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("App State", state);
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
