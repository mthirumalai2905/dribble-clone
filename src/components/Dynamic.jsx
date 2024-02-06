import React from 'react';
import './Dynamic.css';

const Dynamic = (props) => {
  return (
    <div className='model'>
       <div className='move'>
         <div className='section'>
           <img src={props.imageUrl} alt={props.name} className='image' />
           <p>{props.name}</p>
           <span>{props.designation}</span>
         </div>
       </div>
    </div>
  );
}

export default Dynamic;
