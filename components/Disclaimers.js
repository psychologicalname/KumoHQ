import { disclaimers } from '@/constants'
import React from 'react'

const Disclaimers = () => {
    return (
        <section className='lg:px-24 mb-10 mt-8 lg:mt-0 px-8'>
            <p className='font-medium text-xs'>*Disclaimers</p>
            <ol className='list-decimal font-light text-xs'>
                {disclaimers.map(item => (
                    <li key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default Disclaimers
