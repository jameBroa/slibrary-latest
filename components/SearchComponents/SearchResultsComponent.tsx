'use client'

import { useEffect, useState } from "react"
import GetListingData from "../functions/GetListingData"
import { Listing } from "@/types/Listing"
import SearchResult from "./SearchResult"
import GetAllListings from "../functions/GetAllListings"

interface SearchResultsComponentProps {
    query?: string
}

// Here we will perform the query on the API to retrieve from DynamoDB

const SearchResultsComponent: React.FC<SearchResultsComponentProps> = ({query}) => {
    
    const [searchResults, setSearchResults] = useState<Listing[]>([]);

    useEffect(() => {

        const searchQuery = async() => {
            // For now all we are retrieving all listings bc cba do the backend rn
            const res = await GetAllListings();
            console.log(res);
            setSearchResults(res);
        }

        searchQuery();
    }, [])
    
    
    return (
        <div className="flex flex-row flex-wrap justify-center w-full gap-5">
            {searchResults && (
                searchResults.map((result, id) => {
                    return (
                        <SearchResult key={id} listingInfo={result}/>
                    )
                })
            )}
        </div>
    )
}

export default SearchResultsComponent