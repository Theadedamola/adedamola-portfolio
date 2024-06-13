import { Link } from 'react-router-dom'

const Frontend = () => {
  return (
    <div className="relative w-full h-screen bg-hero-bg bg-cover bg-no-repeat px-6 md:px-16 flex flex-col items-center pt-[130px]">
      <div className="z-10 absolute left-0 top-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-xl"></div>
      <div className="z-9 absolute left-0 top-0 w-full h-screen">
        <img src="" alt="" />
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
    </div>
  )
}
export default Frontend
