import React, { useState } from 'react'
import Validation from './Validation';
import Login from '../components/Login/Login.css'

const FormRight = () => {

    const [values, setValues] = useState({
        fcpl: "",
        password: "",
        checkbox: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className="Container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">SIGN IN</h2>
                </div>
                <form className="form-wrapper">
                    <div className="fcpl">
                        <label className="label">FCPL ID </label><br />
                        <input className="input" type="text" name="fcpl" value={values.fcpl} onChange={handleChange} />
                        {errors.fcpl && <p className="error">{errors.fcpl}</p>}
                    </div>
                    <div className="password">
                        <label className="label">PASSWORD</label><br />
                        <input className="input" type="password" name="password" value={values.password} pattern=".{6,}" title="expected six or more characters" value={values.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}

                    </div>
                    <div className="checkbox">
                        <input className="checkbox" type="checkbox" name="checkbox" value={values.checkbox} />
                        <label className="label">REMEMBER ME</label>

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