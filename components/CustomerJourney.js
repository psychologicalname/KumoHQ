import React from 'react'
import ExpandBtn from './ExpandBtn'

const CustomerJourney = () => {
    return (
        <section className='flex flex-col items-center justify-between'>
            <h1 className='lg:py-24 py-16 text-gray-900 text-3xl lg:text-[2.5rem] leading-[1.15] text-center font-medium font-serif max-w-xl'>
                Generate up to 4x more orders* with Customer Journey Builder automations
            </h1>
            <div className='lg:flex relative h-screen w-screen gap-24 overflow-y-scroll'>
                <div className='lg:block w-1/2 hidden sticky h-full top-0 bg-[#efeeea]'>

                </div>
                <div className='lg:w-1/2 max-w-md px-6'>
                    <div className='lg:flex flex-col justify-center lg:h-screen'>
                        <div className='bg-[#efeeea] lg:hidden block w-full h-64 mb-6'></div>
                        <h2 className='lg:text-4xl text-xl text-gray-900 mb-4 leading-tight'>Convert more customers at scale</h2>
                        <p className='text-xl text-gray-900 font-light leading-8 lg:mb-12 mb-6'>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                        <ExpandBtn text='Learn more' styles='font-light' />
                        <div className='lg:hidden block mb-12' />
                    </div>
                    <div className='lg:flex flex-col justify-center lg:h-screen'>
                        <div className='bg-[#efeeea] lg:hidden block w-full h-64 mb-6'></div>
                        <h2 className='lg:text-4xl text-xl text-gray-900 mb-4 leading-tight'>Discover new ways to automate</h2>
                        <p className='text-xl text-gray-900 font-light leading-8 lg:mb-12 mb-6'>Get a head start with pre-built journeys that help you cross-sell your products, recover abandoned carts, re-engage existing customers, and win new ones.</p>
                        <ExpandBtn text='Learn more' styles='font-light' />
                        <div className='lg:hidden block mb-12' />
                    </div>
                    <div className='lg:flex flex-col justify-center lg:h-screen'>
                        <div className='bg-[#efeeea] lg:hidden block w-full h-64 mb-6'></div>
                        <h2 className='lg:text-4xl text-xl text-gray-900 mb-4 leading-tight'>Keep your emails relevant and your brand growing</h2>
                        <p className='text-xl text-gray-900 font-light leading-8 mb-12'>Deliver personalized emails based on their buying behavior, survey responses, chat interactions, and support tickets to promote loyalty and growth.</p>
                        <div className='lg:hidden block mb-12' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerJourney
