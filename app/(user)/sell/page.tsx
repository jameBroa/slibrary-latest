'use client';
import Header from "@/components/header";
import { colours } from "@/constants/colours";
import { useRef, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import Sell from "./Sell";


export default function SellLanding() {

    return(
        <div className="flex flex-col items-center">
            <Sell/>   
        </div>
    )
}