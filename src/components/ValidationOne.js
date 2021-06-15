


const ValidationOne = (values) => {
    let errors={};

    if(!values.email){
    errors.email="Email is required"
  }

return errors;
    
};


export default ValidationOne











