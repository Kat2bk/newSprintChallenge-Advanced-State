import React, {useState} from "react";

const SmurfForm = () => {



    return (
        <div className="form-box">
        <form className="smurf-form">
        <input type="text" name="name" onChange={} value={} placeholder="Add name" />
        <input type="text" name="age" onChange={} value={} placeholder="Add age" />
        <input type="text" name="height" onChange={} value={} placeholder="Add height" />
        <button className="submit-button" type="submit">Add Smurf</button>
        </form>
        </div>
    )
}

export default SmurfForm;