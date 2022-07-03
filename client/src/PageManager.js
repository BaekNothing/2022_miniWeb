import './PageManager.css';
import axios from "axios";
import create from 'zustand';
import React, { useEffect } from 'react';

const pageData = create((set) => ({
    dataAry: ['name', 'image', 'qusetion', 'answer1', 'answer2', 'answer3', 'answer4'],
    setAry: (dataAry) => set(() => { return { dataAry } })
}
))

const pageIndex = create((set) => ({
    index: 0,
    setIndex: (index) => set(() => {
        return { index };
    })
}
))

const userSelectData = create((set) => ({
    userSelect: [],
    setUserSelect: (userSelect) => set(() => {
        return { userSelect };
    })
}
))

// *************** PAGE ***************

const flags = {
    refresh: true,
    notRefresh: false
}

function PageRender() {
    const { dataAry } = pageData();
    const { index, setIndex } = pageIndex();
    const { userSelect, setUserSelect } = userSelectData();

    return (
        <div className="main-body" key="setUserSelectData">
            <Page_MainImage image={dataAry[1]} />
            <Page_MainQuestionBox question={dataAry[2]} index={index} />
            {SetUserSelectData(userSelect, setUserSelect, index, _refreshUserSelectData_data)}
            <div className='main-SelectedHud'>
                {GetPageData(index)}
            </div>
        </div>
    )
}

function Page_MainImage(prop){
    return (
        <div>
            <img src={'./images/' + prop.image + '.png'} style={{ width:'480px' }} />
        </div>
    )
}

function Page_MainQuestionBox(prop)
{
    const { setIndex } = pageIndex();
    const question = prop.question;
    const index = prop.index;
    return (
        <div>
            
            <p> {index} 번 질문 : {question} </p>
            <button onClick={() => { 
                setIndex((index > 1 ? index - 1 : 0)); 
                SetUserSelectDataFlag(flags.notRefresh, _refreshUserSelectData_data) 
                }}>movePrev</button>

            <Page_MainRadioInput index={1} />
            <Page_MainRadioInput index={2} />
            <Page_MainRadioInput index={3} />
            <Page_MainRadioInput index={4} />

            <button onClick={() => { 
                setIndex(index + 1); 
                SetUserSelectDataFlag(flags.refresh, _refreshUserSelectData_data)
                }}>moveNext</button>            
        </div>
    )
}

function Page_MainRadioInput(prop)
{
    const { dataAry } = pageData();
    const { index, setIndex } = pageIndex();
    var liIndex = prop.index;

    return (
        <div>
            <li>
                <label>
                    <input 
                        type="radio" 
                        name="radioInput" 
                        onChange={() => { setIndex(index + 1); SetUserSelectDataFlag(flags.refresh, liIndex); }} />
                        {dataAry[liIndex + 2]} <br />
                </label>
            </li>
        </div>
    )
}

// *************** ACTION ***************

var _refreshUserSelectData_flag = true;
var _refreshUserSelectData_data = 0;
function SetUserSelectDataFlag(flag, data) {
    _refreshUserSelectData_data = data;
    _refreshUserSelectData_flag = flag;
}

// userSelectData[0] is alawys "0"
function SetUserSelectData(userSelect, setUserSelect, index, data) {
    const{setIndex} = pageIndex();

    useEffect(() => {
        if (_refreshUserSelectData_flag) {
            var tempAry = [...userSelect];
            while (tempAry.length <= index)
                tempAry.push(0);
            tempAry[index] = _refreshUserSelectData_data;
            console.log(tempAry);
            setUserSelect(tempAry);
            _refreshUserSelectData_flag = false;
        }
    }, [userSelect, setUserSelect, index, data])

    const result = [];
    // for (let i = 1; i < userSelect.length; i++) {
    for (let i = 1; i < _indexMax; i++) {
        if (i <= userSelect.length)
        {
            if (i !== index + 1)
                result.push(<button className='box_Choosed'
                    onClick={() => { setIndex(i - 1); SetUserSelectDataFlag(flags.notRefresh, userSelectData[i]) }} key={i}>
                    {userSelect[i]??0}</button>);
            else
                result.push(<button className='box_Choosed' style={{ color: "red" }} key={i}>{userSelect[i]??0}</button>);
        }
        else
            result.push(<button className='box_Choosed' style={{ opacity: "0.3" }} key={i}>0</button>);
    }
    return result;
}

// *************** DATA ***************
var _indexMax = 10;
var Previndex = -1;
function GetPageData() {
    const { dataAry, setAry } = pageData();
    const { index } = pageIndex();

    useEffect(() => {
        if (Previndex !== index) {
            axios.get('http://localhost:8080')
                .then(function async(response) {
                    //pageData_from_server = response;
                    var tempAry = [...dataAry];
                    tempAry[0] = response.data[index ?? 0]?.name ?? String(index ?? 0) + " noData";
                    tempAry[1] = response.data[index ?? 0]?.image ?? "noData";
                    tempAry[2] = response.data[index ?? 0]?.q ?? "noData";
                    tempAry[3] = response.data[index ?? 0]?.a1 ?? "noData";
                    tempAry[4] = response.data[index ?? 0]?.a2 ?? "noData";
                    tempAry[5] = response.data[index ?? 0]?.a3 ?? "noData";
                    tempAry[6] = response.data[index ?? 0]?.a4 ?? "noData";
                    setAry(tempAry);
                    console.log(tempAry);
                })
                .catch(function (error) { console.log(error); })
            Previndex = index;
        }
    }, [dataAry, index, setAry])

    return (<div className="notDisplay"> </div>)
}

// var nowIndex = -1;
// function Debug_RenderPage() {
//     const { dataAry, setAry } = pageData();
//     const { index } = pageIndex();
// var pageData_from_server = undefined;

//     useEffect(() => {
//         const tempAry = [...dataAry];
//         if (pageData_from_server === undefined || tempAry === undefined || index === undefined)
//             console.log("undefined");
//         else if (nowIndex !== index) {
//             nowIndex = index;
//             tempAry[0] = pageData_from_server.data[index]?.name ?? String(index) + "noData";
//             tempAry[1] = pageData_from_server.data[index]?.image ?? "noData";
//             tempAry[2] = pageData_from_server.data[index]?.q ?? "noData";
//             tempAry[3] = pageData_from_server.data[index]?.a1 ?? "noData";
//             tempAry[4] = pageData_from_server.data[index]?.a2 ?? "noData";
//             tempAry[5] = pageData_from_server.data[index]?.a3 ?? "noData";
//             tempAry[6] = pageData_from_server.data[index]?.a4 ?? "noData";
//             setAry(tempAry);
//         }
//     }, [setAry, index])

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