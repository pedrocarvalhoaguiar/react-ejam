import lock from '../assets/footer/lock.svg'

function Footer() {
    return (
        <div className="w-full h-[5rem] mt-[5rem] bg-slate-800 flex gap-3 justify-around ss:flex-col ss:text-xl ss:p-4 ss:h-[8rem]">
            <div className="py-2 rounded justify-start items-center gap-4 inline-flex ss:justify-around">
                <div className="text-white font-normal font-Manrope capitalize leading-snug">Copyright (c) 2023</div>

                <div className="w-6 h-[0px] rotate-90 border border-white"></div>
                <div className="text-white font-normal text-center font-Manrope lowercase leading-snug">Clarifionsupport@clarifion.com</div>

            </div>
            <div className="justify-start items-center gap-4 inline-flex ss:text-center ss:justify-center">
                <img src={lock} alt="" />
                <div className="text-center text-white  font-normal font-Manrope capitalize leading-normal">Secure 256-bit SSL encryption.</div>
            </div>
        </div>
    )
}

export default Footer