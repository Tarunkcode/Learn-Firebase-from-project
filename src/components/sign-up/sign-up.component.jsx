import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  auth,
  createUserProfileDocument,
  createUserWithEmailAndPassword
} from "../../firebase/firebase.utils";

class SignUp extends React.Component {

constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
handleChange= (event)=> {
const {name, value} = event.target;
this.setState({[name]: value})
}
handleSubmit=async (event) => {
event.preventDefault();

    const {displayName, email,password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try{
      const {user} = createUserWithEmailAndPassword(auth, email, password);
      
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName : '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(error){
      console.error(error);
    }
}
 render(){
     const { displayName, email, password, confirmPassword } = this.state;
     return(


 <div className= 'new-user'> 
 <div className='form-title'> 
 <h2> I don't have an account</h2>
 <span>sign up with your email and password</span>
</div>
 <form onSubmit= {this.handleSubmit}> 
 <FormInput
   type= 'text'
   name= 'displayName'
   value={displayName}
  onChange={this.handleChange}
   label= 'Display Name'
   required
/>

 <FormInput
  name= 'email'
   type= 'email'
   onChange={this.handleChange}
   value={email}
   label= 'Email'
   required
/>
 <FormInput
   name= 'password'
   type= 'password'
   onChange={this.handleChange}
   value={password}
   label= 'Password'
   required
/>
 <FormInput
    name= 'confirmPassword'
   type= 'password'
   onChange={this.handleChange}
   value={confirmPassword}
   label= 'Confirm Password'
   required
/>
<div className="buttons">
   <CustomButton type="submit"> Sign up </CustomButton>           

</div>
            
 </form>
</div>
    
     )
 }
}

export default SignUp;
