import adedamolaslogo from '../assets/adedamolaslogo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="relative">
      <div className="fixed z-50 w-[90%] md:w-[85%] lg:w-[90%] h-20 my-6 mx-6 md:mx-16 bg-black bg-opacity-40 backdrop-blur-xl rounded-3xl flex justify-between items-center p-4 sm:p-10 2xl:w-[95%]">
        <Link to='/'>
          <div className="flex items-center space-x-4">
            <img className="w-10" src={adedamolaslogo} alt="" />
            <p className="text-white font-reyka text-2xl">adedamola</p>
          </div>
        </Link>
        <div className="bg-[#E14842] p-3 rounded-full text-white cursor-pointer">
          <button>Contact me</button>
        </div>
      </div>
    </div>
  )
}
export default Navbar
