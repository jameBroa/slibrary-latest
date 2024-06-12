'use client';
import Image from "next/image";
import Search from '@/components/search';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '@/config/firebase';
import Header from "@/components/header";
import Home from "./home";
import { useEffect } from "react";



export default function Landing() {

  const [user] = useAuthState(auth)
  
  useEffect(() => {
    const getTokens = async() => {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get('code');
      console.log(authorizationCode);
      const clientId = process.env.CLIENT_ID;
      const clientSecret = process.env.CLIENT_SECRET;
      const redirectUri = "http://localhost:3000";
      const tokenUrl = process.env.CLINET_TOKENURL;

      const encodedCredentials = btoa(`${clientId}:${clientSecret}`)
      const formData = new URLSearchParams();

      if(clientId && authorizationCode && clientSecret && tokenUrl) {
        formData.append("grant_type", "authorization_code");
        formData.append("client_id", clientId);
        formData.append("client_secret", clientSecret);
        formData.append("code", authorizationCode);
        formData.append("redirect_uri", redirectUri)

        const res = await fetch(tokenUrl, {
          method:"POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${encodedCredentials}`
          },
          body: formData
        });

        const data = await res.json();

        console.log("data, ", data);


        const url = `${process.env.REST_URL}/private`
        const header = {
            'Authorization': `Bearer ${data.id_token}`
        }
        const res2 = await fetch(url, {
            method:"GET",
            headers: header
        })

        const data2 = await res2.json()

        console.log("data2", data2);

        

      }
    }



    getTokens();
  }, [])

  return (
    <div className="flex flex-col">
      <Header alt={false}/>
      <Home/>
    </div>
  );
}
