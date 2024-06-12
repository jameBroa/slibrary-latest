
interface ColouredSentenceProps {
    firstPart: string,
    secondPart: string,
    fontSize: string
}



const ColouredSentence:React.FC<ColouredSentenceProps> = ({firstPart, secondPart, fontSize="md"}) => {
    return(
        <div className="flex flex-row w-full h-full items-center justify-center gap-1">
                <p className={`text-${fontSize}`}>{firstPart}</p>
                <p className={`text-main text-${fontSize}`}>{secondPart}</p>
        </div>
    )
}

export default ColouredSentence