import { Link } from 'react-router-dom'
import { skillIcon } from '../assets/skillData'
import Skills from '../Skills/Skills'
import Marquee from 'react-fast-marquee'

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-hero-bg bg-cover bg-no-repeat px-6 md:px-16 flex flex-col items-center pt-[130px]">
      <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-xl"></div>
      <div className="z-40 relative flex justify-between w-full">
        <Link to="/design">
          <h1 className="text-4xl lg:text-5xl font-reyka text-white">Work.</h1>
        </Link>
        <Link to="/about">
          <h1 className="text-4xl lg:text-5xl font-reyka text-white">About.</h1>
        </Link>
      </div>
      <div className="z-40 relative w-full mt-[50px] flex flex-col items-center space-y-4">
        <h1 className="text-[42px] sm:text-7xl font-reyka text-white">
          Adedamola Alausa
        </h1>
        <h1 className="text-[42px] sm:text-7xl font-reyka text-white">
          UX Engineer
        </h1>
        <p className="text-white lg:w-full text-center">
          "The purpose of design is to make things better, not just look
          better." - Vitaly Friedman
        </p>
        <Link
          to="/design"
          className="bg-black p-3 rounded-full text-white cursor-pointer"
        >
          <button>View my work</button>
        </Link>
        <Marquee
          pauseOnHover
          style={{ width: '80%', marginTop: '50px' }}
          className="bg-black bg-opacity-25 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]"
        >
          <div className="flex space-x-10 px-6 py-10 ">
            {skillIcon.map((item, i) => {
              const { image, id } = item
              return <Skills key={id} image={image} />
            })}
          </div>
        </Marquee>
      </div>
    </div>
  )
}
export default Hero
