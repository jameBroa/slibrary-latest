
interface ReviewProgressBarProps{
    width:number
}

const ReviewProgressBar: React.FC<ReviewProgressBarProps> = ({width}) => {
    return(
        <div className="w-52 h-2 bg-maingray rounded-3xl">
            <div style={{width: `${width}%`}} className={`h-full bg-main rounded-3xl block`}/>
        </div>
    )
}

export default ReviewProgressBar