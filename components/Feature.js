import Image from "next/image";

import Button from "./Button";
import { features } from "@/constants";

const Feature = () => {
    return (
        <section className="w-screen">
            {/* Desktop View */}
            <div className="lg:flex hidden">
                {features.map((feature) => (
                    <div key={feature.id} className={`${feature.bgColor}`}>
                        <div className="relative h-[65vh] cursor-pointer overflow-hidden group">
                            <Image src={feature.imgSrc} alt={`feature-${feature.id}`} className="object-fit group-hover:scale-110 transition-all delay-200 duration-500 ease-in-out" fill />
                            <h1 className="text-gray-900 text-2xl font-medium font-serif absolute group-hover:underline top-8 left-8">
                                {feature.title}
                            </h1>
                        </div>
                        <div className={`px-12 py-8 text-gray-900 flex flex-col justify-between`}>
                            <p className="text-gray-800 mb-6 leading-7 font-light">
                                {feature.desc}
                            </p>
                            <Button text={feature.btnText} styles='text-xs w-fit' />
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="lg:hidden block">
                {features.map((feature) => (
                    <div key={feature.id} className={`${feature.bgColor} w-screen h-[65vh] px-12 py-8 text-gray-900 flex flex-col`}>
                        <h1 className="text-gray-900 text-lg font-medium font-serif group-hover:underline">
                            {feature.title}
                        </h1>
                        <div className="relative h-[60vh] cursor-pointer my-4">
                            <Image src={feature.imgSrc} alt={`feature-${feature.id}`} className="object-contain" fill />
                        </div>

                        <p className="text-gray-800 mb-6 leading-7 font-light">
                            {feature.desc}
                        </p>
                        <Button text={feature.btnText} styles='text-xs w-fit' />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Feature