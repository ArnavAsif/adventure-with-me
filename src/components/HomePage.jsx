import { createContext, useEffect, useState } from "react";
import Slider from "./Slider";
import HomeDetails from "./HomeDetails";
import HomeEcho from "./HomeEcho";
import HomeTips from "./HomeTips";


// eslint-disable-next-line react-refresh/only-export-components
export const HomeDataContext = createContext(null)


const HomePage = () => {
    const [adventureData , setAdventureData] = useState([])

    useEffect(()=>{
        fetch('../../public/adventureData.json')
        .then(res => res.json())
        .then(data => setAdventureData(data))
    },[])
    
    const homeDataInfo = {
        adventureData
    }

    return (
        <HomeDataContext.Provider value={homeDataInfo}>
            <Slider></Slider>
            <HomeDetails></HomeDetails>
            <HomeEcho></HomeEcho>
            <HomeTips></HomeTips>
        </HomeDataContext.Provider>
    );
};

export default HomePage;