import '../App.css';
import axios from "axios";
import React, { useEffect } from 'react';
import { sceneData, pageData, userSelectData } from '../Data/AppVars';
import RenderLineChart from '../Data/ChartDrawer';

function RenderResultPage(prop) {
    const { setPageIndex} = pageData();
    const { userSelect, setUserSelect } = userSelectData();
    const { setSceneIndex } = sceneData();

    useEffect(() => {
        
    }, [])

    return (
        <div className="main-body" key="introPage">
            <p>this_Is_result_Page</p>
            <button onClick={() => {
                sendData(userSelect)
                setSceneIndex(0);
                clearAlldata(setPageIndex, setUserSelect);
            }}> press to GoHome</button>
            <RenderLineChart />
            <RenderLineChart />
            <RenderLineChart />
            <RenderLineChart />
        </div>
    )
}

// *************** ACTION ***************

function sendData(userSelect){    
    axios({
        method: 'post',
        url: 'http://localhost:8080/SetResultData',
        params: {
            email: "baeknothing@gmail.com",
            name: "baeknothing",
            answer: userSelect
        }
    })
        .then(function async(response) {
            console.log(response);
        })
        .catch(function (error) { console.log(error); })
}

function clearAlldata(setPageIndex, setUserSelect) {
    setPageIndex(0);
    setUserSelect([]);
}

export default RenderResultPage;