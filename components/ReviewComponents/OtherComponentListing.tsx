
import { Listing } from "@/types/Listing";
import React, { useEffect, useState } from "react"
import BagButton from "../BagButton";
import OfferButton from "../OfferButton";

interface OtherComponentListingProps{
    listingInfo: Listing
}

//for now we allow listingId to be undefined for UI design purposes
 const OtherComponentListing: React.FC<OtherComponentListingProps> = ({listingInfo}) => {

    return (
        <div className="w-[25vh]  bg-gray-100 px-8 py-4 flex flex-col gap-2 items-center rounded-lg">
            <div className="w-[22vh] h-[25vh] bg-gray-200 rounded-md flex flex-row items-center justify-center">
                <p>img</p>
            </div>
            <div className="w-[22vh] flex flex-col gap-4">
                
                <p className="text-2xl font-semibold  h-16">{listingInfo.bookName}</p>
                <p className="text-xl font-semibold">£{listingInfo.price}</p>
                <div className="flex flex-col w-[22vh] items-center justify-center gap-2 ">
                    <BagButton width={52} textSize="md" />
                    <OfferButton width={52} textSize="md" />
                </div>
                
            </div>

        </div>
    )
 }

 export default OtherComponentListing