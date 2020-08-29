import React, {useEffect} from "react";
import {gettingSmurfs, addSmurf, deleteSmurf} from "../actions";
import {connect} from "react-redux";
import SmurfForm from "./SmurfForm";
import "../index.css";

const SmurfProfile = (props) => {
console.log("props inside Profile", props)
    const getData = props.gettingSmurfs;

    useEffect(() => {
        getData();
    }, [getData])


    return (
        <div>
        <div className="smurf-container">
        <SmurfForm addSmurf={props.addSmurf}/>
        {props.smurfs.map((smurf) => (
            <div className="smurf" key={smurf.id}>
            <h2>Name: {smurf.name}</h2>
            <h2>Age: {smurf.age}</h2>
            <h2>Height: {smurf.height}</h2>
            <button onClick={() => props.deleteSmurf(smurf.id)}>Delete</button>
            </div>
        ))}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {gettingSmurfs, addSmurf, deleteSmurf})(SmurfProfile);
