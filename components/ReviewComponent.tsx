'use client'
import { useState } from "react"
import ReviewProgressBar from "./ReviewProgressBar"
import StarLine from "./StarLine"
import ReactStars from 'react-rating-star-with-type';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReviewQualityComponent from "./ReviewQualityComponent";
const ReviewComponent = () => {


    //TODO: Need to update Listing Table in DynamoDB to include rating information


    //State vars
    const [star, setStar] = useState<number>(0);

    // Functions

    const onChange = (e:number) => {
        setStar(e);
    }

    return (
    <div className="w-full flex flex-col gap-4">
        <div className="flex flex-row gap-12 w-full items-center mt-8 lg:h-36 justify-center  ">

            <div className="h-full flex flex-col gap-2 justify-center items-center  ">
                <h1 className="font-semibold text-5xl">4.3</h1>
                <div className="flex flex-row">
                    <ReactStars
                    onChange={onChange}
                    value={4.2}
                    isEdit={false}
                    size={24}
                    />
                </div>
                <p className="text-center">1000 star ratings</p>
            </div>



            <div className="flex flex-col  ">
                <StarLine starNumber={5} width={70}/>
                <StarLine starNumber={4} width={10}/>
                <StarLine starNumber={3} width={15}/>
                <StarLine starNumber={2} width={0}/>
                <StarLine starNumber={1} width={5}/>
            </div>

            
            
            <div className="h-full  w-48 flex flex-col justify-evenly  ">
                <CircularProgressbar className="h-[50%] font-semibold text-3xl" 
                value={63} 
                text={`${63}%`}
                styles={buildStyles({
                    strokeLinecap: 'round',
                    pathColor: `#28A6CB`
                })}
                />
                <p className="text-center">{63}% of users recommend this seller</p>
            </div>
        </div>

        <div className="w-full h-52 flex flex-row gap-16 items-center justify-center">
            <ReviewQualityComponent rating={4.6} quality={"Respond time"}/>
            <ReviewQualityComponent rating={3.8} quality={"Shipping time"}/>
            <ReviewQualityComponent rating={2.3} quality={"Accuracy"}/>
        </div>

    </div>
    )
}

export default ReviewComponent