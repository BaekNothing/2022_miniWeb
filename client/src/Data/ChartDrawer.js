import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React, { useEffect } from 'react';
import { sceneData, pageData, userSelectData, baseHigherData, baseLowerData, mulitpliData } from './AppVars';

    
function RenderLineChart() 
{
    const { userSelect } = userSelectData();
    const { prevIndex } = pageData();

    const originData = userSelect[0] === 0 ? baseHigherData : baseLowerData;
    const mulitplier = GetMultplier(userSelect, prevIndex);
    const newList = [];
    for (let i = 0; i < originData.length; i++) {
        newList.push({
            name: i,
            base: originData[i],
            state: originData[i] * mulitplier,
            amt: mulitplier
        });
    }

    return (
        <LineChart width={480} height={350} data={newList} margin={{ top: 50, right: 50, bottom: 5, left: 50 }}>
            <Line type="monotone" dataKey="base" stroke="#8884d8" />
            <Line type="monotone" dataKey="state" stroke="#ffffff" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" opacity={mulitplier} />
            <XAxis dataKey="name" />
            <YAxis />
            {/* <Tooltip /> */}
        </LineChart>
    )
}

function GetMultplier(userSelect, prevIndex) 
{
    var result = 1;
    for (let i = 1; i < userSelect.length - 1; i++) {
<<<<<<< HEAD
<<<<<<< HEAD
        result *= mulitpliData[prevIndex[i]][userSelect[i + 1]];
=======
        result *= 1 + mulitpliData[prevIndex[i]][userSelect[i + 1]] * 0.01;
        console.log(result);
>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb
=======
        result *= 1 + mulitpliData[prevIndex[i]][userSelect[i + 1]] * 0.01;
        console.log(result);
>>>>>>> 0e4efdb047112f0c31f8ad0e62f1b4063d69d5fb
    }
    return result;
}

export default RenderLineChart;