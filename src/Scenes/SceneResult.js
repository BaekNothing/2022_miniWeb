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
        <div className="main-body bg_blue" key="introPage">
            {/* <button onClick={() => {
                window.location.reload();
            }}> press to GoHome</button> */}

            <div className="result-top" style=
            {
                {
                    "height":"44px",
                    "font-family": "SUIT-Regular",
                    "font-size": "28px",
                    "font-weight": "200",
                    "padding" : "50px 0px 0px 0px"
                }
            }>  TEST RESULT </div>
            <hr />
            
            <div className="result-top" style=
            {
                {
                    "position" : "absolute",
                    "font-family": "SUIT-Regular",
                    "font-size": "80px",
                    "font-weight": "600",
                    "padding" : "16px 0px 0px 28px",
                }
            }> LEVEL </div>

            <div className="result-top" style=
            {
                {
                    "position": "absolute",
                    "font-family": "SUIT-Regular",
                    "font-size": "160px",
                    "font-weight": "600",
                    "margin": "-16px 0px 30px 300px",
                }
            }> {GetRank(mulitpliData, userSelect) + 1} </div>
            
            <div className='circle' style={
                {
                    "position": "absolute",
                    "margin": "128px 0px 0px 30px",
                    "padding": "0px 0px 0px 0px",
                    "width": "360px",
                    "height": "360px",
                    "border-radius": "50%",
                    "background-color": "white",
                }
            }> </div>
            
            <ResultLevelImage rank={GetRank(mulitpliData, userSelect)} />

            <div className='body_contents' style={{
                "margin": "0px 0px 0px 0px",
                "padding": "0px 28px 0px 28px",
            }}>

                
                <ResultReport name={userName} rank={GetRank(mulitpliData, userSelect)} text={textData[GetRank(mulitpliData, userSelect)]} />
                <Resultchart />
            </div>
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
            const imageName = questionData[i - 1][1];
            const imagePath = imageName + "_" + selectedNumber;
            result.push(<img key={i} className='char'
                style={
                    {
                        "width": "320px",
                        "height": "320px"
                    }
                }
                id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        }
    }

    for (var i = 1; i < 5; i++) {
        const selectedNumber = userSelect[i];
        if (selectedNumber <= 0)
            continue;
        const imageName = questionData[i - 1][1];
        const imagePath = imageName + "_" + selectedNumber;
        result.push(<img key={i + 1} className='char'
            style={
                {
                    "width": "320px",
                    "height": "320px"
                }
            }
            id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
    }


    return (
        <div>
            <div className='main-image' style={
                {"margin": "160px 0px 170px 0px"}
            }>
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
            <p style={{
                "text-align": "left",
                "font-family": "SUIT-Thin",
                "font-size": "36px",
                "font-weight": "600",
                "margin": "-4px 0px 0px 0px",
            }}>NAME : {name}</p>
            <hr/>
            <div style={{
                "background-color": "white",
                "border-radius": "0px 60px 0px 0px",
                "margin": "28px 0px 0px 0px",
                "padding": "4px 20px 20px 20px",
                "color": "black",
            }}>
                <div style={{
                    "background-color": "#2F4FFD",
                    "text-align": "center",
                    "color": "white",
                    "font-family": "SUIT-Regular",
                    "font-size": "32px",
                    "height": "48px",
                    "width": "52px",
                    "padding": "4px 0px 0px 0px",
                    "border-radius": "50%",
                    "margin": "12px 0px 0px 0px",
                }}> A </div>
                
                <p
                    style={{
                        "color": "#2F4FFD",
                        "text-align": "left",
                        "font-family": "SUIT-Bold",
                        "font-size": "24px",
                        "font-weight": "600",
                        "margin": "20px 0px 0px 0px"
                    }}>
                        <span style={{
                            "padding": "0px 0px 0px 0px",
                        }}> 인간정보 </span>
                        <span style={{ "color": "white" }}> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        </span>
                        <span style={{
                            "font-family": "SUIT-Thin",
                        }}> Human Facts </span>
                </p>

                <hr style={{
                    "margin": "12px 0px 0px 0px",
                    "border-color": "#2F4FFD",
                }} />
                <p style={{
                    "text-align": "left",
                    "font-family": "SUIT-Bold",
                    "font-size": "24px",
                    "color": "#2F4FFD",
                }}>
                    10명 중 &nbsp;&nbsp; : &nbsp;&nbsp; 3명
                </p>
                <p style={{
                    "text-align": "left",
                    "font-family": "SUIT-Thin",
                    "font-size": "16px",
                    "line-height": "24px",
                    "font-weight": "600",
                    "margin": "20px 0px 0px 0px",
                }}>{textData}</p>
            </div>
            
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