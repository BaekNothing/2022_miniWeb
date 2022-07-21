import './PageManager.css';
import axios from "axios";
import create from 'zustand';
import React, { useEffect } from 'react';


const sceneData = create(set => ({
    sceneIndex: 0,
    setSceneIndex: (sceneIndex) => set(() => {return {sceneIndex}}),
}));

const pageData = create((set) => ({
    pageIndex: 0,
    setPageIndex: (pageIndex) => set(() => {
        return { pageIndex };
    }),
    dataAry: ['name', 'image', 'qusetion', 'answer1', 'answer2', 'answer3', 'answer4'],
    setAry: (dataAry) => set(() => { return { dataAry } })
}
))

const userSelectData = create((set) => ({
    userSelect: [],
    setUserSelect: (userSelect) => set(() => {
        return { userSelect };
    })
}
))

var _refreshUserSelectDataFlag = true;
var _userChosenData = 0;
function SetUserSelectDataFlag(flag, data) {
    _refreshUserSelectDataFlag = flag;
    _userChosenData = data;
}


// *************** PAGE ***************

const flags = {
    refresh: true,
    notRefresh: false
}

function PageRender() {
    const { pageIndex, setPageIndex, dataAry } = pageData();
    const { setUserSelect } = userSelectData();
    const { sceneIndex, setSceneIndex } = sceneData(); 

    useEffect(() => {
        
    }, [])

    if (sceneIndex === 0)
    {
        return (
            <div className="main-body" key="introPage">
                <p>this_Is_Intro_Page</p>
                <button onClick={()=>{
                    setSceneIndex(sceneIndex + 1); 
                    clearAlldata(setPageIndex, setUserSelect);
                    console.log(sceneIndex);}}> press_to_Continue</button>
            </div>
        )
    }
    else if (sceneIndex === 1)
    {
        return (
            <div className="main-body" key="setUserSelectData">
                <div className='Action'>
                    <SetUserSelectData 
                        //ChosenIndex is global variable
                        setUserSelect={setUserSelect} 
                        setSceneIndex={setSceneIndex} />
                    <GetPageData pageIndex={pageIndex}/>
                </div>
                <PageMainImage image={dataAry[1]} />
                <PageMainQuestionBox question={dataAry[2]} />
                <div className='main-SelectedHud'>
                    <PageMainUserSelectBox setPageIndex={setPageIndex}/>    
                </div>
            </div>
        )
    }
    else 
    {
        return (
            <div className="main-body" key="introPage">
                <p>this_Is_result_Page</p>
                <button onClick={()=>{
                    setSceneIndex(0);
                    clearAlldata(setPageIndex, setUserSelect);
                    }}> press to GoHome</button>
            </div>
        )
    }
}

function PageMainImage(prop){
    const image = prop.image;

    return (
        <div>
            <img src={'./images/' + image + '.png'} style={{ width:'480px' }} alt='' />
        </div>
    )
}

function PageMainQuestionBox(prop)
{
    const { pageIndex, setPageIndex } = pageData();
    const question = prop.question;
    //const pageIndex = prop.pageIndex;
    return (
        <div>
            
            <p> {pageIndex} 번 질문 : {question} </p>
            <button onClick={() => { 
                setPageIndex((pageIndex > 1 ? pageIndex - 1 : 0)); 
                SetUserSelectDataFlag(flags.notRefresh, _userChosenData) 
                }}>movePrev</button>

            <PageMainRadioInput liIndex={1} />
            <PageMainRadioInput liIndex={2} />
            <PageMainRadioInput liIndex={3} />
            <PageMainRadioInput liIndex={4} />
            <PageMainRadioInput liIndex={5} />

            <button onClick={() => { 
                setPageIndex(pageIndex + 1); 
                SetUserSelectDataFlag(flags.refresh, _userChosenData)
                }}>moveNext</button>            
        </div>
    )
}

function PageMainRadioInput(prop)
{
    const { pageIndex, setPageIndex, dataAry } = pageData();
    var liIndex = prop.liIndex;

    return (
        <div>
            <li>
                <label>
                    <input 
                        type="radio" 
                        name="radioInput" 
                        onChange={() => { 
                            setPageIndex(pageIndex + 1); 
                            SetUserSelectDataFlag(flags.refresh, liIndex); }} />
                        {dataAry[liIndex + 2]} <br />
                </label>
            </li>
        </div>
    )
}

