import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import React, { useEffect } from 'react';
import { sceneData, pageData, userSelectData, baseHigherData, baseLowerData, mulitpliData } from './AppVars';

const _name = [
    "10대",
    "20대",
    "30대",
    "40대",
    "50대",
    "60대"
]


function RenderLineChart()
{
    const { userSelect } = userSelectData();
    const { prevIndex } = pageData();

    const originData = userSelect[0] === 0 ? baseHigherData : baseLowerData;
    const mulitplier = GetMultplier(userSelect);
    const newList = [];
    
    for (let i = 0; i < originData.length; i++) {
        newList.push({
            name: _name[i],
            base: originData[i],
            state: originData[i] * mulitplier,
            amt: mulitplier
        });
    }

    return (
        <LineChart width={440} height={350} data={newList} margin={{ top: 50, right: 50, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="base" stroke="#8884d8" />
            <Line type="monotone" dataKey="state" stroke="#ff00ff" label={CustomLabel} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" opacity={1.0} />
            <XAxis dataKey="name" />
            <YAxis />
            {/* <Tooltip /> */}
        </LineChart>
    )
}

const CustomLabel = ({ x, y, stroke, value }) => (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {Math.round(value)}
    </text>
);

function GetMultplier(userSelect)
{
    var result = 1;
    for (let i = 0; i < userSelect.length - 1; i++) 
    {
        if(userSelect[i] <= 0)
            continue;
        result *= mulitpliData[i][userSelect[i] - 1];
        //console.log("No." + i + ":" + userSelect[i] + " is "+ mulitpliData[i][userSelect[i]]);
    }
    //remap [0.168 ~ 2.43] to [0.3 ~ 3]
    result = (result - 0.168) / (2.43 - 0.168) * (3 - 0.3) + 0.3;
    console.log("result:" + result);
    return result;
}

export default RenderLineChart;
