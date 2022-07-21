import '../App.css';
import React, { useEffect } from 'react';
import { sceneData, pageData, userSelectData } from '../Data/AppVars';

function RenderIntroPage(prop){
    const { setPageIndex } = pageData();
    const { setUserSelect } = userSelectData();
    const { sceneIndex, setSceneIndex } = sceneData();

    useEffect(() => {

    }, [])

    return (
        <div className="main-body" key="introPage">
            <p>this_Is_Intro_Page</p>
            <button onClick={() => {
                setSceneIndex(sceneIndex + 1);
                clearAlldata(setPageIndex, setUserSelect);
            }}> press_to_Continue</button>
        </div>
    )
}

// *************** ACTION ***************

function clearAlldata(setPageIndex, setUserSelect) {
    setPageIndex(0);
    setUserSelect([]);
}

export default RenderIntroPage;