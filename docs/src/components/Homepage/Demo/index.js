import React from 'react';
import demoImg from './images/demo-image.png';
import './style.css';

const Demo = () => (
  <div id="demo" className="bg-gray-100">
    <img
      style={{ display: 'block', margin: 'auto', maxWidth: '800px', width: '100%' }}
      className="p-4"
      src={demoImg}
      alt=""
    />
  </div>
);

export default Demo;
