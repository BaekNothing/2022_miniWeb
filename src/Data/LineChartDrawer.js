import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
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
            <Line type="monotone" dataKey="state" stroke="#ff00ff" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" opacity={1.0} />
            <XAxis dataKey="name" />
            <YAxis />
            {/* <Tooltip /> */}
        </LineChart>
    )
}

function GetMultplier(userSelect, prevIndex)
{
    var result = 1;
    for (let i = 0; i < userSelect.length - 1; i++) 
    {
        result *= mulitpliData[i][userSelect[i] - 1];
        //console.log("No." + i + ":" + userSelect[i] + " is "+ mulitpliData[i][userSelect[i]]);
    }
    //remap [0.168 ~ 2.43] to [0.3 ~ 3]
    result = (result - 0.168) / (2.43 - 0.168) * (3 - 0.3) + 0.3;
    console.log("result:" + result);
    return result;
}

export default RenderLineChart;
