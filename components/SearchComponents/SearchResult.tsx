import { Listing } from "@/types/Listing";
import BagButton from "../BagButton";
import OfferButton from "../OfferButton";

interface SearchResultProps {
    listingInfo: Listing
}


const SearchResult: React.FC<SearchResultProps> = ({listingInfo}) => {
    return (
        <div className="md:w-[20%] flex flex-col h-[50vh] gap-1 items-center p-2 bg-gray-100">
            <div className="w-[95%] h-[50%] bg-gray-200 rounded-md flex flex-row items-center justify-center">
                <p>img</p>
            </div>
            <div className="w-full h-auto flex flex-col gap-4 ">
                <p className="text-xl h-16">{listingInfo.bookName}</p>
                <p className="text-xs h-16  overflow-clip">{listingInfo.bookDesc}</p>
                <BagButton width={42}/>
                <OfferButton width={42}/>
            </div>
            
        </div>
    )
}

export default SearchResult