import React from "react";
import "./sign-in-sign-up.styles.scss";
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = ()=> (
  <div className= 'form-container'>
  <SignIn/>
  <span>OR</span>
  <SignUp/>
  </div>
)
export default SignInAndSignUpPage;


