import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>React Router Example</h2>
        <h4>Book Mangement Application</h4>
        <div className='header__nav'>
            <NavLink to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
            <NavLink to='/add' activeClassName='activeNav'>Add Book</NavLink>
            <NavLink to='/edit' activeClassName='activeNav'>Edit Book</NavLink>
            <NavLink to='/help' activeClassName='activeNav'>Help</NavLink>
        </div>
    </header>
);

export default Header;