import { useEffect, useState } from 'react'

const DesignDetails = ({ design }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <div>
      <div className="relative w-full h-screen px-6 md:px-16 flex flex-col items-center pt-[130px]">
        <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-35 backdrop-blur-xl"></div>
        <div className="">
          <img
            className="z-11 absolute left-0 top-0 w-full h-screen"
            src={design.thumbnail}
            alt=""
          />
        </div>
        <div className="z-40 relative my-auto flex flex-col space-y-6">
          <h1
            className={`text-white text-[42px] sm:text-7xl font-reyka transition-all transform duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[30px]'
            }`}
          >
            {design.name}
          </h1>
          <p
            className={`text-white text-xl transition-all transform duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100  translate-y-0'
                : 'opacity-0 translate-y-[30px]'
            }`}
          >
            {design.subtext}
          </p>
        </div>
      </div>
      <div className="p-6 md:p-16 flex flex-col space-y-6">
        <h1 className="text-2xl sm:text-6xl font-reyka my-3">
          {design.heading1}
        </h1>
        <p className="uppercase font-bold">{design.subheading1}</p>
        <p className="text-[#4F4F4F]">{design.content1}</p>
        <p className="uppercase font-bold">{design.subheading2}</p>
        <p className="text-[#4F4F4F]">{design.content2}</p>
        <h1 className="text-2xl sm:text-6xl font-reyka py-6">
          {design.heading2}
        </h1>
        <p className="uppercase font-bold">{design.subheading3}</p>
        <p className="text-[#4F4F4F]">{design.content3}</p>
        <img src={design.image1} alt={design.subheading3} />
        <p className="uppercase font-bold">{design.subheading4}</p>
        <p className="text-[#4F4F4F]">{design.content4}</p>
        <img src={design.image2} alt={design.subheading4} />
        <p className="uppercase font-bold">{design.subheading5}</p>
        <p className="text-[#4F4F4F]">{design.content5}</p>
        <img src={design.image3} alt={design.subheading5} />
        <p className="uppercase font-bold">{design.subheading6}</p>
        <p className="text-[#4F4F4F]">{design.content6}</p>
        <img src={design.image4} alt={design.subheading6} />
        <p className="uppercase font-bold">{design.subheading7}</p>
        <p className="text-[#4F4F4F]">{design.content7}</p>
        <img src={design.image5} alt={design.subheading7} />
        <p className="uppercase font-bold">{design.subheading8}</p>
        <p className="text-[#4F4F4F]">{design.content8}</p>
        <p className="uppercase font-bold">{design.subheading9}</p>
        <p className="text-[#4F4F4F]">{design.content9}</p>
      </div>
    </div>
  )
}
export default DesignDetails
