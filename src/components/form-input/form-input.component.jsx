import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) =>(
  // we need handleChange so that we can bubble up any onChange that input have
  /* className group bcz label and input are together in a bubble */
  <div className= 'group'> 
  {/* pass all values to input tag in the form */}
  <input className='form-input' onChange={handleChange} {...otherProps}/>
  {
    label ? (<label  className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}>{label} </label> ):null
  }
  </div>
);
export default FormInput;