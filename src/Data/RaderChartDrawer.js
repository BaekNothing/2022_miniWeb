import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { sceneData, pageData, userSelectData, baseHigherData, baseLowerData } from './AppVars';


const data = [
    {
        // -10 ~ 15
        subject: '본질',
        A: 120,
        fullMark: 16, // -10 ~ 16
    },
    {
        subject: '직장',
        A: 98,
        fullMark: 22, // -20 ~ 22
    },
    {
        subject: '교육',
        A: 86,
        fullMark: 24, // -20 ~ 24
    },
    {
        subject: '재력',
        A: 99,
        fullMark: 15, // -1 ~ 15
    },
    {
        subject: '건강',
        A: 85,
        fullMark: 14, // -8 ~ 14
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
            <PolarRadiusAxis angle={30} domain={[-10, 15]} />
            <Radar  
                dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}
                label={CustomLabel} />
            <Legend />
        </RadarChart>
    );   
}

const CustomLabel = ({ x, y, stroke, value }) => (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
    </text>
);

const dicType = {
    "본질": 0,
    "직장": 1,
    "교육": 2,
    "재력": 3,
    "건강": 4
}

const selectType = {

}

function SetData(userSelect)
{
    // init all data.A set zero 
    for (let i = 0; i < 5; i++)
    {
        data[i].A = 0;
    }

    switch (userSelect[1]) { // 성별
        case 1: // 여성
            data[dicType["본질"]].A += -1;
            data[dicType["직장"]].A += -1;
            data[dicType["재력"]].A += -1;
            data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += 1;
            break;
        case 2: // 남성
            data[dicType["본질"]].A += 2;
            data[dicType["직장"]].A += 2;
            data[dicType["재력"]].A += 2;
            data[dicType["교육"]].A += 2;
            data[dicType["건강"]].A += 2;
            break;
    }

    switch (userSelect[2]) { // 나이
        case 1: // 0 ~ 19
            data[dicType["본질"]].A += 2;
            data[dicType["직장"]].A += -2;
            data[dicType["재력"]].A += -2;
            data[dicType["교육"]].A += 2;
            data[dicType["건강"]].A += 2;
            break;
        case 2: // 20 ~ 29
            data[dicType["본질"]].A += 2;
            data[dicType["직장"]].A += 2;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 2;
            data[dicType["건강"]].A += 2;
            break;
        case 3: // 30 ~ 39
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 2;
            data[dicType["재력"]].A += 2;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 4: // 40 ~ 49
            data[dicType["본질"]].A += 0;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += 0;
            break;
        case 5: // 50 ~ 59
            data[dicType["본질"]].A += -1;
            data[dicType["직장"]].A += -1;
            data[dicType["재력"]].A += 0;
            data[dicType["교육"]].A += -1;
            data[dicType["건강"]].A += -1;
            break;
        case 6: // 60 ~
            data[dicType["본질"]].A += -2;
            data[dicType["직장"]].A += -2;
            data[dicType["재력"]].A += -2;
            data[dicType["교육"]].A += -2;
            data[dicType["건강"]].A += -2;
            break;
    }
    switch (userSelect[3]) { // 국적
        case 1: // 한국
            data[dicType["본질"]].A += +1;
            data[dicType["직장"]].A += +2;
            data[dicType["재력"]].A += +2;
            data[dicType["교육"]].A += +1;
            data[dicType["건강"]].A += +2;
            break;
        case 2: // 외국
            data[dicType["본질"]].A += -1;
            data[dicType["직장"]].A += -2;
            data[dicType["재력"]].A += -2;
            data[dicType["교육"]].A += -1;
            data[dicType["건강"]].A += -2;
            break;
    }
    switch (userSelect[4]) { // 퀴어
        case 1: // 퀴어
            data[dicType["본질"]].A += -2;
            data[dicType["직장"]].A += -1;
            data[dicType["재력"]].A += -1;
            //data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += -1;
            break;
        case 2: // 비퀴어
            data[dicType["본질"]].A += +2;
            data[dicType["직장"]].A += +1;
            data[dicType["재력"]].A += +1;
            //data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += +1;
            break;
    }
    switch (userSelect[5]) { // 장애
        case 1: // 장애
            data[dicType["본질"]].A += -2;
            data[dicType["직장"]].A += -2;
            data[dicType["재력"]].A += -2;
            data[dicType["교육"]].A += -2;
            data[dicType["건강"]].A += -2;
            break;
        case 2: // 비장애
            data[dicType["본질"]].A += +2;
            data[dicType["직장"]].A += +2;
            data[dicType["재력"]].A += +2;
            data[dicType["교육"]].A += +2;
            data[dicType["건강"]].A += +2;
            break;
    }
    switch (userSelect[6]) { // 수도권
        case 1: // 수도권
            //data[dicType["본질"]].A += +1;
            data[dicType["직장"]].A += +2;
            data[dicType["재력"]].A += +1;
            data[dicType["교육"]].A += +2;
            data[dicType["건강"]].A += +1;
            break;
        case 2: // 비수도권
            //data[dicType["본질"]].A += -1;
            data[dicType["직장"]].A += -2;
            data[dicType["재력"]].A += -1;
            data[dicType["교육"]].A += -2;
            data[dicType["건강"]].A += -1;
            break;
    }
    switch (userSelect[7]) { // 결혼
        case 1: // 결혼
            //data[dicType["본질"]].A += +1;
            if(userSelect[0] === 0)
                data[dicType["직장"]].A += -1; //남성은 +1, 여성은 -1
            else
                data(dicType["직장"]).A += 1;
            data[dicType["재력"]].A += +1;
            //data[dicType["교육"]].A += 0;
            //data[dicType["건강"]].A += 0;
            break;
        case 2: // 미혼
            //data[dicType["본질"]].A += 0;
            data[dicType["직장"]].A += 0;
            data[dicType["재력"]].A += -1;
            //data[dicType["교육"]].A +=0;
            //data[dicType["건강"]].A += 0;
            break;
    }
    switch (userSelect[8]) { // 불로소득
        case 1: // 많음
            data[dicType["본질"]].A += +2;
            //data[dicType["직장"]].A += 0;
            data[dicType["재력"]].A += +2;
            //data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += +2;
            break;
        case 2: // 적음
            data[dicType["본질"]].A += +1;
            //data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += +1;
            //data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += +1;
            break;
        case 3: // 없음
            data[dicType["본질"]].A += 0;
            //data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 0;
            //data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 0;
            break;
    }
    switch (userSelect[9]) { // 고정지출
        case 1: // 많음
            //data[dicType["본질"]].A += 1;
            //data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += -1;
            //data[dicType["교육"]].A += 1;
            //data[dicType["건강"]].A += 1;
            break;
        case 2: // 적음
            //data[dicType["본질"]].A += 1;
            //data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 0;
            //data[dicType["교육"]].A += 1;
            //data[dicType["건강"]].A += 1;
            break;
        case 3: // 없음
            //data[dicType["본질"]].A += 1;
            //data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += +1;
            //data[dicType["교육"]].A += 1;
            //data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[10]) { // 근로방식
        case 1: // 정규직
            data[dicType["본질"]].A += +2;
            data[dicType["직장"]].A += +2;
            data[dicType["재력"]].A += +2;
            data[dicType["교육"]].A += +1;
            data[dicType["건강"]].A += +1;
            break;
        case 2: // 비정규직
            data[dicType["본질"]].A += -1;
            data[dicType["직장"]].A += -1;
            data[dicType["재력"]].A += 0;
            data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += 0;
            break;
        case 3: // 무직
            data[dicType["본질"]].A += -2;
            data[dicType["직장"]].A += -2;
            data[dicType["재력"]].A += -2;
            data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += 0;
            break;
    }
    switch (userSelect[11]) { // 근로 규모
        case 1: // 대기업
            data[dicType["본질"]].A += +2;
            data[dicType["직장"]].A += +2;
            data[dicType["재력"]].A += +2;
            data[dicType["교육"]].A += +1;
            data[dicType["건강"]].A += +1;
            break;
        case 2: // 중소기업
            data[dicType["본질"]].A += +1;
            data[dicType["직장"]].A += +1;
            data[dicType["재력"]].A += +1;
            data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += 0;
            break;
        case 3: // 자영업
            data[dicType["본질"]].A += +1;
            data[dicType["직장"]].A += +1;
            data[dicType["재력"]].A += +1;
            data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += -1;
            break;
        case 4: // 프리랜서
            data[dicType["본질"]].A += +1;
            data[dicType["직장"]].A += +1;
            data[dicType["재력"]].A += +1;
            data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += -1;
            break;
        case 5: // 무직
            data[dicType["본질"]].A += 0;
            data[dicType["직장"]].A += -2;
            data[dicType["재력"]].A += -2;
            data[dicType["교육"]].A += 0;
            data[dicType["건강"]].A += 0;
            break;
    }
    switch (userSelect[12]) { // 연봉
        case 1: // 8000이상
            //data[dicType["본질"]].A += +2;
            data[dicType["직장"]].A += +2;
            data[dicType["재력"]].A += +2;
            //data[dicType["교육"]].A += 0;
            //data[dicType["건강"]].A += +2;
            break;
        case 2: // 5000이상
            //data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += +1;
            data[dicType["재력"]].A += +1;
            //data[dicType["교육"]].A += 1;
            //data[dicType["건강"]].A += 1;
            break;
        case 3: // 3000이상
            //data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 0;
            data[dicType["재력"]].A += 0;
            //data[dicType["교육"]].A += 1;
            //data[dicType["건강"]].A += 1;
            break;
        case 4: // 3000미만
            //data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += -1;
            data[dicType["재력"]].A += -1;
            //data[dicType["교육"]].A += 1;
            //data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[13]) { // 학력
        case 1: // 석사 이상
            //data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += +2;
            data[dicType["재력"]].A += +2;
            data[dicType["교육"]].A += +2;
            //data[dicType["건강"]].A += 1;
            break;
        case 2: // 대학 이상
            //data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += +1;
            data[dicType["재력"]].A += +1;
            data[dicType["교육"]].A += +1;
            //data[dicType["건강"]].A += 1;
            break;
        case 3: // 고등 이상
            //data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += -1;
            data[dicType["재력"]].A += -1;
            data[dicType["교육"]].A += -1;
            //data[dicType["건강"]].A += 1;
            break;
        case 4: // 의무교육 이상
            //data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += -1;
            data[dicType["재력"]].A += -1;
            data[dicType["교육"]].A += -1;
            //data[dicType["건강"]].A += 1;
            break;
        case 5: // 해당사항 없음
            //data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += -2;
            data[dicType["재력"]].A += -2;
            data[dicType["교육"]].A += -2;
            //data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[14]) { // 교육 장소
        case 1: // 서울
            data[dicType["본질"]].A += +2;
            data[dicType["직장"]].A += +2;
            data[dicType["재력"]].A += +2;
            data[dicType["교육"]].A += +2;
            //data[dicType["건강"]].A += 1;
            break;
        case 2: // 수도권
            data[dicType["본질"]].A += +1;
            data[dicType["직장"]].A += +1;
            data[dicType["재력"]].A += +1;
            data[dicType["교육"]].A += +1;
            //data[dicType["건강"]].A += 1;
            break;
        case 3: // 비 수도권
            data[dicType["본질"]].A += -1;
            data[dicType["직장"]].A += -2;
            data[dicType["재력"]].A += -2;
            data[dicType["교육"]].A += -2;
            //data[dicType["건강"]].A += 1;
            break;
    }
}

export default RaiderChart
