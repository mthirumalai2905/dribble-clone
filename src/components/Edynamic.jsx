import React from 'react';
import Dynamic from './Dynamic'; // Assuming Dynamic.jsx is in the same directory
import './Edynamic.css';

const Edynamic = () => {
  return (
    <marquee direction="left" className="marquee">
    <div className='row'>
     
      <Dynamic
        imageUrl='https://i.pinimg.com/564x/1b/43/8c/1b438c2c4208c53d32a39a3d8832a87e.jpg'
        name='Luffy'
        designation='Captain'
      />
      <Dynamic
        imageUrl='https://i.pinimg.com/564x/65/2c/c2/652cc21f9e3b1b7de8b537f070d5ac9e.jpg'
        name='Nami'
        designation='Navigator'
      />
      <Dynamic
        imageUrl='https://i.pinimg.com/564x/af/43/42/af43426fe1114f93dd85140e2aab5bf9.jpg'
        name='Zoro'
        designation='Swrodsman'
      />
      <Dynamic
        imageUrl='https://i.pinimg.com/564x/56/b0/1f/56b01fe2018b2d69f59120b50ab7882e.jpg'
        name='Sanji'
        designation='Chef'
      />
      <Dynamic
        imageUrl='https://i.pinimg.com/564x/e3/40/a4/e340a49b856994c6cfbe27b4aedccf78.jpg'
        name='Ussop'
        designation='SogeKing'
      />
      <Dynamic
        imageUrl='https://i.pinimg.com/564x/f7/f0/c3/f7f0c3a27feca210f8b53edc33936ad8.jpg'
        name='Robin'
        designation='Arcahelogist'
      />
      <Dynamic
        imageUrl='https://i.pinimg.com/564x/c6/e4/2e/c6e42ed10fdde2591693255658994f95.jpg'
        name='Chopper'
        designation='Doctor'
      />
      <Dynamic
        imageUrl='https://i.pinimg.com/564x/c6/e0/07/c6e0070680dd9de4fa03be7d719c3cc5.jpg'
        name='Franky'
        designation='Ship-wreck'
      />
      <Dynamic
        imageUrl='https://i.pinimg.com/564x/9d/de/d2/9dded257a27e3734528dd679c8f30aa2.jpg'
        name='Jimbei'
        designation='Hench-man'
      />
    </div>
    </marquee>
  );
}

export default Edynamic;