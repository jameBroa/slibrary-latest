'use client';
import Image from "next/image";
import Search from '@/components/search';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '@/config/firebase';
import Header from "@/components/header";



export default function Home() {

  const [user] = useAuthState(auth)
  

  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-4 w-full h-[85vh] ">

      {/* <p className="lg:col-span-1 sm:col-span-12 text-4xl font-bold">Test</p> */}
      


      <div className="col-span-12 row-span-6 flex flex-row justify-center">
        <Search/>
      </div>
      <div className="col-span-12 row-span-1 ">
          <div className="flex flex-row justify-center ">
            <p className="font-semibold w-[50%] justify-start text-main text-xl">Newly added</p>
          </div>
      </div>
      <div className="col-span-12 flex flex-row justify-center">
        <div className="border w-[50%] h-[30vh] border-black">
          <p>test</p>
        </div>
      </div>
      

    </div>
  );
}
