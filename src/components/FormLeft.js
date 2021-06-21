import React, { useState } from 'react'
import ValidationOne from './ValidationOne';


const FormLeft = () => {

    const [values, setValues] = useState({
        email: "",
        checkbox: "",
        email_err: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        if (event.target.name === 'email') {
            if (event.target.name === '') {
                setValues({ ...values, email_err: 'ENTER A VALID EMAIL ADDRESS' })
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
        setErrors(ValidationOne(values));
    }



    return (
        <div className="Container">
            <div className="app-wrapper">
                <h2 className="title">FORGOT PASSWORD</h2>
                <form className="form-wrapper">
                    <div className="email">
                        <label className="label">Email</label><br />
                        <input className="input" type="text" name="email" onChange={handleChange} />
                        <p className="error">{values.email_err}</p>
                    </div>
                    <div className="checkbox">
                        <input className="checkbox" type="checkbox" name="checkbox" />
                        <label className="label">REMEMBER ME</label>
                    </div>
                    <button className="submit" onClick={handleFormSubmit}>SEND EMAIL</button>
                </form>
            </div>
        </div>
    )
}

export default FormLeft