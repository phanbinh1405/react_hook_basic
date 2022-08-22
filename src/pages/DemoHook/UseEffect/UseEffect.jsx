import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

let timeOut = {}
export default function UseEffect() {
  const [arrProd, setArrProd] = useState([
    { image: 'https://i.pravatar.cc', name: 'haha', price: 1000 },
  ]);

  const [count, setCount] = useState(60)

  const getData = async () => {
    try {
      const res = await axios.get('https://shop.cyberlearn.vn/api/Product')
      if(res) {
        setArrProd(res.data.content)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()

    timeOut = setInterval(() => {
      console.log(11)
      setCount((count) =>count - 1)
    }, 1000);

    return (() =>{
      clearInterval(timeOut)
    })
  }, [])

  const renderProd = () => {
    return arrProd.map((item, index) => {
      return (
        <div className='col-4 mt-2' key={index}>
          <div className='card'>
            <img src={item.image} alt={item.name} />
            <div className='card-body bg-light text-black'>
              <p className='font-weight-bold'>{item.name}</p>
              <p>{item.price}</p>
              <button className='btn btn-success'>add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='container'>
      <h3>Count: {count}</h3>
      <hr />
      <h3 className='text-center'>Shoes shop</h3>
      <div className='row'>{renderProd()}</div>
    </div>
  );
}
