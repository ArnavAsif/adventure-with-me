import { createContext, lazy, Suspense, useEffect, useState } from "react";
import Slider from "./Slider";
import HomeTips from "./HomeTips";
const HomeDetails = lazy(()=> import("./HomeDetails"));
const HomeEcho = lazy(()=> import("./HomeEcho"));


// eslint-disable-next-line react-refresh/only-export-components
export const HomeDataContext = createContext(null)


const HomePage = () => {
    const [adventureData , setAdventureData] = useState([])

    useEffect(()=>{
        fetch('./adventureData.json')
        .then(res => res.json())
        .then(data => setAdventureData(data))
    },[])
    
    const homeDataInfo = {
        adventureData
    }

    return (
        <HomeDataContext.Provider value={homeDataInfo}>
            <Slider></Slider>
            <Suspense fallback={<div>Loading Features...</div>}>
                <HomeDetails></HomeDetails>
            </Suspense>
            <Suspense fallback={<div>Loading Features...</div>}>
                <HomeEcho></HomeEcho>
            </Suspense>
            <HomeTips></HomeTips>
        </HomeDataContext.Provider>
    );
};

export default HomePage;