import { FaArrowRight } from "react-icons/fa6";

const ExpandBtn = ({ text, styles }) => {
    return (
        <button className={`flex items-center gap-3 hover:bg-yellow-300 w-fit rounded-3xl pl-4 transition ease-in-out delay-100 duration-200`}>
            <p className={`${styles} text-gray-900`}>{text}</p>
            <div className='bg-yellow-300 w-8 h-8 rounded-full'>
                <FaArrowRight className='translate-y-[45%] translate-x-[45%] scale-100' />
            </div>
        </button>
    )
}

export default ExpandBtn
