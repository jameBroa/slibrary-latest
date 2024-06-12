import ReviewProgressBar from "./ReviewProgressBar"

interface StarLineProps{
    starNumber: number,
    width: number,
}


const StarLine: React.FC<StarLineProps> = ({starNumber, width}) => {
    return(
        <div className="flex flex-row items-center gap-2">
            <p className="text-slate-600 text-sm italic w-12">{starNumber} stars</p>
            <ReviewProgressBar width={width}/>
            <p className="text-slate-600 text-sm">{width}%</p>
        </div>
    )
}

export default StarLine