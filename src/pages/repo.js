import RepoLinks from "../components/repo/repoLinks";
import Header from "../components/header";
import TrackPage from "../analytics/trackPage";


const RepositoryPage = () => {
    const h2 = "Repositories"

    return (
        <>
            <TrackPage page={"Repositories"} />
            <div>
                <Header h2={h2} />
                <RepoLinks />
            </div>
        </>)
}

export default RepositoryPage