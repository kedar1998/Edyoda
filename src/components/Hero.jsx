import {useState} from 'react'
import book from '../assets/book.svg'
import clock from '../assets/clock.svg'
import live from '../assets/live.svg'
import degree from '../assets/degree.svg'
import ads from '../assets/ads.svg'
import clockalert from '../assets/clockalert.svg'
import razorpay from '../assets/razorpay.svg'
import { TiTick } from "react-icons/ti";

const Hero = () => {

    const [plan, setPlan] = useState(12)
    const [total, setTotal] = useState(278)

    const handleClick = (e) =>{
        console.log(e.target.value);
        
        if(e.target.value == 12){
            setPlan(12)
            setTotal(278)
        }

        if(e.target.value == 6){
            setPlan(6)
            setTotal(248)
        }

        if(e.target.value == 3){
            setPlan(3)
            setTotal(198)
        }
    }

  return (
    <div className="bg-gradient-to-tr from-[#010103] to-[#28334e] md:h-screen pt-5 px-4">
        <div className="max-w-7xl mx-auto  px-1 py-1 flex flex-col md:flex-row text-white justify-between">
            {/* LEFT SECTION */}
            <div className="w-full md:w-2/3 ">
                <div>
                    <h2 className="text-2xl md:text-5xl font-semibold">Access curated courses worth</h2>
                    <h2 className="text-2xl md:text-5xl font-semibold">₹ <span className="line-through decoration-[#FF0000] decoration-4">18,500</span> at just <span className="text-[#0096FF]">₹ 99</span> per year!</h2>
                </div>

                <div className="mt-10 space-y-5 md:space-y-10">
                        {/* BOOK */}
                        <div className="flex items-center space-x-5 md:space-x-10">
                            <div>
                                <img src={book} alt="Book" className="w-8 md:w-10" />
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl leading-relaxed"><span className="text-[#0096FF]">100+</span> Job relevant courses</p> 
                            </div>
                        </div>

                        {/* CLOCK */}
                        <div className="flex items-center space-x-5 md:space-x-10">
                            <div>
                                <img src={clock} alt="Book" className="w-8 md:w-10" />
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl leading-relaxed"><span className="text-[#0096FF]">20,000+</span> Hours of content</p> 
                            </div>
                        </div>

                        {/* LIVE TV */}
                        <div className="flex items-center space-x-5 md:space-x-10">
                            <div>
                                <img src={live} alt="Book" className="w-10" />
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl leading-relaxed"><span className="text-[#0096FF]">Exclusive</span> webinar access</p> 
                            </div>
                        </div>

                        {/* DEGREE */}
                        <div className="flex items-center space-x-5 md:space-x-10">
                            <div>
                                <img src={degree} alt="Book" className="w-10" />
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl leading-relaxed">Scholarship worth <span className="text-[#0096FF]">₹94,500</span></p> 
                            </div>
                        </div>

                        {/* ADS */}
                        <div className="flex items-center space-x-5 md:space-x-10">
                            <div>
                                <img src={ads} alt="Book" className="w-10" />
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl  leading-relaxed"><span className="text-[#0096FF]">Ad Free</span> learning experience</p> 
                            </div>
                        </div>
                </div>
            </div>


            {/* RIGHT SECTION */}
            <div className="w-full md:w-1/3 bg-white rounded-lg text-black flex flex-col justify-between p-3 mt-5 md:mt-0">

                {/* HEADER SECTION */}
                <div>
                    <div className="flex justify-around">
                        {/* SIGN UP */}
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#0096FF] text-white font-semibold h-8 w-8 rounded-full flex justify-center items-center">1</div>
                            <p>Sign Up</p>
                        </div>

                        {/* SUBSCRIBE */}
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-[#0096FF] text-white font-semibold h-8 w-8 rounded-full flex justify-center items-center">2</div>
                            <p>Subscribe</p>
                        </div>
                    </div>
                    <div className="text-center my-2">
                        <h3 className="text-lg font-semibold">Select your subcription plan</h3>
                    </div>
                </div>

                {/* MAIN SECTION */}
                <div className="space-y-2">
                    {/* PLAN - 01 */}
                    <div className="flex items-center justify-between bg-[#E7E7E7] text-[#BEBEBE] p-1 rounded-md border-2 border-[#BEBEBE] relative">
                        <div className="flex items-center space-x-3">
                            <input type="radio" name="none" value="" className="h-6 w-6"  checked disabled />
                            <p>12 Months Subscription</p>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <p className="text-sm">Total <span className="font-semibold">₹ 99</span></p>
                            <p className="text-xs">₹ 8 /mo</p>
                        </div>
                        <p className="absolute top-0 left-20 text-xs bg-[#F77171] font-semibold px-2 rounded-b-md  text-white">Offer expired</p>
                    </div>

                    {/* PLAN - 02 */}
                    <div className="flex items-center justify-between bg-[#D7EDDD] text-black p-1 rounded-md border-2 border-[#47BA68] relative">
                        <div className="flex items-center space-x-3">
                            {/* <input type="radio" name="plan" value="" className="h-6 w-6" /> */}
                            <button value={12} className={`border-2 h-6 w-6 border-gray-400 rounded-full flex justify-center items-center ${plan == 12 ? 'bg-[#47BA68]' : ''}`} onClick={handleClick}>
                                {plan == 12 && <TiTick className="text-white " size={20} />}
                            </button>
                            <p>12 Months Subscription</p>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <p className="text-sm">Total <span className="font-semibold">₹ 179</span></p>
                            <p className="text-xs">₹ 15 <span className="text-[#BEBEBE]">/mo</span></p>
                        </div>
                        <p className="absolute top-0 left-20 text-xs bg-[#47BA68] font-semibold px-2 rounded-b-md  text-white">Recommended</p>
                    </div>

                    {/* PLAN - 03 */}
                    <div className="flex items-center justify-between  text-black p-1 rounded-md border-2 border-[#BEBEBE]">
                        <div className="flex items-center space-x-3">
                            {/* <input type="radio" name="plan" value="" className="h-6 w-6" /> */}
                            <button value={6} className={`border-2 h-6 w-6 border-gray-400 rounded-full flex justify-center items-center ${plan == 6 ? 'bg-[#47BA68]' : ''}`} onClick={handleClick}>
                                {plan == 6 && <TiTick className="text-white " size={20} />}
                            </button>
                            <p>6 Months Subscription</p>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <p className="text-sm">Total <span className="font-semibold">₹ 149</span></p>
                            <p className="text-xs">₹ 25 <span className="text-[#BEBEBE]">/mo</span></p>
                        </div>
                    </div>

                    {/* PLAN - 04 */}
                    <div className="flex items-center justify-between  text-black p-1 rounded-md border-2 border-[#BEBEBE]">
                        <div className="flex items-center space-x-3">
                            {/* <input type="radio" name="plan" value="" className="h-6 w-6" /> */}
                            <button value={3} className={`border-2 h-6 w-6 border-gray-400 rounded-full flex justify-center items-center ${plan == 3 ? 'bg-[#47BA68]' : ''}`} onClick={handleClick}>
                                {plan == 3 && <TiTick className="text-white " size={20} />}
                            </button>
                            <p>3 Months Subscription</p>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <p className="text-sm">Total <span className="font-semibold">₹ 99</span></p>
                            <p className="text-xs">₹ 33 <span className="text-[#BEBEBE]">/mo</span></p>
                        </div>
                    </div>

                    <hr className="border-t-2" />

                    {/* TOTAL */}
                    <div>

                        {/* SUBSCRIPTION FEE */}
                        <div className="flex justify-between text-sm px-4">
                            <p>Subscription Fee</p>
                            <p>₹ 18,500</p>
                        </div>

                        {/* LIMITED TIME OFFER */}
                        <div className="flex items-center justify-between bg-[#f9dad0] text-black p-1 rounded-md border-2 border-[#DE4313] my-2">
                            <div className="flex flex-col ">
                                <p className="text-sm font-bold text-[#DE4313]">Limited time offer</p>
                                <div className="flex space-x-2 text-[#DE4313]">
                                    <img src={clockalert} alt="time_alert" className="w-5" />
                                    <p className="text-sm">Offer valid till 25th March 2023 </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center py-2">
                                <p className="text-sm">- ₹ 18,401</p>
                            </div>
                        </div>

                        {/* TOTAL INCLUDING GST */}
                        <div className="flex justify-between px-4">
                            <p><span className="font-semibold">Total</span> (Incl. of 18% GST)</p>
                            <p className="font-semibold">₹ {total}</p>
                        </div>


                    </div>

                    
                </div>

                {/* FOOTER SECTION */}
                <div className="mt-5">
                    <div className="flex flex-col-reverse md:space-y-0 md:flex-row justify-between">
                        <button className="text-[#F77171] border-2 border-[#F77171] rounded-md w-full md:w-40 py-1 mt-3 md:mt-0">CANCEL</button>
                        <button className="bg-[#47BA68] w-full md:w-40 py-1 text-white rounded-md">PROCEED TO PAY</button>
                    </div>
                    <img src={razorpay} alt="razorpay" className="mt-3 w-24" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero