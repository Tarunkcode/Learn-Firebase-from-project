import React from 'react';
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

const CollectionItem = ({name, price, imageUrl}) => (
  
  
  <div className='collection-item'>
    
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      >
      <CustomButton className='custom-button'>
      <FontAwesomeIcon className='plus-icon' icon={faPlusCircle} />
        
      <h4>Add to Cart</h4>
        </CustomButton>
   </div>
 



    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>Only for ${price}</span>
    </div>
    
  </div>
  
  

)
export default CollectionItem; 