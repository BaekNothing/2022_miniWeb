import '../App.css';
import './SceneSelect.css';
import React, { useEffect } from 'react';
import { dummyData, sceneData, pageData, userSelectData, questionData, descData } from '../Data/AppVars';

var _refreshUserSelectDataFlag = true;
var _removeUserSelectDataFlag = false;
var _userChosenData = 0;
function SetUserSelectDataFlag(flag, data) {
    _refreshUserSelectDataFlag = flag;
    _userChosenData = data;
}

function RemoveUserSelectDataFlag(flag) {
    _removeUserSelectDataFlag = flag;
}

const flags = {
    refresh: true,
    notRefresh: false
}


// *************** MAIN PAGE ***************

function RenderSelectPage(prop) {
    const { pageIndex, setPageIndex, dataAry, prevIndex } = pageData();

    return (
        <div className="main-body" style={{
            minHeight: '900px'
        }} key="setUserSelectData">
            <div className='main-SelectedHud'>
                <PageMainUserSelectBox setPageIndex={setPageIndex} />
            </div>

            <div className='Action'>
                <SetUserSelectData/>
                <RemoveUserSelectData/>
                <GetSelectPageData pageIndex={pageIndex} />
            </div>
            <PageProgressBar />
            <PageQuestionTitle question={dataAry[2]} />
            <MessageBoxButton pageIndex={pageIndex} />
            <MessageBoxPopup pageIndex={pageIndex} />
            <PageMainImage />

            <PageMainQuestionBox userData={_userChosenData === 0 ? 0 : 1} />
        </div>
    )
}

// *************** PAGE COMPONENTS ***************

function MessageBoxButton(prop){

    if (descData[prop.pageIndex] == undefined || descData[prop.pageIndex] == null)
        return null;
    else 
    {
        return(
            <div className='messageBox_Button' style={{ fontFamily:'SUIT-Regular', fontSize:"15px"}}>
                <div style={{
                    display:"inline-block",
                    backgroundColor:"#2F4FFD",
                    color:"white",
                    borderRadius:"50%",  
                    width:"20px",
                    height:"20px",
                    marginRight:"5px",
                    }}> ? </div>
                <a className='messageBox_Link' href="#open">{descData[prop.pageIndex][0]}</a>
            </div>
        );
    }
}

function MessageBoxPopup(prop){

    if(descData[prop.pageIndex] == undefined || descData[prop.pageIndex] == null)
        return null;
    else
    {
        return (
            <div className="messageBox_Popup" id="open">
                <div>
                    <p><a href="#close">닫기</a></p>
                    <p>{descData[prop.pageIndex][1]}</p>
                </div>
            </div>
        );
    } 


}


function PageProgressBar(prop){
    const { pageIndex } = pageData();
    const { userSelect} = userSelectData();

    return(
        <div>
            <progress style={{ marginTop:"50px", marginBottom:"65px"}} className='w280' max={_pageIndexMax} value={pageIndex}>

            </progress>
        </div>
    )
}

function PageQuestionTitle(prop){
    const question = prop.question;
    return (
        <div className='questionText' style={{marginBottom:"45px"}}>
            {question}
        </div>
    )
}

