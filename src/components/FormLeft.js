import React,{useState} from 'react'
import ValidationOne from './ValidationOne';


const FormLeft = () => {

    const [values, setValues] = useState({
        email:"",  
        checkbox:"",
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
         setErrors(ValidationOne(values));
     }



    return (
        <div className = "Container">
            <div className = "app-wrapper">
                <div>
                    <h2 className = "title">FORGOT PASSWORD</h2>         
                </div>
                <form className="form-wrapper">
                <div className="email">
                <label className="label">Email</label><br />
                <input className="input" type="text" name="email" value={values.email}  onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>   
                <div className="checkbox">
                    <input className="checkbox" type="checkbox" name="checkbox" value={values.checkbox} />
                        <label className="label">REMEMBER ME</label>
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>SEND EMAIL</button>
                </div>
                </form>  
            </div>  
</div>
    )
}

export default FormLeft
