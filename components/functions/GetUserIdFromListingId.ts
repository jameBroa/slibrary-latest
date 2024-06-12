import GetListingData from "./GetListingData";

export default async function GetUserIdFromListingId(listingId: string){
    const res = await GetListingData(listingId);
    return res.user;
}