import Link from "next/link"
import OfferCard from "./OfferCard"
import ExpandBtn from "./ExpandBtn"

const LimitedTimeOffer = () => {
    return (
        <section className="bg-neutral-100 lg:pt-24 pt-16 pb-16 flex flex-col items-center justify-between lg:px-24 px-8">
            <p className="text-gray-900 lg:mb-6 mb-4 lg:text-base text-sm">
                Limited Time Offer
            </p>
            <h1 className='text-gray-900 text-3xl text-center leading-10 lg:text-[2.5rem] lg:leading-[1.15] font-medium font-serif mb-10'>
                Save <span className="border-b-8 pb-0.5 border-yellow-300 ">50%</span> for 12 months
            </h1>

            <form class="mx-auto lg:mb-16 mb-10 w-full max-w-xl">
                <div className="lg:grid grid-cols-2">
                    <label for="contacts" className="lg:flex hidden text-gray-900 border-gray-500 bg-inherit p-2.5 justify-end">How many contacts do you have?
                    </label>
                    <label className="lg:hidden block text-xs">How many contacts?</label>
                    <select id="contacts" className="cursor-pointer inline bg-white border border-gray-500 text-gray-900 w-full p-2.5">
                        <option selected value='500'>500</option>
                        <option value="1500">1500</option>
                        <option value="2500">2500</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                        <option value="15000">15000</option>
                        <option value="20000">20000</option>
                        <option value="25000">25000</option>
                        <option value="30000">30000</option>
                        <option value="40000">40000</option>
                        <option value="50000">50000</option>
                        <option value="75000">75000</option>
                        <option value="100000">100000</option>
                        <option value="130000">130000</option>
                        <option value="150000">150000</option>
                        <option value="200000">200000</option>
                        <option value="250000+">250000+</option>
                    </select>
                </div>
            </form>

            <OfferCard />

            <p className="text-gray-600 text-xs mb-10 text-center">
                *See <Link href='/' className='underline decoration-dashed'>Offer Terms</Link> Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. <Link href='/' className='underline decoration-dashed'>Learn more</Link>
            </p>

            <ExpandBtn text='See all plan details' styles='lg:text-lg font-light' />
        </section>
    )
}

export default LimitedTimeOffer
