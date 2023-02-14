import './App.css';
import React, { useEffect } from 'react';
import {sceneData/*, pageData, userSelectData*/} from './Data/AppVars';

import RenderIntroPage from './Scenes/SceneIntro';
import RenderSelectPage from './Scenes/SceneSelect';
import RenderResultPage from './Scenes/SceneResult';
import RenderLoading from './Scenes/SceneLoading';

function App() {
  return (
    <div className="App">
        <header className="App-header">
              
        </header>
        <div className='body' ondragstart='return false'> 
            <PageRender></PageRender>
        </div>
    </div>
  );
}

function PageRender() {
    // const { pageIndex, setPageIndex, dataAry } = pageData();
    // const { setUserSelect } = userSelectData();
    const { sceneIndex/*, setSceneIndex*/ } = sceneData();

    useEffect(() => {

    }, [])

    if (sceneIndex === 0) {
        return <RenderIntroPage />
    }
    else if (sceneIndex === 1) {
        return <RenderSelectPage />
    }
    else if (sceneIndex === 2) {
        return <RenderLoading />
    }
    else {
        return <RenderResultPage />
    }
}

// *************** ACTION ***************

export default App;