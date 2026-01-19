import Repository from "../components/Repository";
import Header from "../components/header";
import TrackPage from "./trackPage";


const RepositoryPage = () => {
    const title = "Selected Open-Source Repositories"

    return (
        <div className="flex flex-col gap-10 h-fit">
            <TrackPage page={"Repositories"} />
            <Header title={title} />
            <Repository />
        </div>)
}

export default RepositoryPage