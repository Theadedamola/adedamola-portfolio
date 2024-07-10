import { Link } from 'react-router-dom'
import { skillIcon } from '../assets/skillData'
import Skills from '../Skills/Skills'
import Marquee from 'react-fast-marquee'
import { useEffect, useState } from 'react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      setIsVisible(true)
    }, [])
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
        <h1
          className={`text-[42px] sm:text-7xl font-reyka text-white transform duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-90' : 'opacity-0 scale-100'
          }`}
        >
          Adedamola Alausa
        </h1>
        <h1
          className={`text-[42px] sm:text-7xl font-reyka text-white transform duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-90' : 'opacity-0 scale-100'
          }`}
        >
          UX Engineer
        </h1>
        <p
          className={`text-white lg:w-full text-center transform duration-1000 delay-400 ${
            isVisible ? 'opacity-100 scale-90' : 'opacity-0 scale-100'
          }`}
        >
          "The purpose of design is to make things better, not just look
          better." - Vitaly Friedman
        </p>
        <Link
          to="/design"
          className={`bg-black p-3 rounded-full text-white cursor-pointer transform duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-90' : 'opacity-0 scale-100'
          }`}
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