function PageMainImage(prop) 
{
    const { dummy } = dummyData();
    const { userSelect } = userSelectData();
    const { prevIndex } = pageData();
    var result = [];
    var index = (prevIndex ?? []).length;
    if (index === 5 || index === 7 || index === 8 || index === 11)
    {
        if (_userChosenData > 0 || prevIndex === undefined) 
        {
            var imagePath = questionData[index][1] + "_" + _userChosenData;
            result.push(<img key='now' className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        }
    }


    if (index === 10 && _userChosenData < 3) {
        if (_userChosenData > 0 || prevIndex === undefined) {
            var imagePath = questionData[index][1] + "_" + _userChosenData;
            result.push(<img key='now' className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        }
    }

    
    if(userSelect.length == 2) // 성별
    {
        var imagePath = "gender_" + userSelect[1];
        result.push(<img key='gender' className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
    }

    if (userSelect.length > 2) // 나이
    {
        var imagePath = "age_" + userSelect[2];
        if(userSelect[1] == 1)
        {
            imagePath += "_1";
        }
        else if (userSelect[1] == 3)
        {
            imagePath += "_2";
        }
        result.push(<img key='gender' className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
    }
    
    if (userSelect.length > 3) // 국적
    {
        var imagePath = "contury_" + userSelect[3];
        result.push(<img key='contury' className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
    }
    if (userSelect.length > 4) // 퀴어
    {
        var imagePath = "queer_" + userSelect[4];
        result.push(<img key='queer' className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
    }
    if (userSelect.length > 5) // 장애
    {
        var imagePath = "disabled_" + userSelect[5];
        result.push(<img key='disabled' className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
    }


    if (!(index === 5 || index === 7 || index === 8 || index === 10 || index === 11)) 
    {
        if (_userChosenData > 0 || prevIndex === undefined) {
            var imagePath = questionData[index][1] + "_" + _userChosenData;
            if ((index == 1 || index == 6) &&
                userSelect[1] == 1) {
                imagePath += "_1";
            }
            if ((index == 1) &&
                userSelect[1] == 3) {
                imagePath += "_2";
            }
            if (index == 12 && (2 < _userChosenData && _userChosenData < 5) &&
                userSelect[1] == 1)
            {
                imagePath += "_1";
            }
            result.push(<img key='now' className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        }
    }


    if (index === 10 && _userChosenData >= 3) { 
        if (_userChosenData > 0 || prevIndex === undefined) {
            var imagePath = questionData[index][1] + "_" + _userChosenData;
            result.push(<img key='now' className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        }
    }


    
    return (
        <div>
            <div className='main-image'>
                {result}
            </div>
            {/* <img src={'./images/' + image + '.png'} style={{ width: '480px' }} alt='' /> */}
        </div>
    )
}

function PageMainQuestionBox(prop) {
    return (
        <div>
            <div className='btns_box' style={{marginTop:"40px"}}>
                <PageMainButtonInput liIndex={1} />
                <PageMainButtonInput liIndex={2} />
                <PageMainButtonInput liIndex={3} />
                <PageMainButtonInput liIndex={4} />
                <PageMainButtonInput liIndex={5} />
                <PageMainButtonInput liIndex={6} />
            </div>


            <div className='btns_box'>
                <NextButton />
            </div>

        </div>
    )
}

function PageMainButtonInput(prop){
    const { dummy, SetDummy } = dummyData();
    const { pageIndex, setPageIndex, setPrevIndex, prevIndex, dataAry } = pageData();
    var liIndex = prop.liIndex;

    if (dataAry[liIndex + 2] === " noData" || dataAry[liIndex + 2] === "noData")
        return <div className='invisible'> </div>;
    return (
        <div className='m4 inline-block btn_selectable t16'>
            <button className='bg_white btn_selectable t16'
                style={ liIndex === _userChosenData
                    ? { background: "#2F4FFD", color: "white", border: "white" }
                    : { background: "white", color: "black" } }
                onClick={() => {
                    SetUserSelectDataFlag(flags.refresh, liIndex);
                    _userChosenData = liIndex;
                    SetDummy(liIndex);
                }}>
            {dataAry[liIndex + 2]} </button>
        </div>
    )
}

var goPrev = "< 이전으로"
var goNext = "다음으로 >"

function NextButton() {
    const { dummy, SetDummy } = dummyData();
    const { pageIndex, prevIndex, setPrevIndex, setPageIndex, dataAry } = pageData();
    const { sceneIndex, setSceneIndex } = sceneData();
    const { userSelect, setUserSelect } = userSelectData();


    
    if (_userChosenData <= 0) return(
        <div>
            <button className='t16 m4 inline-block btn_selectable_half' style={
                userSelect.length > 1 ? { marginRight: "10px" } : { marginRight: "10px", visibility: "hidden" }
            } onClick={() => {
                RemoveUserSelectDataFlag(flags.refresh);
                var tempAry = prevIndex.slice(0, prevIndex.length - 1);
                setPrevIndex(tempAry);
                setPageIndex(pageIndex * 1 - 1);
            }}>{goPrev}</button>
            <button className='t16 m4 inline-block btn_selectable_half'>{goNext}</button>
        </div>
    ) 
    return (
        <div>
            <button className='t16 m4 inline-block mr40 btn_selectable_half' style={
                userSelect.length > 1 ? { marginRight: "10px" } : { marginRight: "10px", visibility: "hidden" }
            } onClick={() => {
                RemoveUserSelectDataFlag(flags.refresh);
                var tempAry = prevIndex.slice(0, prevIndex.length - 1);
                setPrevIndex(tempAry);
                setPageIndex(pageIndex * 1 - 1);
             }}>{goPrev}</button>
            <button className='t16 m4 inline-block btn_selectable_half bg_blue' onClick={() => {
                SetUserSelectDataFlag(flags.refresh, _userChosenData);

                setPrevIndex([...prevIndex ?? [], pageIndex]);
                setPageIndex(
                    dataAry[_userChosenData + 8] !== '-'
                        ? dataAry[_userChosenData + 8] * 1
                        : (pageIndex * 1) + 1);
            }}>{goNext}</button>
        </div>
    )
}

function PageMainUserSelectBox(prop) {
    const { pageIndex } = pageData();
    const { userSelect } = userSelectData();
    const result = [];

    return <div> {result} </div>
}

// *************** ACTION ***************

function SetUserSelectData(prop) {
    const { pageIndex, prevIndex } = pageData();
    const { userSelect, setUserSelect } = userSelectData();
    const { sceneIndex, setSceneIndex } = sceneData();

    const chosenIndex = _userChosenData;

    useEffect(() => {
        if (_refreshUserSelectDataFlag) {
            //push SelectedNumber to userSelect
            var tempAry = [...userSelect, chosenIndex];
            if (tempAry.length === 1)
            {
                tempAry = [0, chosenIndex];
            }
            //if tempAry.length > pageindex, remove last element
            while (tempAry.length > pageIndex + 1) {
                tempAry.pop();
            }
            setUserSelect(tempAry);
            _userChosenData = 0; 
            //move to next Scene
            if (pageIndex > _pageIndexMax)
            {
                setSceneIndex(sceneIndex + 1);
            }

            _refreshUserSelectDataFlag = false;
            console.log("addUserSelectData : " + tempAry);
        }
    }, [userSelect, pageIndex, prevIndex, setUserSelect, sceneIndex, setSceneIndex, chosenIndex])
    return <div className='invisible'> </div>;
}

function RemoveUserSelectData(prop) {
    const { pageIndex, prevIndex } = pageData();
    const { userSelect, setUserSelect } = userSelectData();
    const { sceneIndex, setSceneIndex } = sceneData();

    useEffect(() => {
        if (_removeUserSelectDataFlag) {
            var tempAry = [...userSelect];
            tempAry.pop();
            setUserSelect(tempAry);
            _removeUserSelectDataFlag = false;

            console.log("removeUserSelectData : " + tempAry);
        }
    }, [userSelect, pageIndex, prevIndex, setUserSelect, sceneIndex, setSceneIndex])
    return <div className='invisible'> </div>;
}

// *************** DATA ***************

var _pageIndexMax = 14;
var prevPageIndex = -1;
function GetSelectPageData(prop) {
    const { pageIndex, dataAry, setAry } = pageData();

    useEffect(() => {
        if (prevPageIndex !== pageIndex) {
            var data = [...questionData]
            var tempAry = [...dataAry];
            tempAry[0] = data[pageIndex ?? 0][0] ?? String(pageIndex ?? 0) + " noData";
            tempAry[1] = data[pageIndex ?? 0][1] ?? "noData";
            tempAry[2] = data[pageIndex ?? 0][2] ?? "noData";
            tempAry[3] = data[pageIndex ?? 0][3] ?? "noData";
            tempAry[4] = data[pageIndex ?? 0][4] ?? "noData";
            tempAry[5] = data[pageIndex ?? 0][5] ?? "noData";
            tempAry[6] = data[pageIndex ?? 0][6] ?? "noData";
            tempAry[7] = data[pageIndex ?? 0][7] ?? "noData";
            tempAry[8] = data[pageIndex ?? 0][8] ?? "noData";
            tempAry[9] = data[pageIndex ?? 0][9] ?? "-";
            tempAry[10] = data[pageIndex ?? 0][10] ?? "-";
            tempAry[11] = data[pageIndex ?? 0][11] ?? "-";
            tempAry[12] = data[pageIndex ?? 0][12] ?? "-";
            tempAry[13] = data[pageIndex ?? 0][13] ?? "-";
            tempAry[14] = data[pageIndex ?? 0][14] ?? "-";
            setAry(tempAry);
        }
        prevPageIndex = pageIndex;
    }, [dataAry, pageIndex, setAry])
    return (<div className="notDisplay"> </div>)
}

export default RenderSelectPage;
