
// TAKES INPUT LISTING ID

export default async function GetListingData(listingId: string) {
    const finalURL: string = `${process.env.REST_URL}/listing?id=${listingId}`    
    const response = await fetch(finalURL);

    if(!response.ok){
        throw new Error("Failed to retrieve listing information");
    } 

    const res = await response.json();

    return res;
}