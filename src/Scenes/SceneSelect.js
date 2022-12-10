import '../App.css';
import './SceneSelect.css';
import React, { useEffect } from 'react';
import { dummyData, sceneData, pageData, userSelectData, questionData } from '../Data/AppVars';

var _refreshUserSelectDataFlag = true;
var _userChosenData = 0;
function SetUserSelectDataFlag(flag, data) {
    _refreshUserSelectDataFlag = flag;
    _userChosenData = data;
}

const flags = {
    refresh: true,
    notRefresh: false
}


// *************** MAIN PAGE ***************

function RenderSelectPage(prop) {
    const { pageIndex, setPageIndex, dataAry, prevIndex } = pageData();
    console.log("pageIndex : " + pageIndex);

    return (
        <div className="main-body" key="setUserSelectData">
            <div className='main-SelectedHud'>
                <PageMainUserSelectBox setPageIndex={setPageIndex} />
            </div>

            <div className='Action'>
                <SetUserSelectData/>
                <GetSelectPageData pageIndex={pageIndex} />
            </div>
            <PageProgressBar />
            <PageQuestionTitle question={dataAry[2]} />
            <PageMainImage image={dataAry[1]} select={prevIndex} />
            <PageMainQuestionBox userData={_userChosenData === 0 ? 0 : 1} />

        </div>
    )
}

// *************** PAGE COMPONENTS ***************


function PageProgressBar(prop){
    const { pageIndex } = pageData();
    const { userSelect} = userSelectData();

    return(
        <div>
            <progress className='w280' max={_pageIndexMax} value={pageIndex}>

            </progress>
        </div>
    )
}

function PageQuestionTitle(prop){
    const question = prop.question;
    return (
        <div>
            <p> {question} </p>
        </div>
    )
}

function PageMainImage(prop) {
    const image = prop.image;
    const { dummy } = dummyData();
    var index = 0;
    if(prop.select) index = prop.select[prop.select.length - 1] ?? 0;

    return (
        <div>
            <div className='main-image'>
                {/* <img className='char' id='char_acc' src={'./images/char/charACC_0' + randomNumber + '.png'} alt='charBody' /> */}
                {/* <img className='char' id='char_hair' src={'./images/char/charHair_0' + randomNumber + '.png'} alt='charBody' /> */}
                <img className='char' id='char_body' src={'./images/char/' + image + '_' + (_userChosenData <= 0 ? 1 : _userChosenData) +'.png'} alt='charBody' />
            </div>
            {/* <img src={'./images/' + image + '.png'} style={{ width: '480px' }} alt='' /> */}
        </div>
    )
}

function PageMainQuestionBox(prop) {
    return (
        <div>
            <div className='btns_box'>
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
        <div className='t16 m4 inline-block btn_selectable'>
            <button className='bg_white btn_selectable'
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

function NextButton() {
    const { dummy, SetDummy } = dummyData();
    const { pageIndex, prevIndex, setPrevIndex, setPageIndex, dataAry } = pageData();
    const { sceneIndex, setSceneIndex } = sceneData();
    const { userSelect, setUserSelect } = userSelectData();

    if (_userChosenData <= 0) return(
        <div>
            <div className='t16 m4 inline-block btn_selectable_half'> </div>
            <button className='m4 inline-block btn_selectable_half'>다음으로</button>
        </div>
    ) 
        

    return (
        <div>
            <div className='t16 m4 inline-block btn_selectable_half'> </div>
            <button className='m4 inline-block btn_selectable_half bg_blue' onClick={() => {
                SetUserSelectDataFlag(flags.refresh, _userChosenData);

                setPrevIndex([...prevIndex ?? [], pageIndex]);
                setPageIndex(
                    dataAry[_userChosenData + 8] !== '-'
                        ? dataAry[_userChosenData + 8] * 1
                        : (pageIndex * 1) + 1);
            }}>다음으로</button>
        </div>
    )
}

function PageMainUserSelectBox(prop) {
    const { pageIndex } = pageData();
    const { userSelect } = userSelectData();
    const result = [];

    // for (let i = 1; i < userSelect.length; i++) {
    //     if (i !== pageIndex + 1)
    //         result.push(<button className='box_Choosed' key={i}>{userSelect[i] ?? 0}</button>);
    //     else
    //         result.push(<button className='box_Choosed' style={{ color: "red" }} key={i}>{userSelect[i] ?? 0}</button>);
    // }
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
            setUserSelect(tempAry);
            _userChosenData = 0;

            //move to next Scene
            if (pageIndex > _pageIndexMax)
            {
                console.log("userSelect : " + userSelect);
                console.log("prevIndex : " + prevIndex);
                setSceneIndex(sceneIndex + 1);
            }

            _refreshUserSelectDataFlag = false;
        }
    }, [userSelect, pageIndex, prevIndex, setUserSelect, sceneIndex, setSceneIndex, chosenIndex])
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
            console.log(questionData);
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
            console.log(tempAry);
        }
        prevPageIndex = pageIndex;
    }, [dataAry, pageIndex, setAry])
    return (<div className="notDisplay"> </div>)
}

export default RenderSelectPage;
