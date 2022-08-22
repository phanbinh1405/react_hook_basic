import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderHome from './components/HeaderHome/HeaderHome';

export default function App() {
  return (
    <div className='App container'>
      <HeaderHome/>
      <Outlet />
    </div>
  );
}
