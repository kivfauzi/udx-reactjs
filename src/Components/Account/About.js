import {useNavigate  } from 'react-router-dom'
import React from 'react';

function About() {
    let navigate = useNavigate ();

    return (
        <div>
            <p>About Pages</p>
            <button 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' 
            onClick={() => navigate('/account')}
            >
                Back to homepage
            </button>
        </div>
    );
}

export default About;