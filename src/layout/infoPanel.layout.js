import {useState, useEffect} from "react";
import axios from "axios"
import SpinnerLoader from "../components/Spinner";
import moviesList from "../components/MoviesList";
import MoviesList from "../components/MoviesList";
function InfoPanel() {
    const [loaded, setDataLoaded] = useState(false)
    const [movieData, setMoviesData] = useState([])

    useEffect(()=>{
        const  fetchData = async () => {
            if (!loaded) {
                const result = await axios.get("https://run.mocky.io/v3/59fd9281-6696-45f0-92fa-08ec32d942fb")
                if (result.data) {
                    setDataLoaded(true)
                    setMoviesData(result.data)
                }
            }
        }
        fetchData()
    })
    return(
    <div className="App">
        <SpinnerLoader dataLoaded={loaded} />
        <MoviesList movies={movieData} />
    </div>
    )
}
export default InfoPanel