import OtherComponentListing from "./OtherComponentListing"

interface OtherComponentsProps {
    userId?: string
}

//for now we are letting userId be undefined but we don't want this behaviour


// NOTE: this component is NOT a carousel and max should display 5 other listings

const OtherComponents: React.FC<OtherComponentsProps> = ({userId}) => {
    return(
        <div className="w-full flex flex-row gap-4 justify-center mt-10 ">
            <OtherComponentListing/>
            <OtherComponentListing/>
            <OtherComponentListing/>
            <OtherComponentListing/>
            <OtherComponentListing/>
        </div>
    )
}

export default OtherComponents