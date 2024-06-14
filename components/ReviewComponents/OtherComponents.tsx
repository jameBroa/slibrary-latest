'use client'

import { useEffect, useState } from "react"
import OtherComponentListing from "./OtherComponentListing"
import GetListingData from "../functions/GetListingData"
import { Listing } from "@/types/Listing"
import GetUserIdFromListingId from "../functions/GetUserIdFromListingId"
import GetUserListings from "../functions/GetUserListings"

interface OtherComponentsProps {
    listingId: string
}


// NOTE: this component is NOT a carousel and max should display 5 other listings

const OtherComponents: React.FC<OtherComponentsProps> = ({listingId}) => {

    const [otherListings, setOtherListings] = useState<Listing[]>();

    useEffect(() => {
        const getOtherListingsFromUser = async() => {
            const user = await GetUserIdFromListingId(listingId);
            let userListings = await GetUserListings(user);
            userListings = userListings.filter((listing: Listing) => listing.id != listingId)
            const userListingsSplit = userListings.slice(0, 5);
            setOtherListings(userListingsSplit);
        }
        getOtherListingsFromUser();
    }, [])

    return(
        <div className="lg:w-full md:w-[80%] sm:w-[90%]  flex flex-row md:flex-wrap sm:flex-wrap gap-4 justify-center mt-10 ">
            {otherListings && 
                otherListings.map((listing) => (
                    <OtherComponentListing key={listing.id} listingInfo={listing}/>
                ))    
            }
        </div>
    )
}

export default OtherComponents