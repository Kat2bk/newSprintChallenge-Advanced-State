import React, {useState} from "react";

const SmurfForm = (props) => {
    console.log("props from smurfForm", props)
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: "cm",
        id: Date.now()
    })


    const handleChanges = (event) => {
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height: "cm",
            id: Date.now()
        })
    }


    return (
        <div className="form-box">
        <form onSubmit={handleSubmit} className="smurf-form">
        <input type="text" name="name" onChange={handleChanges} value={newSmurf.name}    placeholder="Add name" />
        <input type="text" name="age" onChange={handleChanges} value={newSmurf.age}  placeholder="Add age" />
        <input type="text" name="height" onChange={handleChanges} value={newSmurf.height}   placeholder="Add height" />
        <button className="submit-button" type="submit">Add Smurf</button>
        </form>
        </div>
    )
}

export default SmurfForm;