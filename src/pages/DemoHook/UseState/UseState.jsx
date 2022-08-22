import React, { useState } from 'react';
import BaiTapChonXe from './BaiTapChonXe';

export default function UseState() {
  // useState là hàm do react cung cấp
  // Lưu ý không gọi useState trong if else
  const [like, setLike] = useState(1);
  return (
    <div>
      <div className='card w-25'>
        <img src='https://i.pravatar.cc' alt='avatar' />
        <div className='card-body'>
          <h3>Name: Phan Binh</h3>
          <p>Tuoi: 25</p>
          <p>Tuoi: {like}</p>
          <button className='btn btn-danger' onClick={() => setLike(like + 1)}>
            Like
          </button>
        </div>
      </div>
      <hr />
      <BaiTapChonXe/>
    </div>
  );
}
