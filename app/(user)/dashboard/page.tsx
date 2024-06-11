'use client';
import React, { useEffect, useState } from 'react'
import { DocumentData, QueryDocumentSnapshot, addDoc, collection, getDocs, where } from 'firebase/firestore';
import {auth, firestore} from '@/config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { query } from 'firebase/firestore';
import { IoPeopleSharp } from 'react-icons/io5';
import { parseDocs } from '@/logic/ListingBuilder';
import ListingComponent from '@/components/ListingComponent';
import Image from 'next/image';
import {Listing} from '@/types/listing';
import EgPhoto from '@/testdata/eg-profile-pic.png'
//import StarRatingComponent from 'react-star-rating-component';

export default function Dashboard() {

    //Global auth state from Google
    const [user, loading] = useAuthState(auth);

    const [bookName, setBookName] = useState<string>("");
    const [bookDesc, setBookDesc] = useState<string>("");
    // Used for retrieving data from Firebase
    //const [userListings, setUserListings] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([]);

    const [userListings, setUserListings] = useState<Listing[]>([]);

    const [gotListings, setGotListings] = useState(false)
    const listingCollectionReference = collection(firestore, "listings")

    // Retrieves users listings from REST API
    useEffect(() => {
        if(user) {
            // Uncomment line below to test functionality through Firebase. 
            // readFromDatabase()

            const restURL = process.env.REST_URL +"/user?user=" + user.uid;
            console.log("restURL: ", restURL);

            if(typeof(restURL) === 'undefined'){
                throw new Error("API Link is undefined");
            }

            fetch(restURL)
            .then(response => response.json())
            .then(data => {
                setUserListings(data), 
                console.log(data)
            })
            .catch(error => console.log(error));
        }
    }, [user])

  return (
        <div className="w-full lg:mb-16  flex flex-col items-center space-y-10 overflow-x-hidden">
            {/* User information part */}
            <div className="md:w-[90%] lg:w-[75%] flex bg-gray-100 lg:rounded-xl md:rounded-lg sm:rounded-md lg:flex-row sm:justify-start sm:pl-4 md:justify-start md:space-x-10 lg:justify-start lg:space-x-10 lg:pl-4 items-center lg:h-52 md:h-48 sm:h-48 sm:w-[90%]">
                <div className="lg:w-48 md:w-36 lg:h-48 md:h-36 sm:w-32 sm:h-32 rounded-full">
                    {/* INSERT USER IMAGE HERE */}
                    {user != null && (
                        <Image
                        className="rounded-full"
                        // src={user.photoURL || ""}
                        src={EgPhoto}
                        alt={"Profile Picture"}
                        width={192}
                        height={192}
                        />
                    )}
                </div>
                <div className="flex flex-col pl-4">
                    <div className="flex flex-row w-[110%] justify-start space-x-4">
                        {!user && (
                            <p className="text-4xl font-semibold sm:text-sm">USER's page</p>
                        )}
                        {user && (
                            <p className="text-4xl font-semibold">{user.displayName}'s page</p>
                        )}
                        <button className="bg-gray-200 lg:w-32 sm:w-24 hover:bg-gray-300 rounded-md"><p className="text-sm">Edit Profile</p></button>
                    </div>
                    <div className="flex flex-row w-[100%] justify-start space-x-4 ">
                        <button className="rounded-sm"><p>11 sold</p></button>
                    </div>
                    <div className="w-[90%] ">
                        <p className="">insert user desc</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col divide-y space-y-2 w-full lg:pb-8 lg:items-center md:items-center sm:items-center">
                <div className=" flex flex-row justify-start space-x-4 lg:justify-start md:w-[90%] sm:w-[90%] lg:w-[75%]">
                    <p className="text-4xl font-semibold">Your current listings</p>
                    <button onClick={() => {console.log('Redirect to sell item')}} className="bg-slate-200 w-fit px-4 rounded-md">Create Listing</button>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:gap-4 md:gap-4 lg:gap-4 pt-2 lg:w-[75%] md:w-[90%] sm:w-[90%] lg:justify-center">
                    {userListings.map((doc) => {
                        return(
                            <ListingComponent 
                            key={doc.id} 
                            price={doc.price} 
                            bookDesc={doc.bookDesc} 
                            bookName={doc.bookName} 
                            />
                        )
                    })}

                </div>
            </div>
        </div>
  )
}

