'use client';
import Image from "next/image";
import Search from '@/components/search';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '@/config/firebase';
import Header from "@/components/header";
import Home from "./home";



export default function Landing() {

  const [user] = useAuthState(auth)
  

  return (
    <div className="flex flex-col">
      <Header alt={false}/>
      <Home/>
    </div>
  );
}
