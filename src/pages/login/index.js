import React, { useRef, useState } from "react";
import style from '../../styles/Button.module.css'

const Login = () => {
    const nameInput = useRef(null);
    const [formInputLogin, setFormInputLogin] = useState({
        name: "",
        password: "",
    });
    const submitName = () => {
        // console.log(nameInput.current.value);
        console.log(formInputLogin, "submit");
    };

    const onChangeName = (event) => {
        // console.log(event.target.value)
        setFormInputLogin({ ...formInputLogin, name: event.target.value });
        console.log(formInputLogin.name);
    };

    const onChangePassword = (event) => {
        // console.log(event.target.value)
        setFormInputLogin({ ...formInputLogin, password: event.target.value });
        console.log(formInputLogin.password);
    };

    // const styleHeader = { color: "blue", fontSize: "40px" };

    return (
        <div>
            {/* <h2>Uncontrolled component</h2>
            <label>
                Name:
                <input type="text" ref={nameInput} />
            </label>
            <br />
            <button onClick={submitName}>Submit</button> */}

            {/* <h2>Controlled component</h2> */}
            <h1 className="styleHeader">Login</h1>
            <label>
                Name:
                <input
                    type="text"
                    value={formInputLogin.name}
                    onChange={(event) => onChangeName(event)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={formInputLogin.password}
                    onChange={(event) => onChangePassword(event)}
                />
            </label>
            <br />
            <button className={style.btn} onClick={submitName}>Submit</button>
        </div>
    );
};

export default Login;
