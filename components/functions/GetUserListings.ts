
export default async function GetUserListings(userId: string){
    const finalURL = `${process.env.REST_URL}/user?user=${userId}`

    const res = await fetch(finalURL);
    if(!res.ok) {
        throw new Error("Failed to retrieve users listings");
    }
    const ret = await res.json();

    return ret;
}