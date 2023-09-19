import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', padding: '20px 0' }}>
                <li style={{ marginRight: '30px' }}>
                    <NavLink to='/timer'>Timer</NavLink>
                </li>
                <li>
                    <NavLink to='/countdown'>CountDown</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
