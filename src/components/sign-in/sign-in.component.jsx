import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    const{email, password} = this.state;
  try{ await signInWithEmailAndPassword(auth, email, password )
    this.setState({email:  '', password: ''});}
    catch(error){
      console.log(error);
    }
  }
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  render(){
    return(
<div className= 'existing-user'>
 <div className='form-title'> 
  <h3> I already have an account </h3>
  <span> sign in with your email id and password </span>
  </div>
  <form>
 <FormInput onSubmit= {this.handleSubmit}
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

 <CustomButton type="submit">Sign in</CustomButton>
 <span className= 'btn-seprator'>or</span>
   
 <CustomButton className= 'custom-button google-sign-in' onClick ={signInWithGoogle}isGoogleSignIn> Sign in with google</CustomButton>
</div>
            
</form>
 </div>
    )
  }
}
export default SignIn;