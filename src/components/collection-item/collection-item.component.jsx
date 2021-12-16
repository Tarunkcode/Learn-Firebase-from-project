import React from 'react';
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({name, price, imageUrl}) => (
  
  
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      >
      <CustomButton>Add to Cart</CustomButton> </div>
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>Only for ${price}</span>
    </div>
    
  </div>
  
  

)
export default CollectionItem; 