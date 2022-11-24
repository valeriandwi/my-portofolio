import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Home : React.FC = () => {
  return (
    <div className='px-10 bg-white'>
        <section className="min-h-screen ">
            <nav className="py-10 mb-12 flex justify-between">
                <h1>VALERIAN</h1>
                <ul className='flex items-center'>
                    <li>
                        <button className="bg-gradient-to-r text-white  from-cyan-500 to-teal-500 px-4 py-2 rounded-md">
                            Resume
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="text-center">
                <h2 className='text-5xl py-2 text-teal-600 font-medium'>
                    Valerian Dwi Purnomo
                </h2>
                <h3 className='text-2xl py-2'>Frontend Developer</h3>
                <p className='text-md py-5 leading-8 text-gray-800'>
                    A curious person that love to learn new things especially technologies and face the challenges. Experienced in Web Frontend Programming (HTML5, JavaScript, React, Redux). Responsible to working as a team and make a positive impact to the workplace.
                </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                <AiFillTwitterCircle/>
                <AiFillLinkedin/>
                <AiFillYoutube/>
            </div>
        </section>
    </div>
  )
}

export default Home