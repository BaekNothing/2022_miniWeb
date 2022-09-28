import '../App.css';
import './SceneSelect.css';
import axios from "axios";
import React, { useEffect } from 'react';
import { sceneData, pageData, userSelectData } from '../Data/AppVars';

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
    const { pageIndex, setPageIndex, dataAry } = pageData();
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
            <PageMainImage image={dataAry[1]} />

            <PageMainQuestionBox question={dataAry[2]} />

        </div>
    )
}

// *************** PAGE COMPONENTS ***************

function PageMainImage(prop) {
    // const image = prop.image;

    var randomNumber = Math.floor(Math.random() * 4);

    return (
        <div>
            <div className='main-image'>
                <img className='char' id='char_acc' src={'./images/char/charACC_0' + randomNumber + '.png'} alt='charBody' />
                <img className='char' id='char_hair' src={'./images/char/charHair_0' + randomNumber + '.png'} alt='charBody' />
                <img className='char' id='char_body' src={'./images/char/charBody.png'} alt='charBody' />
            </div>
            {/* <img src={'./images/' + image + '.png'} style={{ width: '480px' }} alt='' /> */}
        </div>
    )
}

function PageMainQuestionBox(prop) {
    const { pageIndex, prevIndex, setPrevIndex, setPageIndex } = pageData();
    const { sceneIndex, setSceneIndex} = sceneData();
    const { userSelect, setUserSelect } = userSelectData();
    const question = prop.question;
    //const pageIndex = prop.pageIndex;
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
            </div>
            
        </div>
    )
}

function PageMainButtonInput(prop){
    const { pageIndex, setPageIndex, setPrevIndex, prevIndex, dataAry } = pageData();
    var liIndex = prop.liIndex;

    if (dataAry[liIndex + 2] === " noData" || dataAry[liIndex + 2] === "noData") return <div className='invisible'> </div>;
    return (
        <div className='t16 m4'>
            <label>
                <button className='w35 h40px'
                    onClick={() => {
                        SetUserSelectDataFlag(flags.refresh, liIndex);

                        setPrevIndex([...prevIndex ?? [], pageIndex]);
                        setPageIndex(
                            dataAry[liIndex + 8] !== '-'
                                ? dataAry[liIndex + 8] * 1
                                : (pageIndex * 1) + 1);
                    }}>
                {dataAry[liIndex + 2]} </button> 
            </label>
        </div>
    )
}

// function PageMainRadioInput(prop) {
//     const { pageIndex, setPageIndex, dataAry } = pageData();
//     var liIndex = prop.liIndex;

//     if (dataAry[liIndex + 2] === " noData" || dataAry[liIndex + 2] === "noData") return <div className='invisible'> </div>;
//     console.log(dataAry[liIndex + 2]);
//     return (
//         <div>
//             <li>
//                 <label>
//                     <input
//                         type="radio"
//                         name="radioInput"
//                         onChange={() => {
//                             setPageIndex(pageIndex + 1);
//                             SetUserSelectDataFlag(flags.refresh, liIndex);
//                         }} />
//                     {dataAry[liIndex + 2]} <br />
//                 </label>
//             </li>
//         </div>
//     )
// }

function PageMainUserSelectBox(prop) {
    const { pageIndex, prevIndex } = pageData();
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
            axios({
                method: 'post',
                url: 'http://localhost:8080/GetSelectData',
                params: {

                }
            })
                .then(function async(response) {
                    //pageData_from_server = response;
                    var tempAry = [...dataAry];
                    tempAry[0] = response.data[pageIndex ?? 0]?.name ?? String(pageIndex ?? 0) + " noData";
                    tempAry[1] = response.data[pageIndex ?? 0]?.image ?? "noData";
                    tempAry[2] = response.data[pageIndex ?? 0]?.q ?? "noData";
                    tempAry[3] = response.data[pageIndex ?? 0]?.a1 ?? "noData";
                    tempAry[4] = response.data[pageIndex ?? 0]?.a2 ?? "noData";
                    tempAry[5] = response.data[pageIndex ?? 0]?.a3 ?? "noData";
                    tempAry[6] = response.data[pageIndex ?? 0]?.a4 ?? "noData";
                    tempAry[7] = response.data[pageIndex ?? 0]?.a5 ?? "noData";
                    tempAry[8] = response.data[pageIndex ?? 0]?.a6 ?? "noData";
                    tempAry[9] = response.data[pageIndex ?? 0]?.m1 ?? "-";
                    tempAry[10] = response.data[pageIndex ?? 0]?.m2 ?? "-";
                    tempAry[11] = response.data[pageIndex ?? 0]?.m3 ?? "-";
                    tempAry[12] = response.data[pageIndex ?? 0]?.m4 ?? "-";
                    tempAry[13] = response.data[pageIndex ?? 0]?.m5 ?? "-";
                    tempAry[14] = response.data[pageIndex ?? 0]?.m6 ?? "-";
                    setAry(tempAry);
                    console.log(tempAry);
                })
                .catch(function (error) { console.log(error); })
            prevPageIndex = pageIndex;
        }
    }, [dataAry, pageIndex, setAry])

    return (<div className="notDisplay"> </div>)
}

export default RenderSelectPage;