import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeaderHome() {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark px-3'>
      <NavLink className='navbar-brand' to='#'>
        Project Hook
      </NavLink>
      <button
        className='navbar-toggler d-lg-none'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#collapsibleNavId'
        aria-controls='collapsibleNavId'
        aria-expanded='false'
        aria-label='Toggle navigation'
      />
      <div className='collapse navbar-collapse' id='collapsibleNavId'>
        <ul className='navbar-nav me-auto mt-2 mt-lg-0'>
          <li className='nav-item active'>
            <NavLink className='nav-link' to='#'>
              Home <span className='visually-hidden'>(current)</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='#'>
              Link
            </NavLink>
          </li>
          <li className='nav-item dropdown'>
            <NavLink
              className='nav-link dropdown-toggle'
              to='#'
              id='dropdownId'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Hook
            </NavLink>
            <div className='dropdown-menu' aria-labelledby='dropdownId'>
              <NavLink className='dropdown-item' to='/usestate'>
                UseState
              </NavLink>
              <NavLink className='dropdown-item' to='/useeffect'>
                UseEffect
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
