import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaEdit, FaGreaterThan } from 'react-icons/fa'
import '../../index.css'
import avatar from '../../assets/images/default-avatar.png';

function Profile() {
    let navigate = useNavigate();

    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/account')} />
                    <span className='ml-4'>Profile Pages</span>
                </div>

                <FaEdit
                    className='icon-size'
                    onClick={() => navigate('/account')} />
            </div>
            <img alt="Avatar" src={avatar} className="m-auto w-16 mt-2 rounded-full" />
            <p className='my-4 text-center'>Change Photo</p>     

            <ul className=''>
                <li className='flex py-3 border-t border-b'>
                    <div class="text-left px-5">Name</div>
                    <div class="text-left">Naja Nadhirah</div>
                </li>
                <li className='flex py-3 border-t border-b'>
                    <div class="text-left px-5">Gender</div>
                    <div class="text-left">Female</div>
                </li>
                <li className='flex py-3 border-t border-b'>
                    <div class="text-left px-5">Mobile</div>
                    <div class="text-left">0198763323</div>
                </li>
                <li className='flex justify-between py-3 border-t border-b'>
                    <div className='flex'>
                        <div class="text-left px-5">Password</div>
                        <div class="text-left">******</div>
                    </div>

                    <FaGreaterThan
                        className='icon-size pr-2'
                        onClick={() => navigate('/account')} />
                </li>
            </ul>
            <p className='text-red-600 font-bold mt-5 text-center'>Log Out</p>
        </div>

    );


}

export default Profile;