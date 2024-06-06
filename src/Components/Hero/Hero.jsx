import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-hero-bg bg-cover bg-no-repeat px-16 flex flex-col items-center pt-[130px]">
      <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-xl"></div>
      <div className="z-40 relative flex justify-between w-full">
        <Link to='/work'>
          <h1 className="text-5xl font-reyka text-white">Work.</h1>
        </Link>
        <Link to='/about'>
          <h1 className="text-5xl font-reyka text-white">About.</h1>
        </Link>
      </div>
      <div className="z-40 relative mt-[100px] flex flex-col items-center space-y-4">
        <h1 className="text-7xl font-reyka text-white">Adedamola Alausa</h1>
        <h1 className="text-7xl font-reyka text-white">UX Engineer</h1>
        <p className="text-white">
          "The purpose of design is to make things better, not just look
          better." - Vitaly Friedman
        </p>
        <Link to='/work' className="bg-black p-3 rounded-full text-white cursor-pointer">
          <button>View my work</button>
        </Link>
      </div>
    </div>
  )
}
export default Hero
