import '../App.css'; 
//import axios from "axios";
import React, { useEffect } from 'react';
import { textData, sceneData, pageData, userSelectData, mulitpliData, baseHigherData, questionData } from '../Data/AppVars';
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
                window.location.reload();
            }}> press to GoHome</button>

            <ResulTitle />
            <ResultLevelImage rank={GetRank(mulitpliData, userSelect)} />
            <ResultReport name={userName} rank={GetRank(mulitpliData, userSelect)} text={textData[GetRank(mulitpliData, userSelect)]} />
            <Resultchart />
        </div>
    )
}


function ResulTitle()
{
    return (
        <div >  
            <hr/>
                <p>No. 275A-64</p>
            <hr/>
        </div>
    )
}

function ResultLevelImage(prop) 
{
    const { userSelect } = userSelectData();
    const rank = prop.rank
    var result = [];
    
    {
        const i = 8;
        const selectedNumber = userSelect[i];
        if (selectedNumber > 0) {
            const imageName = questionData[i][1];
            const imagePath = imageName + "_" + selectedNumber;
            result.push(<img key={i} className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        }
    }

    for (var i = 1; i < 5; i++) {
        const selectedNumber = userSelect[i];
        if (selectedNumber <= 0)
            continue;
        const imageName = questionData[i][1];
        const imagePath = imageName + "_" + selectedNumber;
        result.push(<img key={i + 1} className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
    }


    return (
        <div>
            <div className='main-image'>
                {result}
            </div>
        </div>
    )
}

function ResultReport(prop)
{
    const name = prop.name
    const textData = prop.text
    const rank = prop.rank
    return (
        <div>
            <hr/>
            <p>userName : {name}</p>
            <p>rank : {rank}</p>
            <p>textData : {textData}</p>
        </div>
    )
}

function Resultchart(){
    return(
        <div>
            <hr />            
            <RaderChart />
            <hr />
            <RenderLineChart />
            <hr />
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
        result *= mulitpliData[i][userSelect[i + 1] - 1];
    }
    //remap [0.168 ~ 2.43] to [0 ~ 9]
    result = (result - 0.168) / (2.43 - 0.168) * 9;
    if(result < 0)
        result = 0;
    if(result > 9)
        result = 9;
    return Math.round(result);
}


export default RenderResultPage;