
import Image from "next/image";
import EgImage from '@/testdata/example-textbook.png';

interface ListingProps {
    price: string;
    bookDesc: string;
    bookName: string;
}

const ListingComponent: React.FC<ListingProps> = ({price, bookDesc, bookName}) => {
    return(
        <div className="w-full h-52 bg-gray-100 rounded-xl">
            <div className="flex h-52 flex-row justify-start space-x-4">
                <div className="flex flex-col w-[22%] items-start justify-start">
                    <Image
                    className="rounded-tl-md rounded-bl-md w-[100%] h-[100%]"
                    src={EgImage}
                    alt={`Image for ${bookName}`}
                    />
                </div>
                <div className="flex flex-col w-[75%] space-y-1 ">
                    <div className="flex flex-col justify-evenly h-[80%] w-[100%]">
                        <p className="text-xl font-semibold">{bookName}</p>
                        <p className="text-md">{bookDesc}</p>
                        <p className="text-decoration-line: underline">${price}</p>
                    </div>
                    <div className=" flex flex-row justify-start space-x-4">
                        <button className="h-8 bg-gray-300 rounded-md border-main hover:scale-105 lg:w-24 md:w-24 sm:w-16">
                            <p className="text-sm">Edit</p>
                        </button>
                        <button className="h-8 bg-gray-300 rounded-md border-main hover:scale-105 lg:w-24 md:w-24 sm:w-16">
                            <p className="text-sm">Delete</p>
                        </button>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default ListingComponent;