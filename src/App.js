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
        <div className='body' onDragStart={
            (e) => {
                return false;
            }
        }> 
            <PageRender></PageRender>
        </div>
        <div className='footer'>
            <div className='footer-text'>
                  <p>© 2023 All rights reserved. Team WaiWai</p>
                  <a target='_blank' href='https://www.notion.so/kimteainvoyagerx/5c1dc2cb4f96431eabeb9964b6899baf?pvs=4'>Why We Make This?</a>
            </div>
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