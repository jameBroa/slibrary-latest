import SearchResultsComponent from "@/components/SearchComponents/SearchResultsComponent";
import Header from "@/components/header";

interface SearchPageProps {
    query?: string 
}


const Page: React.FC<SearchPageProps> = ({query}) => {
    return(
        <div className="flex flex-col w-full ">
            <Header alt={true}/>
            <SearchResultsComponent/>
        </div>
    )
}

export default Page;