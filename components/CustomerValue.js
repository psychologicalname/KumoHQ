import React from 'react'
import ExpandBtn from './ExpandBtn'

const CustomerValue = () => {
    return (
        <section className='flex flex-col items-center justify-between'>
            <h1 className='lg:py-24 py-16 text-gray-900 text-3xl lg:text-[2.5rem] leading-[1.15] text-center font-medium font-serif max-w-2xl px-4'>
                Get up to 88% more revenue* with our Customer Lifetime Value and Likelihood to Purchase segments
            </h1>
            <div className='lg:flex relative h-screen w-screen gap-24 overflow-y-scroll'>
                <div className='lg:block w-1/2 hidden sticky h-full top-0 bg-[#efeeea]'>

                </div>
                <div className='lg:w-1/2 max-w-md px-6'>
                    <div className='lg:flex flex-col justify-center lg:h-screen'>
                        <div className='bg-[#efeeea] lg:hidden block w-full h-64 mb-6'></div>
                        <h2 className='lg:text-4xl text-xl text-gray-900 mb-4 leading-tight'>Mailchimp will help you focus on your most loyal and valuable customers.</h2>
                    </div>
                    <div className='lg:flex flex-col justify-center lg:h-screen'>
                        <div className='bg-[#efeeea] lg:hidden block w-full h-64 mb-6'></div>
                        <h2 className='lg:text-4xl text-xl text-gray-900 mb-4 leading-tight'>Predict who's likely to buy again</h2>
                        <p className='text-xl text-gray-900 font-light leading-8 mb-12'>Create segments of customers based on their lifetime value and likelihood to purchase.</p>
                        <ExpandBtn text='Learn more' styles='font-light' />
                    </div>
                    <div className='flex flex-col justify-center h-screen'>
                        <div className='bg-[#efeeea] lg:hidden block w-full h-64 mb-6'></div>
                        <h2 className='lg:text-4xl text-xl text-gray-900 mb-4 leading-tight'>Build customers for life</h2>
                        <p className='text-xl text-gray-900 font-light leading-8 mb-12'>Use our intelligent predictions to tighten your targeting strategy, strengthen customer relationships, and drive repeat sales.</p>
                        <ExpandBtn text='Learn more' styles='font-light' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerValue
