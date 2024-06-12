import { CircularProgressbar, buildStyles } from "react-circular-progressbar"


interface ReviewQualityComponentProps {
    rating: number,
    quality: string
}

const ReviewQualityComponent: React.FC<ReviewQualityComponentProps> = ({rating, quality}) => {
    return(
        <div className="flex flex-col items-center gap-4">
            <CircularProgressbar className="lg:h-24 rounded-none font-semibold text-3xl" 
            value={Math.round(rating/5*100)} 
            text={`${rating}/5`}
            strokeWidth={18}
            styles={buildStyles({
                strokeLinecap: 'round',
                pathColor: `#28A6CB`
            })}
            />
            <p className="font-semibold text-xl">{quality}</p>
        </div>
)
}

export default ReviewQualityComponent