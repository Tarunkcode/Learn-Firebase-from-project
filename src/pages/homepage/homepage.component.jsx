import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import CustomButton from '../../components/custom-button/custom-button.component'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./homepage.styles.scss";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
 let navigate = useNavigate();
 return( <div className="homepage" style={{ backgroundImage: "url(/coffee-bg-1.jpg)" }}>
  <div className='container bg-setup' style={{ backgroundColor: "white" }} >
  
    <span className='msg-text'>You know what! <br/> Today, is a prefect day <br/>& This is the best time <br/>for having a cup of<br/>Coffee <FontAwesomeIcon icon= {faCoffee} /></span>
    <i class="fa fa-hand-o-right" aria-hidden="true">pick your taste here!</i>
    <CustomButton className='btn order-button' onClick= {() => {
      navigate('/menu') } }>Order Now</CustomButton>
  </div>
    </div>
 )
}

export default Homepage;
