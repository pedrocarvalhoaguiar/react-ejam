import logo from '../assets/topLogo/logo.png'
import mcafee from '../assets/topLogo/mcafee.svg'
import norton from '../assets/topLogo/norton.svg'


function TopLogo() {
    return (
        <div className="w-full bg-white h-[100px] justify-between items-center inline-flex ss:justify-around">
            <div className=" ml-[9%]">
                <img className="ss:w-[60%]" src={logo} alt="" />
            </div>
            <div className="flex gap-5 mr-[10%] ss:flex ss:justify-end">
                <img className="ss:w-[20%]" src={mcafee} alt="" />
                <img className="ss:w-[20%]" src={norton} alt="" />
            </div>
        </div>
    )
}

export default TopLogo