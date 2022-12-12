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
    userName : '',
    SetUserName: (userName) => set(() => { return { userName } }),
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
    ["q9", "outcome", "어떻게 일해?", "정규직", "비정규직", "무직", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q10", "amount", "어디에서 일해 ?", "대기업", "중소기업", "자영업", "프리랜서", "무직", "noData", "-", "-", "-", "-", "-", "-"],
    ["q11", "payment", "연봉이 어떻게 돼 ?", "8000이상", "5000이상", "3000이상", "3000미만", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q12", "grade", "마지막으로 졸업한 학교가 어디야?", "석/박사 이상", "대학교", "고등학교", "의무교육", "해당사항 없음", "noData", "-", "-", "-", "-", "-", "-"],
    ["q13", "schoolRegion", "교육은 어디에서 받았어?", "서울", "수도권", "비 수도권", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q14", "result", "자 이제 결과를 볼까", "결과보기", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-", "-"],
    ["last", "temp", "this is temp Question 7", "noData", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["end", "temp", "this is temp Question 8", "noData", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"]
]

const mulitpliData = [
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
