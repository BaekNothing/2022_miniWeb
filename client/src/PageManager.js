import './App.css';
import axios from "axios";
import create from 'zustand';
import React, { UseEffect, useState } from 'react';

const pageData = create((set)=>({
    dataAry : ['name', 'image', 'qusetion', 'answer1', 'answer2', 'answer3', 'answer4'],
    setAry : (dataAry, data, index) => set(() => {
        var tempAry = [...dataAry];
        tempAry[index] = data;
        dataAry = tempAry;
        return {dataAry} ;
    })}
))

const pageIndex = create((set)=>({
    index : 0,
    setIndex : (index) => set(() => {
        return {index} ;
    })}
))

function PageRender (){
    const {index, setIndex} = pageIndex();
    const pageDataAry = GetPageData();

    return (
        <div>
            <p> {pageDataAry[0]} </p>
            <p> {pageDataAry[1]} </p>
            <p> {pageDataAry[2]} </p>
            <p> {pageDataAry[3]} </p>
            <p> {pageDataAry[4]} </p>
            <p> {pageDataAry[5]} </p>
            <p> {pageDataAry[6]} </p>
            
            <button onClick={()=>{setIndex(index + 1)}}>replace</button>
        </div>
    )
}

function GetPageData(){
    const {dataAry, setAry} = pageData();
    const {index} = pageIndex();
    if(dataAry === '')
    {
        UseEffect(() => {
            axios.get('http://localhost:8080')
                .then(function async (response) {
                    console.log(response);
                    setAry(dataAry, response.data[index]?.name?? "noName", 0);
                    setAry(dataAry, response.data[index]?.image?? "noImage", 1);
                    setAry(dataAry, response.data[index]?.question?? "noQuestion", 2);
                    setAry(dataAry, response.data[index]?.answer1?? "noAnswer1", 3);
                    setAry(dataAry, response.data[index]?.answer2?? "noAnswer2", 4);
                    setAry(dataAry, response.data[index]?.answer3?? "noAnswer3", 5);
                    setAry(dataAry, response.data[index]?.answer4?? "noAnswer4", 6);
                    return dataAry;
                })
                .catch(function (error) { console.log(error); })
        }, [setAry])
    }
    else 
        return dataAry;
}

export default PageRender;