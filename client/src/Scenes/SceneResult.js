import '../App.css';
import React, { useEffect } from 'react';
import { sceneData, pageData, userSelectData } from '../Data/AppVars';
import RenderLineChart from '../Data/ChartDrawer';

function RenderResultPage(prop) {
    const { setPageIndex} = pageData();
    const { setUserSelect } = userSelectData();
    const { setSceneIndex } = sceneData();

    useEffect(() => {

    }, [])

    return (
        <div className="main-body" key="introPage">
            <p>this_Is_result_Page</p>
            <button onClick={() => {
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

function clearAlldata(setPageIndex, setUserSelect) {
    setPageIndex(0);
    setUserSelect([]);
}

export default RenderResultPage;