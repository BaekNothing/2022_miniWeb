import '../App.css';
import React, { useEffect } from 'react';
import { dummyData, sceneData, pageData, userSelectData } from '../Data/AppVars';

var _startFlag = false; 

function handleSubmit(event) {
    event.preventDefault();
}


function RenderIntroPage(prop) {
    const { dummy, SetDummy } = dummyData();
    const { setPageIndex } = pageData();
    const { setUserSelect, SetUserName, userName } = userSelectData();
    const { sceneIndex, setSceneIndex } = sceneData();

    useEffect(() => {

    }, [])
   
    
    if(_startFlag === false)
    {
        return (
            <div className="main-body" key="introPage">
                <p>this_Is_Intro_Page</p>
                <button onClick={() => {
                    _startFlag = true;
                    SetDummy(1);
                }}> press_to_Continue</button>
            </div>
        )
    }
    else
    {
        return (
            <div className="main-body" key="introPage">
                <p>this_Is_Intro_Page</p>

                <form onSubmit={handleSubmit}>
                    <label>
                        뭐라고 불러줄까?:
                        <input id="name" type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" onClick={()=>{
                        const name = document.getElementsByName("name")[0].value;
                        if (name.length > 0 && name.length < 6) {
                            SetUserName(document.getElementsByName("name")[0].value);
                            setSceneIndex(sceneIndex + 1);
                            clearAlldata(setPageIndex, setUserSelect);
                        }
                        else{
                            alert("이름은 1~5글자 사이로 입력해주세요.");
                        }
                    }} className='invisible' />
                </form>
                
            </div>
        )
    }
    
}

// *************** ACTION ***************

function clearAlldata(setPageIndex, setUserSelect) {
    setPageIndex(0);
    setUserSelect([]);
}

export default RenderIntroPage;