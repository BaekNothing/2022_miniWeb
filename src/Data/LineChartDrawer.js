import { BarChart, LineChart, Line, CartesianGrid, Legend, XAxis, YAxis, Tooltip, Bar} from 'recharts';
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


// function RenderLineChart() {
//     const { userSelect } = userSelectData();
//     const { prevIndex } = pageData();

//     const originData = userSelect[0] === 0 ? baseHigherData : baseLowerData;
//     const mulitplier = GetMultplier(userSelect);
//     const newList = [];

//     for (let i = 0; i < originData.length; i++) {
//         newList.push({
//             name: _name[i],
//             base: originData[i],
//             state: originData[i] * mulitplier,
//             amt: mulitplier
//         });
//     }

//     return (
//         <LineChart 
//             width={500}
//             height={300}
//             margin={{ top: 30, left: -30 }} 
//             data={newList}>
//             <XAxis dataKey="name" fontSize={12} />
//             <YAxis fontSize={12} /> 
//             <Tooltip />
//             <Legend />
//             <CartesianGrid strokeDasharray="3 3" />
//             <Line dataKey="base" stroke="#8884d8" />
//             <Line dataKey="state" stroke="#82ca9d" label={CustomLabel} />
//         </LineChart>
//     )
// }


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

// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];

function RenderLineChart() 
{

    const { userSelect } = userSelectData();
    const { prevIndex } = pageData();

    const originData = userSelect[0] === 0 ? baseHigherData : baseLowerData;
    const mulitplier = GetMultplier(userSelect);
    const data = [];

    for (let i = 0; i < originData.length; i++) {
        data.push({
            name: _name[i],
            default: originData[i],
            You: Math.round((originData[i] * mulitplier)),
            amt: mulitplier
        });
    }

    return (
        <BarChart
            layout="vertical"
            width={300}
            height={480}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: -25,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis fontSize={12} type="number" domain={[0, 900]} />
            <YAxis fontSize={12} dataKey="name" type="category" />
            <Tooltip />
            <Legend align='right'  />
            <Bar dataKey="default" fill="#8884d8" opacity={0.3} />
            <Bar dataKey="You" fill="#2F4FFD" />
        </BarChart>
    );
}


export default RenderLineChart;
