import React, { useState } from 'react'
import axios from 'axios'

const FormRight = () => {

    const [values, setValues] = useState({
        fcpl: "123",
        password: "213",
        checkbox: "",
        fcpl_error: "",
        password_error: ""
    });




    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        if (event.target.name == 'fcpl') {
            console.log("ok")
            if (event.target.name == '') {
                setValues({ ...values, fcpl_error: 'Fcpl_id required' })
            }
        } else if (event.target.name == 'password') {
            if (event.target.name == '') {
                setValues({ ...values, password_error: 'Password required' })
            }
        } else {
            setValues({
                ...values,
                [event.target.name]: event.target.value,
            });
        }

    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(values)
        if (values.fcpl == '' || values.password == '') {
            setValues({ ...values, fcpl_error: 'Fcpl_id required', password_error: 'Password required' })
        }
        else {
            console.log("working")
            const data = {
                "employee_id": "fcpl_228",
                "password": "bharadwajmanu1844"
            }

            const authheaders = {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            }
            axios.post('https://fidelituscorpmanagebase.com/api/login', data, authheaders)
                .then((res) => {
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div className="Container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">SIGN IN</h2>
                </div>
                <form className="form-wrapper">
                    <div className="fcpl">
                        <label >FCPL ID </label><br />
                        <input className="input" type="text" name="fcpl" onChange={handleChange} />
                        <p className="error">{values.fcpl_error}</p>
                    </div>
                    <div className="password">
                        <label >PASSWORD</label><br />
                        <input className="input" type="password" name="password" pattern=".{6,}" onChange={handleChange} />
                        <p className="error">{values.password_error}</p>
                    </div>
                    <div className="checkbox">
                        <input className="checkbox" type="checkbox" name="checkbox" />
                        <label >REMEMBER ME</label>

                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormRight