import './App.css';
import axios from "axios";
import create from 'zustand';
import React, { useEffect, useState } from 'react';

const pageData = create((set)=>({
    dataAry : ['name', 'image', 'qusetion', 'answer1', 'answer2', 'answer3', 'answer4'],
    setAry : (dataAry) => set(() => { return {dataAry}})}
))

const pageIndex = create((set)=>({
    index : 0,
    setIndex : (index) => set(() => {
        return {index} ;
    })}
))

const userSelectData = create((set)=>({
    userSelect : [],
    setUserSelect : (userSelect) => set(() => {
        return {userSelect} ;
    })}
))

var refreshUserSelectData_flag = true;
var refreshUserSelectData_data = 0;
function SetUserSelectDataFlag(flag, data) {
    refreshUserSelectData_data = data;
    refreshUserSelectData_flag = flag;
}
function SetUserSelectData(userSelect, setUserSelect, index, data){
    useEffect(() => {
        if(refreshUserSelectData_flag)
        {
            var tempAry = [...userSelect];
            while (tempAry.length <= index)
                tempAry.push(0);
            tempAry[index] = refreshUserSelectData_data;
            console.log(tempAry);
            setUserSelect(tempAry);
            refreshUserSelectData_flag = false;
        }}, [setUserSelect, index, data])
    
    const result = [];
    for (let i = 0; i < userSelect.length; i++) {
        if(i  !== index)
            result.push(<p key={i}>{userSelect[i]}</p>);
        else
            result.push(<p style={{color:"red"}} key={i}>{userSelect[i]}</p>);
    }
    return result;
}

function PageRender (){
    const { dataAry, setAry } = pageData();
    const { index, setIndex } = pageIndex();
    const { userSelect, setUserSelect } = userSelectData();

    return (
        <div key="setUserSelectData">
            <p> {dataAry[0]} </p>
            <p> page : {index} </p>
            <p> {dataAry[1]} </p>
            <p> {dataAry[2]} </p>
            <button onClick={() => { setIndex((index > 1 ? index - 1 : 0)); SetUserSelectDataFlag(false, refreshUserSelectData_data) }}>movePrev</button>
            <input type="radio" name="radio" value={dataAry[3]} onChange={() => { SetUserSelectDataFlag(true, 1); }}/>
            <input type="radio" name="radio" value={dataAry[4]} onChange={() => { SetUserSelectDataFlag(true, 2); }}/>
            <input type="radio" name="radio" value={dataAry[5]} onChange={() => { SetUserSelectDataFlag(true, 3); }}/>
            <input type="radio" name="radio" value={dataAry[6]} onChange={() => { SetUserSelectDataFlag(true, 4); }}/>
            <button onClick={() => { setIndex(index + 1); SetUserSelectDataFlag(true, refreshUserSelectData_data) }}>moveNext</button>
            {SetUserSelectData(userSelect, setUserSelect, index, refreshUserSelectData_data)}
            {GetPageData(index)}
            {RenderPage(index)}
        </div>
    )
}

var pageData_from_server = undefined;

function GetPageData() {
    const { dataAry, setAry } = pageData();
    const { index } = pageIndex();
    
    useEffect(() => {
        axios.get('http://localhost:8080')
            .then(function async (response) {
                pageData_from_server = response;
                var tempAry = [...dataAry];
                tempAry[0] = response.data[index ?? 0]?.name?? String(index ?? 0) + " noData";
                tempAry[1] = response.data[index ?? 0]?.image??"noData";
                tempAry[2] = response.data[index ?? 0]?.q??"noData";
                tempAry[3] = response.data[index ?? 0]?.a1??"noData";
                tempAry[4] = response.data[index ?? 0]?.a2??"noData";
                tempAry[5] = response.data[index ?? 0]?.a3??"noData";
                tempAry[6] = response.data[index ?? 0]?.a4??"noData";
                setAry(tempAry);
                console.log(tempAry);
            })
            .catch(function (error) { console.log(error); })
    }, [])

    return (<div> </div>)
}

var nowIndex = -1;
function RenderPage(){
    const { dataAry, setAry } = pageData();
    const { index } = pageIndex();
    
    useEffect(() => {
        const tempAry = [...dataAry];
        if (pageData_from_server === undefined || tempAry === undefined || index === undefined) 
            console.log("undefined");
        else if (nowIndex !== index)
        {
            nowIndex = index;
            tempAry[0] = pageData_from_server.data[index]?.name ?? String(index) + "noData";
            tempAry[1] = pageData_from_server.data[index]?.image ?? "noData";
            tempAry[2] = pageData_from_server.data[index]?.q ?? "noData";
            tempAry[3] = pageData_from_server.data[index]?.a1 ?? "noData";
            tempAry[4] = pageData_from_server.data[index]?.a2 ?? "noData";
            tempAry[5] = pageData_from_server.data[index]?.a3 ?? "noData";
            tempAry[6] = pageData_from_server.data[index]?.a4 ?? "noData";
            setAry(tempAry);
        }
    }, [setAry, index])

    return ( <div>{returnArrayToP(dataAry)} </div>)
}

function returnArrayToP(ary){
    var result = [];
    for (let i = 0; i < ary.length; i++) {
        result.push(<p key={i}>{ary[i]}</p>);
    }
    return result;
}

export default PageRender;