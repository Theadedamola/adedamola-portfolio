import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'
import { useContext, useState } from 'react'
import arrow_right from '../Components/assets/arrow-right.svg'

const Design = () => {
  const { designData } = useContext(Context)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('')

  const handlePrevClick = () => {
    setDirection('left')
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? designData.length - 1 : prevIndex - 1
      )
    }, 0)
  }

  const handleNextClick = () => {
    setDirection('right')
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === designData.length - 1 ? 0 : prevIndex + 1
      )
    }, 0)
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
      <div className="mt-14 lg:mt-8">
        <img
          className="z-40 relative w-[320px] h-[265px] md:w-[350px] md:h-[285px] rounded-3xl"
          src={currentWork.thumbnail}
          alt=""
        />
      </div>
      <div className="z-40 relative mt-6 px-7 py-2 md:px-10 md:py-6 flex flex-col items-center space-y-6 bg-black bg-opacity-25 backdrop-blur-sm rounded-3xl border border-[#2a2a2a31]">
        <h1 className="text-white text-xl md:text-2xl w-[300px] md:w-[400px] h-[50px] text-center">
          {currentWork.name}
        </h1>
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
