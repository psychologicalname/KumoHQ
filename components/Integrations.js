import { integrations } from "@/constants"

import Image from "next/image"
import Link from "next/link"
import ExpandBtn from "./ExpandBtn"

const Integrations = () => {
    return (
        <section className='lg:mx-20 lg:my-16 px-6'>
            <h1 className='lg:pt-24 pt-16 pb-10 text-gray-900 text-3xl lg:text-[2.5rem] leading-[1.15] font-medium font-serif max-w-2xl'>
                Bring in more data, drive more growth with our integrations
            </h1>
            {/* Desktop view */}
            <div className="hidden lg:grid grid-cols-3 space-x-6 mb-20">
                {integrations.map((item) => (
                    <Link key={item.id} href={item.url} className="flex space-x-4 items-center hover:bg-gray-100 p-6">
                        <div className="relative h-20 w-20 grow-0 shrink-0">
                            <Image src={item.img} alt={item.title} className="object-cover" fill />
                        </div>
                        <div>
                            <h2 className="font-medium text-lg text-gray-900 mb-1">{item.title}</h2>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Mobile view */}
            <div className="lg:hidden grid grid-cols-2 mb-12 gap-4">
                {integrations.map((item) => (
                    <Link key={item.id} href={item.url} className="flex flex-col space-y-2 items-center bg-gray-100 w-full p-6 mb-4">
                        <div className="relative h-20 w-20">
                            <Image src={item.img} alt={item.title} className="object-contain" fill />
                        </div>
                        <h2 className="text-gray-900 text-center text-sm font-light">{item.title}</h2>
                    </Link>
                ))}
            </div>

            <ExpandBtn text='View all 300+ integrations' styles='lg:text-base text-sm' />
        </section>
    )
}

export default Integrations
