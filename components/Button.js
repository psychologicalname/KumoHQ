import React from 'react'

const Button = ({ text, styles }) => {
    return (
        <button className={`${styles} rounded-3xl text-sm font-semibold px-6 py-3 border border-gray-800 text-gray-800 hover:-translate-y-2 transition-all delay-100 duration-200 ease-in-out hover:shadow-lg hover:shadow-black/100`}>
            {text}
        </button>
    )
}

export default Button
