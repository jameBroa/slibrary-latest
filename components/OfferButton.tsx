import React from "react"
import ColouredSentence from "./ColouredSentence"


interface OfferButtonProps {
    width?: number
    textSize?: string
}

const OfferButton: React.FC<OfferButtonProps> = ({width=32, textSize="md"}) => {
    return (
        <button className={`h-12 w-${width} border-main border-2 rounded-2xl hover:scale-105`}>
            <ColouredSentence fontSize={textSize} firstPart="Make" secondPart="Offer"/>
        </button>
    )
}

export default OfferButton