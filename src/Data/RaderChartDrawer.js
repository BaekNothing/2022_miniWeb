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
    
    switch (userSelect[0]) { // 성별
        case 0: // 여성
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 남성
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[1]) { // 나이
        case 0: // 0 ~ 19
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 20 ~ 29
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 2: // 30 ~ 39
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 3: // 40 ~ 49
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 4: // 50 ~ 59
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 5: // 60 ~
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[2]) { // 국적
        case 0: // 한국
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 외국
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[3]) { // 퀴어
        case 0: // 퀴어
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 비퀴어
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[4]) { // 장애
        case 0: // 장애
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 비장애
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[5]) { // 수도권
        case 0: // 수도권
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 비수도권
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[6]) { // 결혼
        case 0: // 결혼
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 미혼
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[7]) { // 불로소득
        case 0: // 많음
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 적음
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 2: // 없음
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[8]) { // 고정지출
        case 0: // 많음
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 적음
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 2: // 없음
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[9]) { // 근로방식
        case 0: // 정규직
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 비정규직
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 2: // 무직
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[10]) { // 근로 규모
        case 0: // 대기업
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 중소기업
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 2: // 자영업
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 3: // 프리랜서
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 4: // 무직
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[11]) { // 연봉
        case 0: // 8000이상
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 5000이상
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 2: // 3000이상
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 3: // 3000미만
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[12]) { // 학력
        case 0: // 석사 이상
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 대학 이상
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 2: // 고등 이상
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 3: // 의무교육 이상
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 4: // 해당사항 없음
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
    switch (userSelect[13]) { // 교육 장소
        case 0: // 서울
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 수도권
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
        case 1: // 비 수도권
            data[dicType["본질"]].A += 1;
            data[dicType["직장"]].A += 1;
            data[dicType["재력"]].A += 1;
            data[dicType["교육"]].A += 1;
            data[dicType["건강"]].A += 1;
            break;
    }
}

export default RaiderChart
