import ColouredSentence from "./ColouredSentence"

interface BagButtonProps {
    width?: number
    textSize?: string
}

const BagButton:React.FC<BagButtonProps> = ({width=32, textSize="md"}) => {
    return (
        <button className={`h-12 w-${width} border-main border-2 rounded-2xl hover:scale-105`}>
            <ColouredSentence fontSize={textSize} firstPart="Add to" secondPart="Bag"/>
        </button>
    )
}

export default BagButton