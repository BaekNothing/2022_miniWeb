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

function PageRender (){
    const {index, setIndex} = pageIndex();
    const { dataAry} = pageData();

    return (
        <div>
            <p> {index} </p>
            <button onClick={()=>{setIndex(index + 1);}}>replace</button>
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
            console.log(pageData_from_server[index]);
            setAry(tempAry);
        }
    }, [setAry, index])

    return (
        <div>
            <p> {dataAry[0]}, </p>
            <p> {dataAry[1]}, </p>
            <p> {dataAry[2]}, </p>
            <p> {dataAry[3]}, </p>
            <p> {dataAry[4]}, </p>
            <p> {dataAry[5]}, </p>
            <p> {dataAry[6]}, </p>
        </div>)
}

export default PageRender;