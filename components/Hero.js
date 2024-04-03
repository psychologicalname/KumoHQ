import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-between lg:p-24 py-14 px-8 text-center">
            <h1 className='text-gray-900 text-4xl lg:text-5xl font-medium font-serif lg:mb-4 mb-2'>
                Turn Emails into Revenue
            </h1>
            <p className='text-gray-900 text-lg lg:text-2xl font-light max-w-4xl text-center lg:leading-9 lg:mb-12 mb-8'>
                Win new customers with the #1 email marketing and automations platform* that recommends ways to get more opens, clicks, and sales.
            </p>
            <Button text='Sign Up' styles='bg-yellow-300' />
        </section>
    )
}

export default Hero
