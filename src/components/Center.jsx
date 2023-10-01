import mainImage from '../assets/center/center-main-image.png'
import womanComment from '../assets/center/woman-comment.png'
import stars from '../assets/center/stars.svg'
import verify from '../assets/center/verify.svg'
import secondary from '../assets/center/secondary.png'
import lock from '../assets/center/lock.svg'
import guarantee from '../assets/center/guarantee.png'
import percent from '../assets/center/percent.svg'
import visa from '../assets/center/visa.svg'
import shoppay from '../assets/center/shoppay.svg'
import paypal from '../assets/center/paypal.svg'
import mastercard from '../assets/center/mastercard.svg'
import gpay from '../assets/center/gpay.svg'
import applepay from '../assets/center/applepay.svg'
import amex from '../assets/center/amex.svg'
import line from '../assets/center/line.svg'


function Center() {
    return (
        <div className="w-[87%] mx-auto mt-9 p-10 bg-gray-100 rounded-xl flex justify around gap-14 ss:flex-col ss:w-full ss:mt-0">
            <div className="flex-col w-1/2 ss:hidden">
                <img className="w-[100%] mb-10 rounded-[10px]" src={mainImage} />
                <div className="hidden ss:block p-6 bg-white rounded-[10px] flex-col justify-start items-start gap-[18px] inline-flex">
                    <div className="justify-start items-center gap-[13px] inline-flex">
                        <img className="w-16 h-16 rounded-full" src={womanComment} />
                        <div className="w-44 h-[35.30px] relative">
                            <img src={stars} alt="" />
                            <div className="w-44 h-4 left-[-0px] top-[19.30px] absolute justify-start items-center gap-2.5 inline-flex">
                                <div className="text-zinc-800 text-sm font-bold font-Manrope leading-[14px]">Ken T.</div>
                                <div className="w-[126px] h-4 relative">
                                    <img src={verify} alt="" />
                                    <div className="left-[26px] top-[1px] absolute text-emerald-400 text-xs font-normal font-Manrope leading-[14.40px]">Verified Customer</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch text-neutral-600 text-base font-normal font-Manrope leading-normal">“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</div>
                </div>
            </div>
            <div className="flex flex-col w-1/2 justify-around ss:w-full ss:gap-8">
                <div className="flex-col mb-3 ss:text-center">
                    <span className="text-blue-500 text-4xl font-normal font-Manrope capitalize leading-[44.80px]">ONE TIME ONLY</span>
                    <span className="text-black text-4xl font-normal font-Manrope capitalize leading-[44.80px]"> special price for 6 extra Clarifion for only </span>
                    <span className="text-blue-500 text-4xl font-normal font-Manrope capitalize leading-[44.80px]">$14 each</span>
                    <span className="text-black text-4xl font-normal font-Manrope capitalize leading-[44.80px]"> ($84.00 total!)</span>
                </div>
                <div className="justify-start items-center gap-6 inline-flex">
                    <div className=" relative">
                        <div className="bg-blue-500 rounded-[10px]" >
                            <img className="w-[134px] h-[134px] rounded-[10px] ss:w-[110px] ss:h-[110px]" src={secondary} />
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col items-start gap-[5px] inline-flex ss:gap-3">
                        <div className="self-stretch justify-between items-center inline-flex">
                            <div className="text-black text-xl font-normal font-Manrope capitalize leading-2">Clarifion Air Ionizer</div>
                            <div className="justify-center items-center gap-2 flex">
                                <div className="text-neutral-400 text-base font-semibold font-Manrope line-through capitalize">$180</div>
                                <div className="text-blue-500 text-3xl font-semibold font-Manrope capitalize leading-[30.80px]">$84</div>
                            </div>
                        </div>
                        <img src={stars} alt="" />
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 left-0 top-0 absolute bg-sky-100 rounded-full" />
                                <div className="w-[8.53px] h-[8.53px] left-[3.79px] top-[3.79px] absolute bg-blue-500 rounded-full ss:top-0" />
                            </div>
                            <div className="text-slate-700 text-base font-light font-Manrope">12 left in Stock</div>
                        </div>
                        <div className="text-neutral-600 text-base font-normal font-Manrope leading-snug ss:hidden">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
                    </div>
                </div>
                <div className="text-neutral-600 text-base font-normal font-Manrope leading-snug ss:block ss:text-2xl">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>

                <div className="flex-col justify-start items-start gap-4 flex mt-5 text-base ss:text-xl">
                    <div className="justify-start items-center gap-3 inline-flex">
                        <div className="relative">
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99976 11L8.65858 18L21.9998 4" stroke="#2C7EF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className=""><span className="text-neutral-600 font-normal font-Manrope leading-relaxed">Negative Ion Technology may</span>
                            <span className="text-neutral-600 font-bold font-Manrope leading-relaxed"> help with allergens</span>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-3 inline-flex">
                        <div className="w-[22px] h-[22px] relative">
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99976 11L8.65858 18L21.9998 4" stroke="#2C7EF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <div><span className="text-neutral-600 font-normal font-Manrope leading-relaxed">Designed for</span><span className="text-neutral-600 font-bold font-Manrope leading-relaxed"> air rejuvenation</span></div>
                    </div>
                    <div className="justify-start items-center gap-3 inline-flex">
                        <div className="w-[22px] h-[22px] relative">
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99976 11L8.65858 18L21.9998 4" stroke="#2C7EF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <div><span className="text-neutral-600 font-bold font-Manrope leading-relaxed">Perfect for every room</span><span className="text-neutral-600 font-normal font-Manrope leading-relaxed"> in all types of places.</span></div>
                    </div>
                </div>
                <div className="h-14 px-4 py-3 bg-indigo-50 rounded-[10px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="justify-start items-center gap-4 inline-flex text-base ss:text-2xl">
                        <div className="w-8 h-8 relative">
                            <div className="w-8 h-8 left-0 top-0 absolute bg-blue-500 rounded-full ss:w-10 ss:h-10" />
                            <div className="w-[29.20px] h-[19.20px] left-[2.0px] top-[2.40px] absolute ss:w-[20px] ss:h-[10.20px] ss:left-[4.0px] ss:top-[4.40px]">
                                <img src={percent} alt="" />
                            </div>
                        </div>
                        <div><span className="text-black font-normal font-Manrope leading-snug">Save </span><span className="text-blue-500 font-normal font-Manrope leading-snug">53%</span><span className="text-black text-base font-normal font-Manrope leading-snug"> and get </span><span className="text-blue-500 text-base font-normal font-Manrope leading-snug">6 extra Clarifision</span><span className="text-black text-base font-normal font-Manrope leading-snug"> for only </span><span className="text-blue-500 text-base font-normal font-Manrope leading-snug">$14 Each</span><span className="text-black text-base font-normal font-Manrope leading-snug">.</span></div>
                    </div>
                </div>
                <div className="flex-col justify-start items-center gap-5 flex ss:gap-14 w-full">
                    <div className=" flex-col w-[100%] justify-start items-center gap-3 flex ss:w-[100%]">
                        <div className="px-16 py-4 bg-lime-600 rounded-[50px] flex-col justify-center items-center gap-2.5 flex w-[100%] ss:w-[100%]">
                            <div className=" inline-flex w-full">
                                <p className="text-white text-xl font-bold font-Manrope uppercase text-center w-full ss:text-xl">
                                    Yes - Claim my discount
                                </p>
                                <img className="right-14 relative ss:right-0 ss:w-3 h-6" src={line} alt="" />
                            </div>
                        </div>
                        <div className="self-stretch px-4 py-2 rounded border border-stone-300 justify-around items-center gap-3 inline-flex ss:flex-col">
                            <div className="justify-center items-center gap-3 inline-flex text-[13px] ss:text-[10px]">
                                <div className="text-neutral-600 font-normal font-Manrope capitalize leading-none">Free shipping</div>
                                <div className="w-4 h-[0px] rotate-90 border border-stone-300"></div>
                                <div className="gap-2.5 flex">
                                    <img src={lock} alt="" />
                                    <div className="text-center text-neutral-600 font-normal font-Manrope capitalize leading-[18px]">Secure 256-bit SSL encryption.</div>
                                </div>
                            </div>
                            <div className="w-4 h-[0px] rotate-90 border border-stone-300 ss:hidden"></div>
                            <div>
                                <div className="w-[100%] mb-4 h-[0px] rotate border border-stone-300 hidden ss:block"></div>
                                <div className="justify-center items-center gap-0.5 flex ss:w-full ss:gap-3 ss:mb-2">
                                    <div className="w-6 h-3.5 relative ss:w-10 ss:h-5">
                                        <img src={visa} alt="" />
                                    </div>
                                    <div className="w-6 h-3.5 relative ss:w-10 ss:h-5">
                                        <img src={shoppay} alt="" />
                                    </div>
                                    <div className="w-6 h-3.5 relative ss:w-10 ss:h-5">
                                        <img src={paypal} alt="" />
                                    </div>
                                    <div className="w-6 h-3.5 relative ss:w-10 ss:h-5">
                                        <img src={mastercard} alt="" />
                                    </div>
                                    <div className="w-6 h-3.5 relative ss:w-10 ss:h-5">
                                        <img src={gpay} alt="" />
                                    </div>
                                    <div className="w-6 h-3.5 relative ss:w-10 ss:h-5">
                                        <img src={applepay} alt="" />
                                    </div>
                                    <div className="w-6 h-3.5 relative ss:w-10 ss:h-5">
                                        <img src={amex} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="text-red-600 text-lg font-medium font-Manrope underline uppercase">No thanks, I don’t want this.</div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                    <img className="w-[88px] h-[88px]" src={guarantee} />
                    <div className=""><span className="text-neutral-600 text-base font-normal font-Manrope leading-snug">If you are not completely thrilled with your Clarifion - We have a </span><span className="text-neutral-600 text-base font-bold font-Manrope leading-snug">30 day satisfaction guarantee</span><span className="text-neutral-600 text-base font-normal font-Manrope leading-snug">. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</span></div>
                </div>
            </div>
        </div>
    )
}

export default Center