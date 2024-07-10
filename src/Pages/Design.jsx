import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'
import { useContext, useState, useEffect } from 'react'
import arrow_right from '../Components/assets/arrow-right.svg'

const Design = () => {
  const { designData, caseStudy } = useContext(Context)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('')
  const [animate, setAnimate] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handlePrevClick = () => {
    setDirection('left')
    setAnimate(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? designData.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    setDirection('right')
    setAnimate(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === designData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentWork = designData[currentIndex]

  return (
    <div className="relative w-full h-screen px-6 md:px-16 flex flex-col items-center pt-[130px]">
      <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-xl"></div>
      <div className="">
        <img
          className="z-11 absolute left-0 top-0 w-full h-screen"
          src={currentWork.thumbnail}
          alt=""
        />
      </div>
      <div className="z-40 relative flex justify-between w-full">
        <Link to="/design">
          <h1 className="text-4xl lg:text-5xl font-reyka text-white">
            Design.
          </h1>
        </Link>
        <Link to="/frontend">
          <h1 className="text-4xl lg:text-5xl font-reyka text-white">
            Frontend.
          </h1>
        </Link>
      </div>
      <Link to={`/design/${currentWork.name}`} className="mt-14 lg:mt-8">
        <img
          className={`z-40 relative w-[320px] h-[265px] md:w-[350px] md:h-[285px] rounded-3xl transform duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-90' : 'opacity-0 scale-100'
          } transform ${
            animate
              ? direction === 'left'
                ? 'animate-slide-in-left'
                : 'animate-slide-in-right'
              : ''
          }`}
          src={currentWork.thumbnail}
          alt=""
        />
      </Link>
      <div className="z-40 relative mt-6 px-7 py-2 md:px-10 md:py-6 flex flex-col items-center space-y-6 bg-black bg-opacity-25 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        <Link to={`/design/${currentWork.name}`}>
          <h1
            className={`text-white text-xl md:text-2xl w-[300px] md:w-[400px] h-[50px] text-center delay-300 ${
              isVisible ? 'opacity-100 scale-90' : 'opacity-0 scale-100'
            }`}
          >
            {currentWork.name}
          </h1>
        </Link>
        <div className="flex space-x-4">
          <button
            onClick={handlePrevClick}
            className="bg-[#cfcaca6e] bg-opacity-10 backdrop-blur-3xl rounded-full p-2"
          >
            <img className="rotate-180" src={arrow_right} alt="" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-[#cfcaca6e] bg-opacity-10 backdrop-blur-3xl rounded-full p-2"
          >
            <img src={arrow_right} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Design
