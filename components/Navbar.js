'use client'

import { navLinks } from '@/constants';
import Button from './Button';

import Link from 'next/link';
import { FaSearch, FaMailchimp } from "react-icons/fa";
import { TiGlobeOutline } from "react-icons/ti";
import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FiPhone } from "react-icons/fi";
import { SiQuickbooks } from "react-icons/si";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-screen">
            <div className='hidden lg:flex gap-4 items-center py-1 pl-3 text-zinc-600 font-bold'>
                <p className='text-sm'>INTUIT</p>
                <div className='text-xs flex items-center gap-1'>
                    <SiQuickbooks className='text-base' />
                    quickbooks
                </div>
                <div className='text-xs flex items-center gap-1'>
                    <FaMailchimp className='text-base' />
                    mailchimp
                </div>
            </div>
            <div className='bg-neutral-800 py-2'>
                <p className='text-center text-white text-sm'>
                    Save 50% for 12 months<br />- limited time offer. Get started today
                </p>
            </div>
            <div className='flex items-center justify-between gap-8 p-3 w-screen z-10 bg-white'>
                <div className='flex items-center gap-8'>
                    <Link href="/" className="flex gap-1 items-center">
                        <FaMailchimp className='text-5xl' />
                        <h2 className='leading-3 font-bold text-sm'>
                            INTUIT
                            <span className='block leading-6 font-black text-xl'>mailchimp</span>
                        </h2>
                    </Link>

                    {/* Desktop navigation */}
                    <div className='hidden lg:flex items-center justify-between mt-1 gap-3'>
                        {navLinks.map((item) => (
                            <Link key={item.id} href={item.url} className='text-gray-700 font-semibold text-sm hover:bg-gray-100 p-2'>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='hidden lg:flex items-center justify-between mt-1'>
                    <div className='flex gap-3 items-center'>
                        <button className='hover:bg-gray-100 p-2'>
                            <FaSearch className='text-gray-700 text-xl' />
                        </button>
                        <button className='hover:bg-gray-100 p-2'>
                            <TiGlobeOutline className='text-gray-700 text-2xl' />
                        </button>
                        <button className='hover:bg-gray-100 p-2 text-gray-700 text-sm font-semibold'>
                            Sales: +1(800)315-5939
                        </button>
                        <Button text='Log In' styles='' />
                        <Button text='Sign Up' styles='bg-yellow-300' />
                    </div>
                </div>

                {/* Mobile navigation */}
                <div className='lg:hidden'>
                    <IoMdMenu
                        className='text-3xl text-gray-900'
                        onClick={() => setIsOpen(true)}
                    />
                    {isOpen && (
                        <div className={`fixed overflow-hidden z-50 h-screen bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${isOpen ? "transition-opacity opacity-100 duration-500 translate-x-0" : "transition-all delay-400 duration-500 opacity-0 translate-x-full"}`}>
                            <div className={`w-screen max-w-lg right-0 absolute bg-white h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                                <div className='relative w-screen max-w-lg p-10 overflow-y-scroll h-full text-white flex flex-col justify-between'>
                                    <div>
                                        <div className="flex justify-end">
                                            <IoMdClose
                                                className="text-3xl text-gray-900 cursor-pointer"
                                                onClick={() => setIsOpen(false)}
                                            />
                                        </div>

                                        {navLinks.map((item) => (
                                            <Link key={item.id} href={item.url} className='text-gray-700 font-semibold font-serif text-xl hover:bg-gray-100 p-2 block'>
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                    <div>
                                        <div className='flex flex-col mt-8'>
                                            <button className='hover:bg-gray-100 p-2 text-gray-700 flex items-center gap-4'>
                                                <FaSearch className='' />
                                                <p className='text-sm'>Search</p>
                                            </button>
                                            <button className='hover:bg-gray-100 p-2 text-gray-700 flex items-center gap-4'>
                                                <TiGlobeOutline className='text-2xl' />
                                                <p className='text-sm'>English</p>
                                            </button>
                                            <button className='hover:bg-gray-100 p-2 text-gray-700 text-sm flex items-center gap-4 mb-4'>
                                                <FiPhone className='text-lg' />
                                                <p className='text-sm'>Contact Sales: <span className='underline'>+1(800)315-5939</span></p>
                                            </button>
                                            <Button text='Log In' styles='mb-4' />
                                            <Button text='Sign Up' styles='bg-yellow-300 mb-6' />

                                            <p className='text-xl text-zinc-600 font-bold text-center mb-2'>INTUIT</p>
                                            <div className='flex gap-4 items-center justify-center text-zinc-600 font-bold'>
                                                <div className='text-xs flex items-center gap-1'>
                                                    <SiQuickbooks className='text-base' />
                                                    quickbooks
                                                </div>
                                                <div className='text-xs flex items-center gap-1'>
                                                    <FaMailchimp className='text-base' />
                                                    mailchimp
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-screen h-full cursor-pointer"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            ></div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
