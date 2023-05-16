import {useState} from 'react'
import logo from '../assets/logo.svg'
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {

    const [nav, setNav] = useState('close')


  return (
    <div className="">
        <div className=" max-w-7xl mx-auto bg-white px-2 py-2">
            {/* DESKTOP NAVBAR */}
            <nav className="hidden md:flex flex-col md:flex-row flex-wrap justify-between items-center">
                {/* LEFT SECTION */}
                <div className='flex items-center space-x-10'>

                    {/* LOGO */}
                    <div>
                        <img src={logo} alt="LOGO" />
                    </div>

                    {/* COURSES */}
                    <div className='flex items-center'>
                        <select className='outline-none'>
                            <option>Courses</option>
                            <option>Course A</option>
                            <option>Course B</option>
                            <option>Course C</option>
                            <option>Course D</option>
                            <option>Course E</option>
                        </select>
                    </div>

                    {/* PROGRAMS */}
                    <div className='flex items-center'>
                        <select className='outline-none'>
                            <option>Programs</option>
                            <option>Program A</option>
                            <option>Program B</option>
                            <option>Program C</option>
                            <option>Program D</option>
                            <option>Program E</option>
                        </select>
                    </div>
                </div>



                {/* RIGHT SECTION */}
                <div className="flex items-center space-x-10">
                    {/* SEARCH ICON */}
                    <div>
                        <AiOutlineSearch size={20} />
                    </div>

                    {/* LOGIN BUTTON */}
                    <div>
                        <button>Log in</button>
                    </div>

                    {/* JOIN NOW BUTTON */}
                    <div>
                        <button className="bg-gradient-to-r from-[#0096FF] to-[#0048FF] px-5 py-2 rounded-full text-white font-semibold">JOIN NOW</button>
                    </div>
                </div>
            </nav>

            {/* MOBILE NAVBAR */}
            <nav className="flex md:hidden md:flex-row flex-wrap justify-between items-center">
                {/* LEFT SECTION */}
                <div className='flex items-center space-x-10'>
                    {/* LOGO */}
                    <div>
                        <img src={logo} alt="LOGO" className="w-28" />
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div>
                    <RxHamburgerMenu size={25} onClick={() => setNav('open')} />
                </div>

                {/* MENU */}
                <div className={`${nav == 'open' ? '' : 'hidden'} absolute inset-0 z-50  bg-black text-white px-2 py-2`}>
                
                    <div className="flex justify-between items-center">
                        <div>
                            <img src={logo} alt="LOGO" className="w-28" />
                        </div>
                        <div>
                            <AiOutlineClose size={25} onClick={() => setNav('close')} />
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col justify-center items-center space-y-5">

                        {/* COURSES */}
                        <div className='flex items-center'>
                            <select className='outline-none bg-black'>
                                <option>Courses</option>
                                <option>Course A</option>
                                <option>Course B</option>
                                <option>Course C</option>
                                <option>Course D</option>
                                <option>Course E</option>
                            </select>
                        </div>

                        {/* PROGRAMS */}
                        <div className='flex items-center'>
                            <select className='outline-none bg-black'>
                                <option>Programs</option>
                                <option>Program A</option>
                                <option>Program B</option>
                                <option>Program C</option>
                                <option>Program D</option>
                                <option>Program E</option>
                            </select>
                        </div>

                        {/* LOGIN BUTTON */}
                        <div>
                            <button>Log in</button>
                        </div>

                        {/* JOIN NOW BUTTON */}
                        <div>
                            <button className="bg-gradient-to-r from-[#0096FF] to-[#0048FF] px-5 py-2 rounded-full text-white font-semibold">JOIN NOW</button>
                        </div>
                        
                    </div>
                </div>
                
            </nav>
        </div>
    </div>
  )
}

export default Navbar