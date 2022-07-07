import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function EditProfile() {
    let navigate = useNavigate();
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const changeName = event => {
        setName(event.target.value);
        // console.log(event.target.value);
      };

      const changeGender = event => {
        setGender(event.target.value);
        // console.log(event.target.value);
      };

    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/profile')} />
                    <span className='ml-4'>Edit Profile</span>
                </div>
            </div>
            <div>
                <form className="w-full max-w-sm p-5">
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name"
                                type="text"
                                value={name}
                                onChange={changeName} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                        </div>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value={gender} onChange={changeGender} />
                            Male
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value={gender} onChange={changeGender} />
                            Female
                        </label>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-2/3 text-center">
                            <button 
                            className="shadow bg-red-600 hover:bg-red-500 focus:shadow-outline w-1/2 focus:outline-none text-white font-bold py-2 px-4 rounded-full" 
                            type="button">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default EditProfile;