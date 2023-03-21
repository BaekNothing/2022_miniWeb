import { BarChart, LineChart, Line, CartesianGrid, Legend, XAxis, YAxis, Tooltip, Bar} from 'recharts';
import React, { useEffect } from 'react';
import { sceneData, pageData, userSelectData, baseHigherData, baseLowerData, mulitpliData, GetMultiplier } from './AppVars';

const _name = [
    "10대",
    "20대",
    "30대",
    "40대",
    "50대",
    "60대"
]


const CustomLabel = ({ x, y, stroke, value }) => (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {Math.round(value)}
    </text>
);

function RenderLineChart() 
{

    const { userSelect } = userSelectData();
    const { prevIndex } = pageData();

    const originData = userSelect[0] === 0 ? baseHigherData : baseLowerData;
    const mulitplier = GetMultiplier(userSelect) * (1.7) + 0.3;
    const data = [];

    for (let i = 0; i < originData.length; i++) {
        data.push({
            name: _name[i],
            표준소득: originData[i],
            예상소득: Math.round((originData[i] * mulitplier)),
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
            <Bar dataKey="표준소득" fill="#8884d8" opacity={0.3} />
            <Bar dataKey="예상소득" fill="#2F4FFD" />
        </BarChart>
    );
}


export default RenderLineChart;
