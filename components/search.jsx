'use client'

import { useState } from "react"

const Search = () => {

  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // go to search page and search given query
    }
  }

  return (
    <div className="w-full flex flex-col justify-evenly align-center items-center ">
        <div className="w-[50%] flex flex-row justify justify-center">
            <h1 className="lg:text-9xl sm:text-8xl text-7xl text-main">S</h1>
            <h1 className="lg:text-9xl sm:text-8xl text-7xl">/Library</h1>
         </div>
         <input onKeyDown={handleSearch} onChange={handleInputChange} className="lg:w-[70%] md:w-[80%] sm:w-[85%] w-[90%] h-16 rounded-xl border-solid border-2 border-black pl-3 focus:scale-105 transition-transform "></input>
         <div className="cursor-pointer lg:w-[70%] md:w-[80%] sm:w-[85%] w-[90%] flex flex-row justify-start ">
            <p className="text-decoration-line: underline text-gray-400">Search options</p>
         </div>
    </div>
  )
}

export default Search