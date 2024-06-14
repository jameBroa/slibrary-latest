
// Will return all Listings of TYPE Listing!!!!!

export default async function GetAllListings() {
    const finalURL: string = `${process.env.REST_URL}/listings`    
    const response = await fetch(finalURL);

    if(!response.ok){
        throw new Error("Failed to retrieve all listings");
    } 

    const res = await response.json();

    return res.listings;
}