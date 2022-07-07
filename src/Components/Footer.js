import React from 'react';
import {
    FaUserAlt,
    FaHome,
    FaListAlt
}
    from 'react-icons/fa'
import {
    Link
} from "react-router-dom";

function Footer() {
    return (
            <div className='flex fixed bottom-0 w-full justify-between p-4'>
                <Link to="/"><FaHome className='icon-size' /></Link>
                <Link to="/orders"><FaListAlt className='icon-size' /></Link>
                <Link to="/account"><FaUserAlt className='icon-size' /></Link>
            </div>
    );
}

export default Footer;