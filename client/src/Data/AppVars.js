import create from 'zustand';


const dummyData = create(set => ({
    dummy: 0,
    SetDummy: (inputData) => set(() => { return { inputData } }),

}));

const sceneData = create(set => ({
    sceneIndex: 0,
    setSceneIndex: (sceneIndex) => set(() => { return { sceneIndex } }),
    
}));

const pageData = create((set) => ({
    previndex: [],
    setPrevIndex: (prevIndex) => set(() => { return { prevIndex } }),
    pageIndex: 0,
    setPageIndex: (pageIndex) => set(() => { return { pageIndex } }),
    dataAry: ['name', 'image', 'qusetion', 
        'answer1', 'answer2', 'answer3', 'answer4', 'answer5', 'answer6', 
        'm1', 'm2', 'm3', 'm4', 'm5', 'm6'],
    setAry: (dataAry) => set(() => { return { dataAry } })
}
))

const userSelectData = create((set) => ({
    userSelect: [],
    setUserSelect: (userSelect) => set(() => {
        return { userSelect };
    })
}
))

const questionData = [
    ["q0", "gender", "성별이 어떻게 돼 ?", "여", "남", "선택하지 않을래", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q1", "age", "나이는 어떻개 돼 ?", "0~19세", "20~29세", "30~39세", "40~49세", "50~59세", "60세 이상", "-", "-", "-", "-", "-", "-"],
    ["q2", "contury", "지금 대한민국 국적이야 ?", "응.한국 국적이야", "아니 외국 국적이야", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q3", "queer", "퀴어야 ?", "응.퀴어야", "퀴어 아니야", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q4", "disabled", "장애가 있어 ?", "응 있어", "아니.없어.", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q5", "century", "지금 수도권에 살고있어 ?", "응 수도권에 살아", "아니.비 수도권에 살아", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q6", "marriage", "지금 결혼한 상태야 ?", "응 결혼한 상태야", "아니.결혼 안한 상태야.", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q7", "earn", "불로소득이 있어 ?", "많음", "적음", "없음", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q8", "income", "고정지출이 있어 ?", "많음", "적음", "없음", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q9", "outcome", "고용형태 ?", "정규직", "비정규직", "없음", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q10", "amount", "직장 규모 ?", "대기업", "중소기업", "자영업", "프리랜서", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q11", "payment", "연봉 ?", "8000이상", "5000이상", "3000이상", "3000미만", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q12", "grade", "최종 학력 ?", "해외 석/박사", "석/박사", "학사", "정규교육", "해당사항 없음", "noData", "-", "-", "-", "-", "-", "-"],
    ["q13", "result", "결과보기", "결과보기", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-", "-"],
    ["last", "temp", "this is temp Question 7", "noData", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["end", "temp", "this is temp Question 8", "noData", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"]
]

const mulitpliData = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6]
]

const baseHigherData = [
    102,
    239,
    370,
    454,
    449,
    270
]

const baseLowerData = [
    89,
    219,
    304,
    300,
    252,
    140
]

export {dummyData, sceneData, pageData, userSelectData, questionData, baseHigherData, baseLowerData, mulitpliData}