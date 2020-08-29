import React, {useEffect} from "react";
import {gettingSmurfs} from "../actions";
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
        <SmurfForm />
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

export default connect(mapStateToProps, {gettingSmurfs})(SmurfProfile);
