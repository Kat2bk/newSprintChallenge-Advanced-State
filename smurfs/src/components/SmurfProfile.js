import React, {useEffect} from "react";
import {gettingSmurfs, addSmurf} from "../actions";
import {connect} from "react-redux";
import SmurfForm from "./SmurfForm";

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
            </div>
        ))}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {gettingSmurfs, addSmurf})(SmurfProfile);
