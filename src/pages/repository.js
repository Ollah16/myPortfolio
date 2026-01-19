import Repository from "../components/Repository";
import Header from "../components/header";
import TrackPage from "./trackPage";


const RepositoryPage = () => {
    const h2 = "Selected Open-Source Repositories"

    return (
        <div className="flex flex-col gap-10 h-fit">
            <TrackPage page={"Repositories"} />
            <Header h2={h2} />
            <Repository />
        </div>)
}

export default RepositoryPage