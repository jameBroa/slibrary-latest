'use client';
import UserInput from "@/components/userinput";
import { colours } from "@/constants/colours";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";



export default function Sell() {

    // State vars
    const [images, setImages] = useState<File[]>([])
    const [image, setImage] = useState<File | null>(null);
    const [test, setTest] = useState<boolean>(false);
    const [listingName, setlistingName] = useState<string>();
    const [listingDesc, setListingDesc] = useState<string>();
    const [listingPrice, setListingPrice] = useState<string>();

    // Photo input
    const hiddenFileInput = useRef<HTMLInputElement | null>(null);
    const handlePhotoChange = (e: React.FormEvent<HTMLInputElement>) => {
        const img = e.currentTarget.files?.[0];
        console.log(e.currentTarget.files?.length)

        let currentImages = images;

        e.currentTarget.files && Array.from(e.currentTarget.files).map((file) => {
            currentImages?.push(file);
        })


        if(img){
            setImage(img);
            setImages(currentImages);
            setTest(true);
        }
    }

    // Submitting Logic
    const handleSubmit = () => {

        const UUID = require('uuid-int');

        const generator = UUID(Math.random() * 512)

        const uid = generator.uuid();
        


        fetch("process.env.REST_URL", {
            method: "POST",
            body: JSON.stringify({
                id:uid, //TODO: this id is manually inputted
                bookName:listingName,
                bookDesc:listingDesc,
                price:listingPrice
            }),
            headers: {
                "Content-type": "applications/json; charset=UTF-8"
            }
        }).then((response) => response.json()).then((json) => {console.log(json)});

        redirect("/sell")
    }

    return(
        <div className="lg:w-[75%] h-fit flex flex-col gap-4 items-center pb-72 ">
            <div className="w-full flex flex-row justify-center">
                <p className="text-4xl font-medium text-decoration-line: underline">Create a listing</p>
            </div>
            {/* things below divider */}
            <input  type="file" multiple onChange={handlePhotoChange} ref={hiddenFileInput} style={{display:'none'}}/> 
            <div className="flex flex-row justify-center h-[45vh] w-[75%] bg-gray-100 rounded-2xl ">
                <div className="w-[50%] flex flex-col justify-start pt-2 pl-4 gap-2">
                    <UserInput 
                    title={"Listing name"} 
                    supptext={"Choose a title users can search for this listing by"} 
                    mandatory={true}
                    onChange={setlistingName}
                    />
                    <UserInput 
                    title={"Listing Description"} 
                    supptext={"Choose a description which best describes what the listing is."} 
                    mandatory={true}
                    large={true}
                    onChange={setListingDesc}
                    />
                    <UserInput 
                    title={"Listing Price"} 
                    supptext={"Choose a price which you want to charge users by"} 
                    mandatory={true}
                    onChange={setListingPrice}
                    />
                </div>

                <div className="w-[50%] flex flex-col items-start gap-4 justify-start pt-2 ">
                    <div >
                        <div className="flex flex-row">
                            <p className="text-2xl font-light">Photos</p>
                            <p className="text-2xl font-light text-red-600">*</p>
                        </div>

                        <p className="text-sm font-light text-black font-style: italic">Add at least one photo (max 6) in .png or .jpeg format</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">  
                        <div onClick={() => {hiddenFileInput.current && hiddenFileInput.current.click();}}className="h-36 w-36 border-2 border-dashed border-black cursor-pointer ">
                            {test && (
                                <div className="w-full h-full">
                                    <img className="w-full h-full" src={URL.createObjectURL(images[0])}/>
                                </div>
                            )}
                            {!test && (
                                <div className="flex flex-col h-full w-full  justify-center items-center ">
                                    <IoCameraOutline style={{color:colours.main}} className="w-14 h-14"/>
                                    <p className="text-black">Add a photo</p>
                                </div>
                            )}
                        </div>
                        <div className="h-36 w-36 bg-gray-300 rounded-sm">
                        </div>
                        <div className="h-36 w-36 bg-gray-300 rounded-sm">
                        </div>
                        <div className="h-36 w-36 bg-gray-300 rounded-sm">
                        </div>
                        <div className="h-36 w-36 bg-gray-300 rounded-sm">
                        </div>
                        <div className="h-36 w-36 bg-gray-300 rounded-sm">
                        </div>
                    </div>
                </div>  
            </div>

            <div className="flex flex-row w-full justify-center gap-[10%] ">
                <button className="w-52 h-12 rounded-3xl bg-black hover:scale-105"><p className="text-white text-lg font-light">How does it work?</p></button>
                <button onClick={handleSubmit} className="w-52 h-12 rounded-3xl bg-main hover:scale-105"><p className="text-white text-xl font-light">Submit</p></button>
            </div>
        </div>
    )
}