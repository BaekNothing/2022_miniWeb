import '../App.css'; 
//import axios from "axios";
import React, { useEffect } from 'react';
import { sceneData, pageData, userSelectData, baseHigherData } from '../Data/AppVars';
import RenderLineChart from '../Data/LineChartDrawer';
import RaderChart from '../Data/RaderChartDrawer';

function RenderResultPage(prop) {
    const { setPageIndex, setPrevIndex, prevIndex} = pageData();
    const { setUserSelect, userSelect } = userSelectData();
    const { setSceneIndex } = sceneData();

    useEffect(() => {
        
    }, [])

    return (
        <div className="main-body" key="introPage">
            <p>this_Is_result_Page</p>
            <button onClick={() => {
                sendData(userSelect, prevIndex)
                setSceneIndex(0);
                clearAlldata(setPageIndex, setUserSelect, setPrevIndex);
            }}> press to GoHome</button>
            <RaderChart />
            <RenderLineChart />

        </div>
    )
}

// *************** ACTION ***************

function sendData(userSelect, prevIndex){
    console.log("userSelect : " + userSelect);
    console.log("prevIndex : " + prevIndex);
    
}

function clearAlldata(setPageIndex, setUserSelect, setPrevIndex) {
    setPageIndex(0);
    setUserSelect([]);
    setPrevIndex([]);
}

export default RenderResultPage;