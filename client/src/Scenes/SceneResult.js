import '../App.css'; 
//import axios from "axios";
import React, { useEffect } from 'react';
import { sceneData, pageData, userSelectData } from '../Data/AppVars';
import RenderLineChart from '../Data/ChartDrawer';

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
            <RenderLineChart />
            <RenderLineChart />
            <RenderLineChart />
            <RenderLineChart />
        </div>
    )
}

// *************** ACTION ***************

function sendData(userSelect, prevIndex){
    console.log("userSelect : " + userSelect);
    console.log("prevIndex : " + prevIndex);
    // axios({
    //     method: 'post',
    //     url: 'http://localhost:8080/SetResultData',
    //     params: {
    //         email: "baeknothing@gmail.com",
    //         name: "baeknothing",
    //         answer: userSelect,
    //         pages: prevIndex
    //     }
    // })
    //     .then(function async(response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {  })
}

function clearAlldata(setPageIndex, setUserSelect, setPrevIndex) {
    setPageIndex(0);
    setUserSelect([]);
    setPrevIndex([]);
}

export default RenderResultPage;