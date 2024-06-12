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
    <div className="flex flex-row  lg:w-[80%] h-[60vh]">
      <div className="flex flex-row  lg:w-[40%]">
        <div className="bg-gray-200 rounded-xl h-full w-[70%] flex flex-row justify-center items-center">
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
      <div className="flex flex-col lg:w-[60%]">
        {listing && (
          <div className="w-[100%] h-[100%] flex flex-col justify-evenly p-10">
            <p className="text-5xl font-medium">{listing.bookName}</p>
            <p className="text-xl font-light">{listing.bookDesc}</p>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-l gap-4ight">£{listing.price}</p>
              <div className="flex flex-row gap-4">
                <BagButton/>
                <OfferButton/>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
    
  )
}

export default LargeListingComponent
