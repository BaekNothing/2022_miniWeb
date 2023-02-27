import '../App.css'; 
//import axios from "axios";
import React, { useEffect } from 'react';
import { textData, sceneData, pageData, userSelectData, mulitpliData, baseHigherData, questionData, GetMultiplier } from '../Data/AppVars';
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
                    "height":"32px",
                    "fontFamily": "SUIT-Regular",
                    "fontSize": "20px",
                    "fontWeight": "200",
                    "padding" : "50px 0px 0px 0px"
                }
            }>  TEST RESULT </div>
            <hr />
            
            <div className="result-top" style=
            {
                {
                    "position" : "absolute",
                    "fontFamily": "SUIT-Thin",
                    "fontSize": "64px",
                    "fontWeight": "600",
                    "padding" : "8px 0px 0px 28px",
                }
            }> LEVEL </div>

            <div className="result-top" style=
            {
                {
                    "position": "absolute",
                    "fontFamily": "SUIT-Regular",
                    "fontSize": "132px",
                    "fontWeight": "400",
                    "margin": "-16px 0px 0px 260px",
                }
            }> {GetRank(mulitpliData, userSelect) + 1} </div>
            
            <div className='circle' style={
                {
                    "position": "absolute",
                    "margin": "108px 0px 0px 30px",
                    "padding": "0px 0px 0px 0px",
                    "width": "320px",
                    "height": "320px",
                    "borderRadius": "50%",
                    "backgroundColor": "white",
                }
            }> </div>
            
            <ResultLevelImage rank={GetRank(mulitpliData, userSelect)} />

            <div className='body_contents' style={{
                "margin": "-40px 0px 0px 0px",
                "padding": "0px 28px 0px 28px",
            }}>
                <ResultReport name={userName} rank={GetRank(mulitpliData, userSelect)} text={textData[GetRank(mulitpliData, userSelect)]} />
            </div>
            <div className='body_contents' style={{
                "backgroundColor": "white",
                "borderRadius": "0px 30px 0px 0px",
                "margin": "20px 28px 0px 28px",
                "padding" : "10px 20px 20px 20px",
                "textAlign": "center",
                "color": "black",
            }}>
                <div style={{
                    "backgroundColor": "#2F4FFD",
                    "textAlign": "center",
                    "color": "white",
                    "fontFamily": "SUIT-Regular",
                    "fontSize": "32px",
                    "height": "46px",
                    "width": "48px",
                    "padding": "2px 0px 0px 0px",
                    "borderRadius": "50%",
                    "margin": "12px 0px 0px 0px",
                }}> B </div>

                <p
                    style={{
                        "color": "#2F4FFD",
                        "textAlign": "left",
                        "fontSize": "20px",
                        "margin": "20px 0px 0px 0px"
                    }}>
                    <span style={{
                        "fontFamily": "SUIT-Regular",
                        "fontWeight": "600",
                        "padding": "0px 0px 0px 0px",
                    }}> 능력치 </span>
                    <span style={{ "color": "white" }}>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{
                        "fontFamily": "SUIT-Thin",
                    }}> Power </span>
                </p>

                <hr style={{
                    "margin": "12px 0px 0px 0px",
                    "borderColor": "#2F4FFD",
                    "opacity": "0.3"
                }} />
                <RaderChart />
            </div>
            <div className='body_contents' style={{
                "backgroundColor": "white",
                "borderRadius": "0px 30px 0px 0px",
                "margin": "20px 28px 100px 28px",
                "padding": "10px 20px 20px 20px",
                "textAlign": "center",
                "color": "black",
            }}>
                <div style={{
                    "backgroundColor": "#2F4FFD",
                    "textAlign": "center",
                    "color": "white",
                    "fontFamily": "SUIT-Regular",
                    "fontSize": "32px",
                    "height": "46px",
                    "width": "48px",
                    "padding": "2px 0px 0px 0px",
                    "borderRadius": "50%",
                    "margin": "12px 0px 0px 0px",
                }}> C </div>

                <p
                    style={{
                        "color": "#2F4FFD",
                        "textAlign": "left",
                        "fontSize": "20px",
                        "margin": "20px 0px 0px 0px"
                    }}>
                    <span style={{
                        "fontFamily": "SUIT-Regular",
                        "fontWeight": "600",
                        "padding": "0px 0px 0px 0px",
                    }}> 인생그래프 </span>
                    <span style={{ "color": "white" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{
                        "fontFamily": "SUIT-Thin",
                    }}> Life Graph </span>
                </p>

                <hr style={{
                    "margin": "12px 0px 0px 0px",
                    "borderColor": "#2F4FFD",
                    "opacity": "0.3"
                }} />

                <RenderLineChart />
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
                        "width": "280px",
                        "height": "280px"
                    }
                }
                id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        }
    }

    {
        const i = 2;
        const selectedNumber = userSelect[i];
        if (selectedNumber > 0) {
            var imageName = questionData[i - 1][1];
            var imagePath = imageName + "_" + selectedNumber;
            if(userSelect[1] === 1)
                imagePath += "_1";
            else if(userSelect[1] === 3)
                imagePath += "_2";
            result.push(<img key={i} className='char'
                style={
                    {
                        "height": "280px",
                        "width": "auto",
                    }
                }
                id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        }
    }

    for (var i = 3; i < 5; i++) {
        const selectedNumber = userSelect[i];
        if (selectedNumber <= 0)
            continue;
        const imageName = questionData[i - 1][1];
        const imagePath = imageName + "_" + selectedNumber;
        result.push(<img key={i + 1} className='char'
            style={
                {
                    "width": "280px",
                    "height": "280px"
                }
            }
            id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
    }


    return (
        <div>
            <div className='main-image' style={
                {"margin": "132px 0px 170px 0px"}
            }>
                {result}
            </div>
        </div>
    )
}

function ResultReport(prop)
{
    const name = prop?.name ?? ""
    const textData = prop.text
    const rank = prop.rank
    return (
        <div>
            <hr/>
            <p style={{
                "textAlign": "left",
                "fontFamily": "SUIT-Thin",
                "fontSize": "28px",
                "fontWeight": "600",
                "margin": "-4px 0px 0px 0px",
            }}>NAME : {name}</p>
            <hr/>
            <div style={{
                "backgroundColor": "white",
                "borderRadius": "0px 30px 0px 0px",
                "margin": "20px 0px 0px 0px",
                "padding": "4px 24px 24px 24px",
                "color": "black",
            }}>
                <div style={{
                    "backgroundColor": "#2F4FFD",
                    "textAlign": "center",
                    "color": "white",
                    "fontFamily": "SUIT-Regular",
                    "fontSize": "32px",
                    "height": "46px",
                    "width": "48px",
                    "padding": "2px 0px 0px 0px",
                    "borderRadius": "50%",
                    "margin": "12px 0px 0px 0px",
                }}> A </div>
                
                <p
                    style={{
                        "color": "#2F4FFD",
                        "textAlign": "left",
                        "fontSize": "20px",
                        "margin": "20px 0px 0px 0px"
                    }}>
                        <span style={{
                            "fontFamily": "SUIT-Regular",
                            "fontWeight": "600",
                            "padding": "0px 0px 0px 0px",
                        }}> 인간정보 </span>
                        <span style={{ "color": "white" }}> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        </span>
                        <span style={{
                            "fontFamily": "SUIT-Thin",
                        }}> Human Facts </span>
                </p>

                <hr style={{
                    "margin": "12px 0px 0px 0px",
                    "borderColor": "#2F4FFD",
                    "opacity": "0.3"
                }} />
                <p style={{
                    "textAlign": "left",
                    "fontFamily": "SUIT-Bold",
                    "fontSize": "20px",
                    "color": "#2F4FFD",
                    "margin": "16px 0px 0px 0px",
                }}>
                    10명 중 &nbsp;&nbsp; : &nbsp;&nbsp; {10 - rank}위
                </p>
                <SetText text={textData} />
            </div>
            
        </div>
    )
}

function SetText(prop)
{
    const textData = prop.text
    const splitText = textData.split("\n");
    var result = [];
    result.push(<p key={0} style={{
        "textAlign": "left",
        "fontFamily": "SUIT-Bold",
        "fontSize": "18px",
        "lineHeight": "26px",
        "fontWeight": "600",
        "margin": "0px 0px 12px 0px",
    }}>{splitText[0]}</p>);


    for (let i = 1; i < splitText.length; i++) 
    {
        result.push(<p key={i} style={{
            "textAlign": "left",
            "fontFamily": "SUIT-Thin",
            "fontSize": "14px",
            "lineHeight": "24px",
            "fontWeight": "600",
            "margin": "0px 0px 0px 0px",
        }}>{splitText[i]}</p>);
    }
    return <div style={{
        "margin": "12px 0px 0px 0px",
    }}>{result}</div>
}


// *************** ACTION ***************

function sendData(userSelect, prevIndex){
    console.log("userSelect : " + userSelect);
    console.log("prevIndex : " + prevIndex);
}

function GetRank(mulitpliData, userSelect)
{
    var result = Math.round(GetMultiplier(userSelect) * 10);
    if(result < 0)
        result = 0;
    if(result > 9)
        result = 9;
    return Math.round(result);
}


export default RenderResultPage;