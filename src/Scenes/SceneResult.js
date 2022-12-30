import '../App.css'; 
//import axios from "axios";
import React, { useEffect } from 'react';
import { textData, sceneData, pageData, userSelectData, mulitpliData, baseHigherData } from '../Data/AppVars';
import RenderLineChart from '../Data/LineChartDrawer';
import RaderChart from '../Data/RaderChartDrawer';

function RenderResultPage(prop) {
    const { setPageIndex, setPrevIndex, prevIndex} = pageData();
    const { setUserSelect, userSelect, SetUserName, userName } = userSelectData();
    const { setSceneIndex } = sceneData();

    useEffect(() => {

    }, [])

    return (
        <div className="main-body" key="introPage">
            <button onClick={() => {
                sendData(userSelect, prevIndex)
                setSceneIndex(0);
                clearAlldata(setPageIndex, setUserSelect, setPrevIndex, SetUserName);
            }}> press to GoHome</button>
            <p>this_Is_result_Page</p>
            <p>userName : {userName}</p>
            <RaderChart />
            <div> {textData[GetRank(mulitpliData, userSelect)]} </div>
            <RenderLineChart />
        </div>
    )
}


// *************** ACTION ***************

function sendData(userSelect, prevIndex){
    console.log("userSelect : " + userSelect);
    console.log("prevIndex : " + prevIndex);
}

function GetRank(mulitpliData, userSelect)
{
    var result = 1;
    for (let i = 0; i < userSelect.length - 1; i++) 
    {
        if(userSelect[i] <= 0)
            continue;
        result *= mulitpliData[i][userSelect[i] - 1];
    }
    //remap [0.168 ~ 2.43] to [0 ~ 9]
    result = (result - 0.168) / (2.43 - 0.168) * 9;
    if(result < 0)
        result = 0;
    if(result > 9)
        result = 9;
    console.log("result:" + result);
    return Math.round(result);
}

function clearAlldata(setPageIndex, setUserSelect, setPrevIndex, setUserName) {
    setPageIndex(0);
    setUserSelect([]);
    setPrevIndex([]);
    setUserName('');
}

export default RenderResultPage;