

import LargeListingComponent from "@/components/LargeListingComponent";
import ReviewComponent from "@/components/ReviewComponent";
import OtherComponents from "@/components/ReviewComponents/OtherComponents";
import GetListingData from "@/components/functions/GetListingData";
import Header from "@/components/header";
import { useEffect } from "react";

export default function listingInfo({
    params,
}: {
    params:{listingid: string};
}) {

    return (
        <div className="flex flex-col items-center w-full  ">
            <Header alt={true} /> 
            <LargeListingComponent listingID={params.listingid}/>
            <p className="text-4xl font-bold mt-20  ">Users Reviews</p>
            <ReviewComponent />
            <p className="text-4xl font-bold mt-20  ">Other Listings</p>
            <OtherComponents listingId={params.listingid}/>
        </div>
    )
}