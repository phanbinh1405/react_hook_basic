import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseState from './pages/DemoHook/UseState/UseState';
import UseEffect from './pages/DemoHook/UseEffect/UseEffect';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />}> 
        <Route path='usestate' element={<UseState/>}/>
        <Route path='useeffect' element={<UseEffect/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
