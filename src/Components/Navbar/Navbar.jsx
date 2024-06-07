const Navbar = () => {
  return (
    <div className="relative">
      <div className="fixed z-50 w-[90%] h-20 my-6 mx-16 bg-black bg-opacity-40 backdrop-blur-xl rounded-3xl flex justify-between items-center p-10 2xl:w-[95%]">
        <div>
          <p>Logo</p>
          <img src="" alt="" />
        </div>
        <div className="bg-[#E14842] p-3 rounded-full text-white cursor-pointer">
          <button>Contact me</button>
        </div>
      </div>
    </div>
  )
}
export default Navbar
