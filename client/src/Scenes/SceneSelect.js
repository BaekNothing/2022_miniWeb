import '../App.css';
import './SceneSelect.css';
import React, { useEffect } from 'react';
<<<<<<< HEAD
import { sceneData, pageData, userSelectData, questionData } from '../Data/AppVars';
=======
import { dummyData, sceneData, pageData, userSelectData, questionData } from '../Data/AppVars';
>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb

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

<<<<<<< HEAD
=======

>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb
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
            <PageMainImage image={dataAry[1]} select={prevIndex} />

<<<<<<< HEAD
            <PageMainQuestionBox question={dataAry[2]} />
=======
            <PageMainQuestionBox userData={_userChosenData === 0 ? 0 : 1} question={dataAry[2]} />
>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb

        </div>
    )
}

// *************** PAGE COMPONENTS ***************

function PageMainImage(prop) {
    const image = prop.image;
    var index = 0;
    if(prop.select) index = prop.select[prop.select.length - 1] ?? 0;

    return (
        <div>
            <div className='main-image'>
                {/* <img className='char' id='char_acc' src={'./images/char/charACC_0' + randomNumber + '.png'} alt='charBody' /> */}
                {/* <img className='char' id='char_hair' src={'./images/char/charHair_0' + randomNumber + '.png'} alt='charBody' /> */}
                <img className='char' id='char_body' src={'./images/char/' + image + '_' + 0 +'.png'} alt='charBody' />
            </div>
            {/* <img src={'./images/' + image + '.png'} style={{ width: '480px' }} alt='' /> */}
        </div>
    )
}

function PageMainQuestionBox(prop) {
<<<<<<< HEAD
    const { pageIndex, prevIndex, setPrevIndex, setPageIndex } = pageData();
=======
    const { pageIndex, prevIndex, setPrevIndex, setPageIndex, dataAry } = pageData();
>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb
    const { sceneIndex, setSceneIndex} = sceneData();
    const { userSelect, setUserSelect } = userSelectData();
    const question = prop.question;
    //const pageIndex = prop.pageIndex;
<<<<<<< HEAD
=======

>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb
    return (
        <div>
            <p> {pageIndex}question : {question} </p>

            <PageMainButtonInput liIndex={1} />
            <PageMainButtonInput liIndex={2} />
            <PageMainButtonInput liIndex={3} />
            <PageMainButtonInput liIndex={4} />
            <PageMainButtonInput liIndex={5} />
            <PageMainButtonInput liIndex={6} />

            <div className='m4'>
                <button onClick={() => {
                    var moveIndex = prevIndex[prevIndex.length- 1];
                    var newPrevIndex = prevIndex.slice(0, prevIndex.length - 1);
                    setPrevIndex(newPrevIndex);
                    if (moveIndex < 0) {
                        setSceneIndex(sceneIndex - 1);
                        moveIndex = 0;
                    }
                    setPageIndex(moveIndex);
                    setUserSelect([...userSelect.slice(0, userSelect.length - 1) ?? []]);
                    SetUserSelectDataFlag(flags.notRefresh, _userChosenData)
                }}>movePrev</button>
<<<<<<< HEAD
=======

                <button onClick={() => {
                    SetUserSelectDataFlag(flags.refresh, _userChosenData);

                    setPrevIndex([...prevIndex ?? [], pageIndex]);
                    setPageIndex(
                        dataAry[_userChosenData + 8] !== '-'
                            ? dataAry[_userChosenData + 8] * 1
                            : (pageIndex * 1) + 1);
                }}>moveNext</button>
>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb
            </div>
            
        </div>
    )
}

function PageMainButtonInput(prop){
<<<<<<< HEAD
    const { pageIndex, setPageIndex, setPrevIndex, prevIndex, dataAry } = pageData();
    var liIndex = prop.liIndex;
=======
    const { dummy, SetDummy } = dummyData();
    const { pageIndex, setPageIndex, setPrevIndex, prevIndex, dataAry } = pageData();
    var liIndex = prop.liIndex;
    console.log(dummy);
>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb

    if (dataAry[liIndex + 2] === " noData" || dataAry[liIndex + 2] === "noData") return <div className='invisible'> </div>;
    return (
        <div className='t16 m4'>
            <label>
<<<<<<< HEAD
                <button className='w35 h40px'
                    onClick={() => {
                        SetUserSelectDataFlag(flags.refresh, liIndex);

                        setPrevIndex([...prevIndex ?? [], pageIndex]);
                        setPageIndex(
                            dataAry[liIndex + 8] !== '-'
                                ? dataAry[liIndex + 8] * 1
                                : (pageIndex * 1) + 1);
=======
                <button className='w35 h40px' style={ liIndex === _userChosenData ? { color: "red" } : { color: "black" } }
                    onClick={() => {
                        SetUserSelectDataFlag(flags.refresh, liIndex);
                        _userChosenData = liIndex;
                        SetDummy(liIndex);

                        // for choose and move next
                        // setPrevIndex([...prevIndex ?? [], pageIndex]);
                        // setPageIndex(
                        //     dataAry[liIndex + 8] !== '-'
                        //         ? dataAry[liIndex + 8] * 1
                        //         : (pageIndex * 1) + 1);
>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb
                    }}>
                {dataAry[liIndex + 2]} </button> 
            </label>
        </div>
    )
}

function PageMainUserSelectBox(prop) {
    const { pageIndex } = pageData();
    const { userSelect } = userSelectData();
    const result = [];

    for (let i = 1; i < userSelect.length; i++) {
        if (i !== pageIndex + 1)
            result.push(<button className='box_Choosed' key={i}>{userSelect[i] ?? 0}</button>);
        else
            result.push(<button className='box_Choosed' style={{ color: "red" }} key={i}>{userSelect[i] ?? 0}</button>);   
    }
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

var _pageIndexMax = 10;
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