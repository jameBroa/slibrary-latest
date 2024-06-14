'use client'

import React, { useEffect, useState } from 'react'
import GetListingData from './functions/GetListingData'
import { Listing } from '@/types/Listing'
import ColouredSentence from './ColouredSentence'
import BagButton from './BagButton'
import OfferButton from './OfferButton'

interface LargeListingComponentProps {
    listingID: string
}


const LargeListingComponent:React.FC<LargeListingComponentProps> = ({listingID}) => {

  // State vars
  const [listing, setListing] = useState<Listing>();  

  useEffect(() => {
    
    const fetchListingData = async () => {
        try{
          const listingData = await GetListingData(listingID)
          setListing(listingData);
        } catch (error){
          console.log("Error: ", error)
        }
    } 

    fetchListingData();
  }, [listingID])

  return (
    <div className="flex md:flex-row sm:flex-col  lg:w-[80%] md:w-[80%] sm:w-[100%] md:h-[60vh] sm:h-[95vh] sm:justify-center sm:items-center">
      <div className="flex flex-row md:h-full sm:h-[80vh] lg:w-[40%] md:w-[80%] sm:w-[95%] ">
        <div className="bg-gray-200 rounded-xl h-[100%] w-[70%] flex flex-row justify-center items-center">
          <p>img 1</p>

        </div>
        <div className="h-full w-[30%] flex flex-col justify-between ">
          <div className="h-[33%] w-full bg-gray-300 rounded-sm flex flex-row items-center justify-center">
            <p>img 2</p>
          </div>
          <div className="h-[33%] w-full bg-gray-300 rounded-sm flex flex-row items-center justify-center">
            <p>img 3</p>
          </div>
          <div className="h-[33%] w-full bg-gray-300 rounded-sm flex flex-row items-center justify-center">
            <p>img 4</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-[60%] md:w-[40%] sm:w-[100%] ">
        {listing && (
          <div className="w-[100%] h-[100%] flex flex-col justify-evenly lg:p-10 md:p-6 sm:p-6">
            <p className="lg:text-5xl md:text-3xl sm:text-3xl font-bold">{listing.bookName}</p>
            <p className="lg:text-xl md:text-sm sm:text-md font-light">{listing.bookDesc}</p>
            <div className="flex flex-col gap-4">
              <p className="lg:text-2xl md:text-lg sm:text-3xl font-light gap-4">£{listing.price}</p>
              <div className="flex flex-row gap-4">
                <BagButton width={20} textSize={'sm'}/>
                <OfferButton width={20} textSize='sm'/>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
    
  )
}

export default LargeListingComponent
