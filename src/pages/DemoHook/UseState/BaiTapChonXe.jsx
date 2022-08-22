import React, { useState } from 'react';

export default function BaiTapChonXe() {
  const [imgLink, setImgLink] = useState('./src/assets/products/black-car.jpg')

  const handleChangeColor = (color) => {
    setImgLink(`./src/assets/products/${color}-car.jpg`)
  }
  return (
    <div className='row'>
      <div className='col-6'>
        <img src={imgLink} alt='' className='w-100' />
      </div>
      <div className='col-6'>
        <button className='btn me-4' style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleChangeColor('red')}>
          Red
        </button>
        <button className='btn me-4' style={{ backgroundColor: 'black', color: 'white' }} onClick={() => handleChangeColor('black')}>
          Black
        </button>
        <button className='btn me-4' style={{ backgroundColor: 'silver', color: 'white' }} onClick={() => handleChangeColor('silver')}>
          Silver
        </button>
        <button className='btn me-4 btn-light' onClick={() => handleChangeColor('steel')}>Steel</button>
      </div>
    </div>
  );
}
