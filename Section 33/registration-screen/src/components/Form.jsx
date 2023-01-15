import React, {useState} from "react";

function Form(props) {

    const [isMouseOver, setMouseOver] = useState(false);
    const [name, setName] = useState("");

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <form className="form">
            <h1>Hello {name}</h1>
            <input onChange={handleChange} value={name} type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {!props.isRegistered && <input type="password" placeholder="Confirm Password" />}
            <button type="submit" style={{backgroundColor: isMouseOver ? "black" : "white"}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
    )
}

export default Form;