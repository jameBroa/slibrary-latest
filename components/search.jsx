
const Search = () => {
  return (
    <div className="w-full flex flex-col justify-evenly align-center items-center ">
        <div className="w-[50%] flex flex-row justify justify-center">
            <h1 className="text-9xl text-main">S</h1>
            <h1 className="text-9xl">/Library</h1>
         </div>
         <input className="w-[50%] h-16 rounded-3xl border-solid border-2 border-black pl-3 focus:scale-110 transition-transform "></input>
         <div className="w-[50%] flex flex-row justify-start ">
            <p className="text-decoration-line: underline text-gray-400">Search options</p>
         </div>
    </div>
  )
}

export default Search