function PageMainUserSelectBox(prop) {
    const { pageIndex } = pageData();
    const { userSelect } = userSelectData();
    
    const result = [];

    for (let i = 1; i < _pageIndexMax; i++) {
        if (i <= userSelect.length)
            if (i !== pageIndex + 1)
                result.push(<button className='box_Choosed' key={i}>{userSelect[i]??0}</button>);
            else
                result.push(<button className='box_Choosed' style={{ color: "red" }} key={i}>{userSelect[i]??0}</button>);
        else
            result.push(<button className='box_Choosed' style={{ opacity: "0.3" }} key={i}>0</button>);
    }
    return <div> {result} </div>
}

// *************** ACTION ***************

function SetUserSelectData(prop) {
    const { pageIndex } = pageData();
    const { userSelect } = userSelectData();
    const { sceneIndex } = sceneData();
    
    const setUserSelect = prop.setUserSelect;
    const setSceneIndex = prop.setSceneIndex;
    const chosenIndex = _userChosenData;

    useEffect(() => {
        if (_refreshUserSelectDataFlag) {
            //push SelectedNumber to userSelect
            var tempAry = [...userSelect];
            while (tempAry.length <= pageIndex)
                tempAry.push(0);
            tempAry[pageIndex] = chosenIndex;
            console.log(tempAry);
            setUserSelect(tempAry);
            
            //move to next Scene
            if(pageIndex >= _pageIndexMax - 1)
                setSceneIndex(sceneIndex + 1);

            _refreshUserSelectDataFlag = false;
        }
    }, [userSelect, pageIndex, setUserSelect, sceneIndex, setSceneIndex, chosenIndex])
    return <div className='invisible'> </div>;
}

function clearAlldata(setPageIndex, setUserSelect) {
    setPageIndex(0);
    setUserSelect([]);
}

// *************** DATA ***************

var _pageIndexMax = 10;
var prevPageIndex = -1;
function GetPageData(prop) {
    const { pageIndex, dataAry, setAry } = pageData();

    useEffect(() => {
        if (prevPageIndex !== pageIndex) {
            axios.get('http://localhost:8080')
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
                    setAry(tempAry);
                    console.log(tempAry);
                })
                .catch(function (error) { console.log(error); })
            prevPageIndex = pageIndex;
        }
    }, [dataAry, pageIndex, setAry])

    return (<div className="notDisplay"> </div>)
}

// var nowIndex = -1;
// function Debug_RenderPage() {
//     const { dataAry, setAry } = pageData();
//     const { pageIndex } = pageData();
// var pageData_from_server = undefined;

//     useEffect(() => {
//         const tempAry = [...dataAry];
//         if (pageData_from_server === undefined || tempAry === undefined || pageIndex === undefined)
//             console.log("undefined");
//         else if (nowIndex !== pageIndex) {
//             nowIndex = pageIndex;
//             tempAry[0] = pageData_from_server.data[pageIndex]?.name ?? String(pageIndex) + "noData";
//             tempAry[1] = pageData_from_server.data[pageIndex]?.image ?? "noData";
//             tempAry[2] = pageData_from_server.data[pageIndex]?.q ?? "noData";
//             tempAry[3] = pageData_from_server.data[pageIndex]?.a1 ?? "noData";
//             tempAry[4] = pageData_from_server.data[pageIndex]?.a2 ?? "noData";
//             tempAry[5] = pageData_from_server.data[pageIndex]?.a3 ?? "noData";
//             tempAry[6] = pageData_from_server.data[pageIndex]?.a4 ?? "noData";
//             setAry(tempAry);
//         }
//     }, [setAry, pageIndex])

//     return (<div className="notDisplay">{Debug_returnArrayToP(dataAry)} </div>)
// }

// function Debug_returnArrayToP(ary) {
//     var result = [];
//     for (let i = 0; i < ary.length; i++) {
//         result.push(<p key={i}>{ary[i]}</p>);
//     }
//     return result;
// }

export default PageRender;