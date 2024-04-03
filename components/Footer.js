import { footerLinks } from '@/constants'

import Link from 'next/link'
import ExpandBtn from './ExpandBtn'
import { FaMailchimp, FaApple, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaCheck } from "react-icons/fa";
import { SiQuickbooks } from "react-icons/si";
import { IoMdCheckmarkCircle, IoLogoFacebook } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-[#e7b75f] w-screen h-fit flex flex-col items-center justify-between pt-16'>
            <div className='border-b border-gray-700/40 pb-16 w-screen'>
                <div className='flex lg:flex-row flex-col lg:items-center justify-center lg:gap-10 gap-5 px-4'>
                    <p className='font-medium lg:text-base text-sm'>Related Links:</p>
                    <Link href='/' className='text-xs lg:text-sm underline'>What is SEO?</Link>
                    <Link href='/' className='text-xs lg:text-sm underline'>Make Money Online</Link>
                    <Link href='/' className='text-xs lg:text-sm underline'>ChatGPT: What to Know About This AI Content Writing Tool</Link>
                </div>
            </div>

            <div className='border-b border-gray-700/40 py-16 w-screen'>
                <div className='flex lg:flex-row flex-col justify-center gap-14 px-4'>
                    {footerLinks.map((item, index) => (
                        <div key={index}>
                            <h3 className='font-medium mb-6'>{item.title}</h3>
                            <div className='flex flex-col gap-3'>
                                {item.links.map((link, key) => (
                                    <div key={key}>
                                        <p className='text-sm underline'>{link}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className='flex flex-col gap-4 max-w-[14rem]'>
                        <div className='flex items-center gap-1'>
                            <FaMailchimp className='inline text-4xl' />
                            <h2 className='align-middle font-semibold'>
                                mailchimp
                                <span className='font-light text-sm'>&nbsp;presents</span>
                            </h2>
                        </div>
                        <p className='text-sm'>Films, podcasts and original series that celebrates the enterpreneurial spirit.</p>
                        <ExpandBtn text='Check it out' styles='text-sm font-medium text-gray-800' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between gap-12 py-16'>
                <div className='flex lg:flex-row flex-col items-center justify-between lg:gap-6 gap-4'>
                    <h1 className='font-bold text-xl tracking-wide cursor-pointer'>INTUIT</h1>
                    <div className='flex items-center gap-[2px] cursor-pointer'>
                        <IoMdCheckmarkCircle className='w-6 h-6' />
                        <p className='font-medium text-gray-900'>turbotax</p>
                    </div>
                    <div className='flex items-center gap-[2px] cursor-pointer'>
                        <SiQuickbooks className='w-5 h-5' />
                        <p className='font-medium text-gray-900'>quickbooks</p>
                    </div>
                    <div className='flex items-center gap-[2px] cursor-pointer'>
                        <div className='w-5 h-5 rounded-full bg-black'>
                            <FaMailchimp className='text-white absolute translate-x-[15%] translate-y-[15%]' />
                        </div>
                        <p className='font-medium text-gray-900'>mailchimp</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-between lg:gap-20 gap-10'>
                    <div className='flex items-center gap-6'>
                        <Link href='/' className='bg-black w-fit h-fit px-2 rounded-md py-1 flex items-center gap-2'>
                            <FaApple className='text-3xl text-white' />
                            <div className='flex flex-col'>
                                <p className='text-[10px] text-white'>Download on the</p>
                                <p className='text-white'>App Store</p>
                            </div>
                        </Link>
                        <Link href='/' className='bg-black w-fit h-fit px-2 rounded-md py-1 flex items-center gap-2'>
                            <IoLogoGooglePlaystore className='text-3xl text-white' />
                            <div className='flex flex-col'>
                                <p className='text-[10px] text-white'>GET IT ON</p>
                                <p className='text-white'>Google Play</p>
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center gap-4 text-xl'>
                        <IoLogoFacebook className='cursor-pointer' />
                        <FaXTwitter className='cursor-pointer' />
                        <FaInstagram className='cursor-pointer' />
                        <FaLinkedin className='cursor-pointer' />
                        <FaYoutube className='cursor-pointer' />
                        <FaPinterest className='cursor-pointer' />
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <div className='relative w-12 h-12 rounded-full border-4 border-dotted border-gray-900/20'>
                            <FaCheck className='text-gray-900/60 absolute translate-x-[70%] translate-y-[70%]' />
                        </div>
                        <div className='flex flex-col text-gray-900/60'>
                            <p className='font-black text-lg leading-5'>
                                GDPR
                            </p>
                            <p className='font-medium text-xs max-w-[100px] leading-[14px]'>
                                FRIENDLY TOOLS
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col px-6 items-center justify-between gap-6 max-w-5xl'>
                    <select id="contacts" className="cursor-pointer bg-inherit hover:bg-white border border-gray-500 text-gray-900 w-full p-2.5 focus:outline-none font-medium text-sm">
                        <option selected value='English'>English</option>
                        <option value="Español ">Español </option>
                        <option value="Français">Français</option>
                        <option value="Português">Português</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="Italiano">Italiano</option>
                    </select>
                    <p className='text-[10px]'>
                        ©2001-2024 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. <Link href='/' className='font-bold underline'>Privacy</Link> | <Link href='/' className='font-bold underline'>Terms</Link> | <Link href='/' className='font-bold underline'>Legal</Link> | <Link href='/' className='font-bold underline'>Cookie Preferences</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
