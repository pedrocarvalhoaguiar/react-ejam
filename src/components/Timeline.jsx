import tickeCircle from '../assets/timeline/tick-circle.svg'

function Timeline() {
    return (
        <div className="w-full mt-[5rem] justify-around items-center inline-flex ss:bg-gray-100 ss:mt-0 ss:pt-10">
            <div className="justify-start items-center gap-5 flex ss:flex-col text-center ss:align-center">
                <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-lime-400 rounded-full border-2 border-lime-400" />
                    <div className="w-6 h-6 left-[7px] top-[8px] absolute">
                        <img src={tickeCircle} alt="" />
                    </div>
                </div>
                <div className="text-black text-xl font-normal font-Manrope capitalize leading-snug ss:hidden">Step 1 : Cart Review</div>
                <div className="text-black text-xl font-normal font-Manrope capitalize leading-snug hidden ss:block">Cart Review</div>
            </div>
            <div className="justify-start items-center gap-5 flex ss:flex-col text-center ss:align-center">
                <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-lime-400 rounded-full border-2 border-lime-400" />
                    <div className="w-6 h-6 left-[7px] top-[8px] absolute">
                        <img src={tickeCircle} alt="" />
                    </div>
                </div>
                <div className="text-black text-xl font-normal font-Manrope capitalize leading-snug ss:hidden">Step 2 : Checkout</div>
                <div className="text-black text-xl font-normal font-Manrope capitalize leading-snug hidden ss:block">Checkout</div>

            </div>
            <div className="justify-start items-center gap-5 flex ss:flex-col text-center ss:align-center">
                <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-blue-500 rounded-full border-2 border-blue-500" />
                    <div className="w-6 h-6 left-[6px] top-[5px] absolute">
                        <span className="text-white text-xl">3</span>
                    </div>
                </div>
                <div className="text-black text-xl font-bold font-Manrope capitalize leading-snug ss:hidden">Step 3 : Special Offer</div>
                <div className="text-black text-xl font-bold font-Manrope capitalize leading-snug hidden ss:block">Special Offer</div>

            </div>
            <div className="justify-start items-center gap-5 flex ss:flex-col text-center ss:align-center">
                <div className="w-10 h-10 relative">
                <div className="w-10 h-10 left-0 top-0 absolute rounded-full border-2 border-blue-500" />
                    <div className="w-6 h-6 left-[6px] top-[5px] absolute">
                        <span className="text-blue-500 text-xl">4</span>
                    </div>
                </div>
                <div className="text-black text-xl font-normal font-Manrope capitalize leading-snug ss:hidden">Step 4 : Confirmation</div>

                <div className="text-black text-xl font-normal font-Manrope capitalize leading-snug hidden ss:block">Confirmation</div>
            </div>
        </div>
    )
}

export default Timeline