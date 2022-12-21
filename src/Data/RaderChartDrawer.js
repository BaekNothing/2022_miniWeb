import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { sceneData, pageData, userSelectData, baseHigherData, baseLowerData } from './AppVars';


const data = [
    {
        subject: '본질',
        A: 120,
        fullMark: 150,
    },
    {
        subject: '직장',
        A: 98,
        fullMark: 150,
    },
    {
        subject: '교육',
        A: 86,
        fullMark: 150,
    },
    {
        subject: '재력',
        A: 99,
        fullMark: 150,
    },
    {
        subject: '건강',
        A: 85,
        fullMark: 150,
    }
];

function RaiderChart() 
{
    const { userSelect } = userSelectData();

    SetData(userSelect);

    return (
        <RadarChart width={480} height={350} cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 5]} />
            <Radar  dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    );   
}

const addictiveData = [
    [0.75, 1, 1, 1, 1, 1], // 성별 여 남 x
    [1, 1, 1, 1, 1, 1], // 나이 10대 20대 30대 40대 50대 60대 이상
    [1, 0.8, 1, 1, 1, 1], // 국적 한국인 외국인
    [0.85, 1, 1, 1, 1, 1], // 퀴어 o x
    [0.45, 1, 1, 1, 1, 1], // 장애 o x
    [1.12, 1, 1, 1, 1, 1], // 수도권 o x
    [1.15, 1, 1, 1, 1, 1], // 결혼 o x
    [1, 1, 1, 1, 1, 1], // 불로소득 많음 적음 없음
    [1, 1, 1, 1, 1, 1], // 고정지출 많음 적음 없음
    [1.3, 1, 1, 1, 1, 1], // 근로방식 정규직 비정규직 무직
    [1, 1, 1, 1, 1, 1], // 근로 규모 대기업 중소기업 자영업 프리랜서 무직
    [1.36, 1.08, 1, 0.79, 0.79, 1], // 최종학력 해외석/박사 석/박사 학사 의무교육 해당사항없음
    [1.07, 1, 0.93, 1, 1, 1], // 교육 장소 서울 수도권 비수도권 
    [1, 1, 1, 1, 1, 1], // 결과
    [1, 1, 1, 1, 1, 1]
]

function SetMaximalData(userSelect)
{
    for (let i = 0; i < 5; i++)
    {
        var max = 1;
        for(let k = 0; k < 6; k++)
        {
            if (max < addictiveData[i][k])
            {
                max = addictiveData[i][k];
            }
        }
        data[i].fullMark = max;
    }
}

function SetData(userSelect)
{
    // init all data.A set zero 
    for (let i = 0; i < 5; i++)
    {
        data[i].A = 0;
    }
    SetMaximalData(userSelect);
    //0: 본질 1: 직장 2: 교육 3: 재력 4: 건강
    data[0].A += addictiveData[1][userSelect[1]] // 나이 - 본질
    data[1].A += addictiveData[1][userSelect[1]] // 나이 - 직장
    data[4].A += addictiveData[1][userSelect[1]] // 나이 - 건강
    
    
    
    data[0].A += addictiveData[2][userSelect[2]] // 국적 - 본질
    data[0].A += addictiveData[3][userSelect[3]] // 퀴어 - 본질
    data[0].A += addictiveData[4][userSelect[4]] // 장애 - 건강
    data[0].A += addictiveData[5][userSelect[5]] // 수도권 - 본질
    data[0].A += addictiveData[6][userSelect[6]] // 결혼 - 본질
    data[0].A += addictiveData[7][userSelect[7]] // 불로소득 - 재력
    data[0].A += addictiveData[8][userSelect[8]] // 고정지출 - 재력
    data[0].A += addictiveData[9][userSelect[9]] // 근로방식 - 직장
    data[0].A += addictiveData[10][userSelect[10]] // 근로 규모 - 직장
    data[0].A += addictiveData[11][userSelect[11]] // 최종학력 - 교육
    data[0].A += addictiveData[12][userSelect[12]] // 교육 장소 - 교육

    // data[indexData[0]].A += addictiveData[0][userSelect[0]] // 성별 - 본질
    // data[indexData[1]].A += addictiveData[1][userSelect[1]] // 나이 - 건강
    // data[indexData[2]].A += addictiveData[2][userSelect[2]] // 국적 - 본질
    // data[indexData[3]].A += addictiveData[3][userSelect[3]] // 퀴어 - 본질
    // data[indexData[4]].A += addictiveData[4][userSelect[4]] // 장애 - 건강
    // data[indexData[5]].A += addictiveData[5][userSelect[5]] // 수도권 - 본질
    // data[indexData[6]].A += addictiveData[6][userSelect[6]] // 결혼 - 본질
    // data[indexData[7]].A += addictiveData[7][userSelect[7]] // 불로소득 - 재력
    // data[indexData[8]].A += addictiveData[8][userSelect[8]] // 고정지출 - 재력
    // data[indexData[9]].A += addictiveData[9][userSelect[9]] // 근로방식 - 직장
    // data[indexData[10]].A += addictiveData[10][userSelect[10]] // 근로 규모 - 직장
    // data[indexData[11]].A += addictiveData[11][userSelect[11]] // 최종학력 - 교육
    // data[indexData[12]].A += addictiveData[12][userSelect[12]] // 교육 장소 - 교육
}

export default RaiderChart
