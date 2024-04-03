'use client'

import { content } from '@/constants';

import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import ExpandBtn from './ExpandBtn';

const EngagingContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    return (
        <section>
            {/* Desktop view */}
            <div className='lg:grid grid-cols-2 hidden'>
                <div className='px-20 bg-[#e7b75f] h-screen flex flex-col justify-center'>
                    <h2 className='text-4xl font-medium font-serif leading-[1.15] mb-10'>
                        Keep customers ready to buy with engaging content
                    </h2>
                    {content.map((item) => (
                        <div key={item.id} className='border-b border-gray-600 pb-5 mb-5'>
                            <div className='flex items-center justify-between text-gray-900'>
                                <h3 className='font-light'>{item.title}</h3>
                                <button
                                    className='text-xl text-gray-900'
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        setActiveItem(item.id);
                                    }}
                                >
                                    {isOpen && activeItem === item.id ?
                                        <MdOutlineKeyboardArrowUp className='w-6 h-6 rounded-full hover:bg-gray-400/25' />
                                        : <MdOutlineKeyboardArrowDown className='w-6 h-6 rounded-full hover:bg-neutral-400/25' />
                                    }
                                </button>
                            </div>
                            {isOpen && activeItem === item.id ?
                                <div className='my-6'>
                                    <p className='text-lg font-light text-gray-900 mb-8'>{item.desc}</p>
                                    <ExpandBtn text='Learn more' styles='text-sm font-medium' />
                                </div>
                                : null
                            }
                        </div>
                    ))}

                </div>
                <div className='w-full h-screen relative'>
                    <Image src='/assets/content.avif' alt='content' fill className='object-cover' />
                </div>
            </div>

            {/* Mobile view */}
            <div className='block lg:hidden px-6 py-16 bg-[#e7b75f]'>
                <h2 className='text-3xl font-medium font-serif leading-[1.15] mb-10'>
                    Keep customers ready to buy with engaging content
                </h2>
                {content.map((item) => (
                    <div key={item.id} className='border-b border-gray-600 pb-5 mb-5'>
                        <div className='flex items-center justify-between text-gray-900'>
                            <h3 className='font-light'>{item.title}</h3>
                            <button
                                className='text-xl text-gray-900'
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                    setActiveItem(item.id);
                                }}
                            >
                                {isOpen && activeItem === item.id ?
                                    <MdOutlineKeyboardArrowUp className='w-6 h-6 rounded-full hover:bg-gray-400/25' />
                                    : <MdOutlineKeyboardArrowDown className='w-6 h-6 rounded-full hover:bg-neutral-400/25' />
                                }
                            </button>
                        </div>
                        {isOpen && activeItem === item.id ?
                            <div className='my-6'>
                                <p className='text-lg font-light text-gray-900 mb-4'>{item.desc}</p>
                                <ExpandBtn text='Learn more' styles='text-sm font-medium' />
                                <div className='w-full h-64 relative my-8'>
                                    <Image src={item.img} alt={`content-${item.id}`} fill className='object-cover' />
                                </div>
                            </div>
                            : null
                        }
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EngagingContent
