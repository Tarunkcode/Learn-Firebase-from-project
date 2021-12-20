import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import {signInWithEmailAndPassword} from 'firebase/auth';
import {signInWithGoogle, auth, signInWithEmailAndPassword} from '../../firebase/firebase.utils';
// import { useNavigate } from 'react-router-dom';

class SignIn extends React.Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = async (event) => {
  
    event.preventDefault();
    const{email, password} = this.state;
  try{ await signInWithEmailAndPassword(auth, email, password );
    this.setState({email:  '', password: ''});
  alert('you signed in successfully')}
    catch(error){
      console.log(error);
    }
  }
  render(){
    return(
<div className= 'existing-user'>
 <div className='form-title'> 
  <h2> I already have an account </h2>
  <span> sign in with your email id and password </span>
  </div>
  <form  onSubmit= {this.handleSubmit }>
 <FormInput
      name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
/>
<FormInput
   name= 'password'
   type= 'password'
   value={this.state.password}
   handleChange={this.handleChange}
   label= 'Password'
   required
/>
<div className= 'buttons'>

 <CustomButton type="submit" >Sign in</CustomButton>
 <span className= 'btn-seprator'>or</span>
   
 <CustomButton className= 'custom-button google-sign-in' onClick ={signInWithGoogle} isGoogleSignIn> Sign in with google</CustomButton>
</div>
            
</form>
 </div>
    )
  }
}
export default SignIn;