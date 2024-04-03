import Image from 'next/image';

import ExpandBtn from './ExpandBtn';

const GetStarted = () => {
    return (
        <section className='lg:my-8 lg:mx-16 mx-6 mt-12'>
            <div className='flex lg:flex-row flex-col items-center justify-between'>
                <div className='flex flex-col max-w-[60vh]'>
                    <h1 className='text-gray-900 text-3xl lg:text-[2.5rem] leading-[1.15] font-medium font-serif mb-6'>
                        Get started easily with a personalized product tour
                    </h1>
                    <p className='text-gray-600 leading-6 lg:mb-10 mb-4'>
                        An onboarding specialist is here to help you get started with confidence—it’s included with a paid plan.*
                    </p>
                    <ExpandBtn text='Learn more about onboarding' styles='font-light' />
                </div>
                <div className='relative lg:h-[80vh] lg:w-[80vh] w-[50vh] h-[50vh]'>
                    <Image src='/assets/getStarted.avif' alt='getStarted' className='object-contain' fill />
                </div>
            </div>
        </section>
    )
}

export default GetStarted
