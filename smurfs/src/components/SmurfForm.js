import React, {useState} from "react";

const SmurfForm = (props) => {
    console.log("props from smurfForm", props)
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })


    const handleChanges = (event) => {
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        });
    }


    return (
        <div className="form-box">
        <form className="smurf-form">
        <input type="text" name="name" onChange={handleChanges} value={} placeholder="Add name" />
        <input type="text" name="age" onChange={handleChanges} value={} placeholder="Add age" />
        <input type="text" name="height" onChange={handleChanges} value={} placeholder="Add height" />
        <button className="submit-button" type="submit">Add Smurf</button>
        </form>
        </div>
    )
}

export default SmurfForm;