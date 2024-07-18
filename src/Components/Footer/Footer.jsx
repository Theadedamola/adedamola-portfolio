import { Link } from "react-router-dom"

const Footer = () => {

  const date = new Date().getFullYear()

  return (
    <div className="h-fit w-full p-16 flex flex-col space-y-10 items-center bg-[#171717]">
      <h1 className=" text-3xl md:text-5xl font-reyka text-center text-[#E14842]">
        Connect with me
      </h1>
      <hr className="w-full border border-solid border-[#E14842]" />
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-x-40">
        <div className="flex flex-col space-y-6 items-center">
          <p className="text-white">Send me a mail</p>
          <Link to={'mailto:adedamolajose@gmail.com'}>
            <p className="text-[#E14842] text-3xl font-reyka">
              adedamolajose@gmail.com
            </p>
          </Link>
        </div>
        <div className="flex flex-col space-y-6 items-center">
          <p className="text-white">Hit me up on socials</p>
          <ul className="flex space-x-6 text-[#E14842] font-reyka text-3xl">
            <li>
              <Link to={'https://www.behance.net/damolaalausa'}>be</Link>
            </li>
            <li>
              <Link
                to={
                  'https://github.com/Theadedamola?tab=overview&from=2024-07-01&to=2024-07-18'
                }
              >
                gh
              </Link>
            </li>
            <li>
              <Link>tw</Link>
            </li>
            <li>
              <Link
                to={
                  'https://www.linkedin.com/in/adedamola-alausa/?profileId=ACoAADo6sI0B8r3x19-qYVm_jcnJ86tqpDSX3Cg'
                }
              >
                in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white text-center">
        Designed and built with ❤️. ©Adedamola Alausa {date}
      </p>
    </div>
  )
}
export default Footer