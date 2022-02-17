import React from 'react';
import '../components/header.css';


const Header = () => {
    var sold = 0;
    var available = 1000000;
    var sold = 80;
    var available = available - sold;
    return (
        <div className='header'>
            <div className='logo'>
                <a href="#">The Thousand Pixel Homepage </a>
            </div>
            <div className="info_list">
                <ul>
                    <li><span>1,000,000 Pixels</span></li>
                    <li><span>2tk per pixel </span></li>
                    <li><span>own a piece of internet history</span></li>
                </ul>
            </div>
            <div className="sell_info">
                <div className="info">
                    <ul>
                        <li>Sold : <span> {sold}</span> </li>
                        <li>Available : <span>{available}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
