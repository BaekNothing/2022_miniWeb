import {create} from 'zustand';


const dummyData = create((set) => ({
    dummy: 0,
    SetDummy: (inputData) => set(() => { return { inputData } }),

}));

const sceneData = create((set) => ({
    sceneIndex: 0,
    setSceneIndex: (sceneIndex) => set(() => { return { sceneIndex } }),

}));

const pageData = create((set) => ({
    previndex: [],
    setPrevIndex: (prevIndex) => set(() => { console.log("prevIndex : " + prevIndex); return { prevIndex } }),
    pageIndex: 0,
    setPageIndex: (pageIndex) => set(() => { console.log("pageIndex : " + pageIndex); return { pageIndex } }),
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
    }),
}
))

const descData = [
    null,
    null,
    null,
    ["퀴어가 뭐야?", "퀴어는 성적 성별을 포함한 성적 신체적 특성을 자신의 성적 성별과 다르게 인식하고 표현하는 사람을 말합니다."],
    ["장애의 기준이 뭐야?", "장애는 정신적, 신체적, 지적, 사회적, 환경적 요인으로 인해 일상생활에 지장을 주는 것을 말합니다."],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
]


const questionData = [
    ["q0", "gender", "성별이 어떻게 돼 ?", "여", "남", "선택하지 않을래", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q1", "age", "나이는 어떻개 돼 ?", "0~19세", "20~29세", "30~39세", "40~49세", "50~59세", "60세 이상", "-", "-", "-", "-", "-", "-"],
    ["q2", "contury", "지금 대한민국 국적이야 ?", "응.한국 국적이야", "아니 외국 국적이야", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q3", "queer", "퀴어야 ?", "응.퀴어야", "퀴어 아니야", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q4", "disabled", "장애가 있어 ?", "응 있어", "아니.없어.", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q5", "century", "지금 수도권에 살고있어 ?", "응 수도권에 살아", "아니.비 수도권에 살아", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q6", "marriage", "지금 결혼한 상태야 ?", "응 결혼한 상태야", "아니.결혼 안한 상태야.", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q7", "earn", "저축액이 얼마나 돼?", "월 77만원 이상", "월 45 ~ 76만원", "월 44만원 이하", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q8", "outcome", "어떻게 일해?", "정규직", "비정규직", "무직", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q9", "amount", "어디에서 일해 ?", "대기업", "중소기업", "자영업", "프리랜서", "무직", "noData", "-", "-", "-", "-", "-", "-"],
    ["q10", "payment", "연봉이 어떻게 돼 ?", "8000이상", "5000이상", "3000이상", "3000미만", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q11", "grade", "마지막으로 졸업한 학교가 어디야?", "석/박사 이상", "대학교", "고등학교", "의무교육", "해당사항 없음", "noData", "-", "-", "-", "-", "-", "-"],
    ["q12", "schoolRegion", "교육은 어디에서 받았어?", "서울", "수도권", "비 수도권", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q13", "parents", "재정지원을 받아?", "드리는 중", "독립됨", "받는 중", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q14", "result", "자 이제 결과를 볼까", "결과보기", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-", "-"],
    ["last", "temp", "this is temp Question 7", "noData", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["end", "temp", "this is temp Question 8", "noData", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"]
]

const mulitpliData = [
    [48.12, 60, 54.06, 0, 0, 0], // 성별 여 남 x
    [50, 70, 65, 60, 60, 40], // 나이 10대 20대 30대 40대 50대 60대 이상
    [50, 37.5, 0, 0, 0, 0], // 국적 한국인 외국인
    [35, 50, 0, 0, 0, 0], // 퀴어 o x
    [35, 70, 0, 0, 0, 0], // 장애 o x
    [20, 17.6, 0, 0, 0, 0], // 수도권 o x
    [17.06, 20, 0, 0, 0, 0], // 결혼 o x
    [20, 11.4, 7.2, 0, 0, 0], // 저축액 77이상 46 ~ 76 45 이하
    [10, 6, 3, 0, 0, 0], // 근로방식 정규직 비정규직 무직
    [10, 5, 5, 5, 2.5, 0], // 근로 규모 대기업 중소기업 자영업 프리랜서 무직
    [40, 21.2, 13.41, 10.09, 10, 0], // 최종학력 해외석/박사 석/박사 학사 의무교육 해당사항없음
    [40, 30.8, 28.8, 28.8, 0, 0], // 교육 장소 서울 수도권 비수도권 
    [70, 50, 30, 0, 0, 0], // 재정연결 정도 지원 받는중 독립됨 지원중 
    [0, 0, 0, 0, 0, 0], // 결과
    [0, 0, 0, 0, 0, 0]
]

function GetMultiplier(userSelect) {
    var result = 1;

    for (let i = 1; i < userSelect.length; i++) {
        console.log("index[" + i + "] : " + (userSelect[i] - 1 ) + "multiple : " + mulitpliData[i - 1][userSelect[i] - 1]);
        if (userSelect[i] <= 0)
            continue;
        result += mulitpliData[i - 1][userSelect[i] - 1];
    }
    var max = GetMaxValue();
    var min = GetMinValue();
    const afterResult = (result - min) / (max - min);
    console.log("result:" + result + " max:" + max + " min:" + min + " afterResult:" + afterResult);
    return afterResult;
}

function GetMaxValue(){
    var result = 0;
    for (let i = 0; i < mulitpliData.length; i++) {
        var max = 0;
        for (let j = 0; j < mulitpliData[i].length; j++) {
            if (max < mulitpliData[i][j])
                max = mulitpliData[i][j];
        }
        result += max;
    }
    return result;
}

function GetMinValue() {
    var result = 0;
    for (let i = 0; i < mulitpliData.length; i++) {
        var min = 100;
        for (let j = 0; j < mulitpliData[i].length; j++) {
            if (min > mulitpliData[i][j] && mulitpliData[i][j] > 1)
                min = mulitpliData[i][j];
        }
        result += min < 100 ? min : 0;
    }
    return result;
}


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

const text_1 = 
    "공룡을 등에 매고 걷는 사람" + '\n' +
    "당신은 하위 10 % 의 인간이군요!" + '\n' +
    "아이고… 솔직하게 바로 말하겠습니다. 가장 돈이 없고, 없기 쉬운 환경 조건을 갖추셨군요." + //'\n' +
    "마치 공룡을 등에 매고 걷는 것처럼 힘들게 살아가고 있을 확률이 높습니다." + //'\n' +
    "어쩌다 그런 자본 환경에 놓였는지 모르지만 힘들었겠고 앞으로도 힘들 확률이 높군여." + //'\n' +
    "환경과 조건이라는건 노력이나 의지로 쉽게 바꾸기가 참 어려운 부분들이 많죠." + //'\n' +
    "하지만 뭐! 어쩌겠습니까! 공룡 들고 한 번 걸어보자구요!" + //'\n' +
    "언젠가 성공하면 스스로에게 당당히 말할 수 있는 사람이라구요! " + //'\n' +
    "“나! 내 힘으로 성공했다!” 외칠 수 있는 그 날까지 힘내봅시다.빠샤!";
const text_2 =
    "코끼리를 등에 매고 걷는 사람" + '\n' + 
    "당신은 하위 20 % 의 인간이군요!" + '\n' + 
    "엇… 가장 돈이 없는 환경을 겨우 면한 사람이군요. 빈약한 통장과 매일 마주할 가능성이 높습니다." + //'\n' + 
    "마치 코끼리를 등에 매고 걷는 것처럼 자본적으로는 한 걸음 한 걸음 힘들게 살고 있군요." + //'\n' + 
    "환경과 조건이라는건 노력이나 의지로 쉽게 바꾸기가 참 어려운 부분들이 많죠." + //'\n' + 
    "이런 상황에 놓여있는건 당신이 큰 잘못을 저지르지 않았던 이상 당신 뜻이 아니었을거에요." + //'\n' + 
    "참..뭣같은 세상이죠 ? 하지만 우리 포기하지말고 뭐라도 열심히 잘 해보며 살아봅시다." + //'\n' + 
    "그래도 잘 모으며 살아보자구요! "

const text_3 = 
    "당나귀를 등에 매고 걷는 사람" + '\n' + 
    "당신은 하위 30 % 의 인간이군요!" + '\n' + 
    "워우… 다른 사람 만만치 않게 돈이 없는 환경과 조건을 갖추셨군요." + //'\n' + 
    "돈을 쉽게 쉽게 쓸 수 있는 상황은 아니겠어요." + //'\n' +
    "참 돈 벌고 모으기가 쉽지 않죠 ? 이해합니다. 돈 걱정에 당나귀를 등에 맨 것마냥 걸음이 무겁겠지만, 그래도 잘 나아가봅시다." + //'\n' + 
    "이런 환경과 조건을 갖추게 된건 온전히 당신 탓이 아닐 확률이 높아요." + //'\n' +
    "바꾸기 어려운, 혹은 불가능한 것들도 있을거에요.하지만 우리 있는 힘 다 끌어모아 잘 걸어나가봅시다." + //'\n' + 
    "어디 이 모든 걸 이겨내고 뚱뚱한 통장 만들어보자구요!"

const text_4 = 
    "바위를 들고 걷는 사람" + '\n' + 
    "당신은 하위 40 % 의 인간이군요!" + '\n' + 
    "자본 환경과 조건이 아직 중간에 못 미치는 애매하게 돈이 부족한 사람이군요! " + //'\n' + 
    "돈 걱정을 종종 혹은 꽤나 자주(혹시 매일..?) 하고 있겠어요." + //'\n' + 
    "그럴만한 환경과 조건을 지녔습니다." + //'\n' + 
    "언제 내 집을 마련하고 통통하고 만족스런 통장과 마주하나라는 아득한 생각도 들겠어요." + //'\n' + 
    "환경적으로 썩 즐거운 편은 아니겠으나 뭐 그렇게 나쁜 상황도 아니에요! " + //'\n' + 
    "착실히 잘 벌고 모으며 살아봅시다.빠샤아!!"

const text_5 =    
    "느리지도 빠르지도 않게 걷고있는 사람 " + '\n' + 
    "당신은 중간보다 살짝 아래 위치한 인간이군요!" + '\n' + 
    "와우! 딱 중간에서 아아아주 사아알짝 아래 걸쳐 있습니다! " + //'\n' + 
    "당신은 돈이 모일 수 있는 환경과 조건면으로 봤을 때 그렇게 나쁘지 않은 상황이에요! " + //'\n' + 
    "중간에 가는게 항상 얼마나 어렵습니까? " + //'\n' + 
    "자본적으로는 좋지도 나쁘지도 않은 상황에 계십니다." + //'\n' + 
    "이제 남은 건 조금의 환경탓을 하며 열심히 돈을 버는 수밖에 없습니다." + //'\n' + 
    "스타트가 중간이라니, 긍정적인 상황입니다.갑시다! 돈 벌러! "

const text_6 =
    "스케이트 보드를 타고 달리는 사람 " + '\n' + 
    "당신은 중간보다 살짝 위에 위치한 인간이군요!" + '\n' + 
    "오오… 돈이 모일 수 있는 환경과 조건에서 딱 중간보다 살짝 상위입니다." + //'\n' + 
    "사실 중간이라고 말해도 큰 차이가 없을 정도만큼이긴 합니다." + //'\n' + 
    "그래도 중간보다 조금 높다고 하면 조금 설레잖아요 ? " + //'\n' + 
    "환경과 조건적으로 봤을 때 돈을 모으기 어렵지는 않습니다." + //'\n' + 
    "중간보다 조금 높다는건 그만큼 다른 사람들보다 돈을 벌기에, " + //'\n' + 
    "혹은 모으기에 괜찮은 환경에 있는 편이라는 것을 의미합니다." + //'\n' + 
    "금상첨화의 환경은 아니지만, 열심히 일하며 돈 벌어보자구요!"

const text_7 =
    "스쿠터를 탄 사람 " + '\n' + 
    "당신은 상위 40 % 의 인간이군요! " + '\n' + 
    "와아우… 당신은 돈을 벌고 모으기에 꽤 괜찮은 환경에 놓여있습니다." + //'\n' + 
    "당신이 만든 부분도, 타고난 부분도 있을거에요." + //'\n' + 
    "스쿠터를 타고 달리는 사람이 그냥 걷고 있는 사람보다 더 쉽고 빠르게 먼 거리를 갈 수 있는 것처럼 " + //'\n' + 
    "당신이 돈을 모으는 것도 당신보다 환경과 조건이 안 좋은 사람보다 더 잘 모을 수 있는 조건을 갖췄어요." + //'\n' + 
    "혹시 돈을 잘 못 벌거나 못 모으는데 있어 환경탓을 자주하시나요 ? " + //'\n' + 
    "그럴만한 환경에 계시지 않습니다." + //'\n' + 
    "원래 이 정도에 계신 분들이 가장 불만이 많으세여."
    
const text_8 =
    "자동차를 탄 사람 " + '\n' + 
    "당신은 상위 30 % 의 인간이군요! " + '\n' + 
    "당신…!꽤 좋은 환경과 조건을 갖추고 있어요." + //'\n' + 
    "무슨 환경과 조건이냐구요 ? " + //'\n' + 
    "돈을 잘 벌고 모을 수 있는 조건과 환경입니다." + //'\n' + 
    "지금 벌고, 모아둔 돈, 혹시 내 노력으로만 이뤘다고 생각하고 있진 않았나요 ? " + //'\n' + 
    "사실 그렇지만은 않을 겁니다." + //'\n' + 
    "개인적인 노력도 물론 있었겠지만, 당신이 가진 좋은 환경과 조건의 부스트를 많이 받아왔을겁니다." + //'\n' + 
    "좋은 환경을 갖은 건, 분명히 운이 좋은겁니다! 축하합니다! " + //'\n' + 
    "내가 어떤 좋은 환경과 조건을 지녔는지 한 번 생각해보고 감사하는 마음을 가지는 것은 어떨까요"

const text_9 =
    "비행기를 탄 사람 " + '\n' + 
    "당신은 상위 20 % 의 인간이군요! " + '\n' + 
    "와아아우! 당신은 돈을 잘 벌고 모을 수 있는 매우 좋은 환경에 있을 확률이 높습니다! " + //'\n' + 
    "더 멀리 더 빨리 지금의 자리에 올 수 있었던 것은 환경적인 조건이 큰 영향을 끼친건 아닌지 한 번 생각해보세요." + //'\n' + 
    "지금 벌고, 모아둔 돈, 혹시 내 노력으로만 이뤘다고 생각하고 있진 않았나요 ? " + //'\n' + 
    "사실 그렇지만은 않을 겁니다.개인적인 노력도 물론 있었겠지만, " + //'\n' + 
    "당신이 가진 좋은 환경과 조건의 부스트를 당신이 생각하는 것보다 정말 많이 받아왔을겁니다." + //'\n' + 
    "한 번 어떤 것들이 내가 가졌던 좋은 조건과 환경의 요소인지 생각해보는 것도 좋을 것 같네요! "
const text_10 =
    "로켓을 탄 사람 " + '\n' + 
    "당신은 상위 10 % 의 인간이군요! " + '\n' + 
    "당신은 가장 상위에 있는 사람이군요! 그 누구보다도 쉽고 빠르게 재물을 모아왔고 누려왔어요." + //'\n' + 
    "이정도 되면 스스로 한 번 생각해볼까요 ? " + //'\n' + 
    "그것들을 누리면서 혹시 '이 모든 건 내 노력으로 만들어온거야!'라고 생각해오진 않았겠죠..? " + //'\n' + 
    "아닙니다.하하하.물론 노력도 했다는거 알아요." + //'\n' + 
    "하지만 확실히 환경과 운이 좋은 사람이었어요." + //'\n' + 
    "큰 이변이 없는 이상, 당신의 인생은 탄탄대로이며, 사회적 상위 포식자일 가능성이 높아요." + //'\n' + 
    "그러니 스스로 사명감을 가지고 다른 사람에게도 베풀면서 살아봅시다." + //'\n' + 
    "힘들다고 징징대지 말고...하하 장난이에요."

    
const textData = 
[
    text_1,
    text_2,
    text_3,
    text_4,
    text_5,
    text_6,
    text_7,
    text_8,
    text_9,
    text_10
]

export { textData, dummyData, sceneData, pageData, userSelectData, questionData, baseHigherData, baseLowerData, mulitpliData, descData, GetMultiplier}
