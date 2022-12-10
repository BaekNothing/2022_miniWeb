import '../App.css';
import React, { useEffect, useState, setState, useRef } from 'react';
import { sceneData, pageData, userSelectData, questionData, dummyData } from '../Data/AppVars';


function RenderLoading(prop) {
    const { setPageIndex, setPrevIndex, prevIndex } = pageData();
    const { setUserSelect, userSelect, SetUserName } = userSelectData();
    const { setSceneIndex } = sceneData();
    const { dummy, SetDummy } = dummyData();

    var randomNumber = dummy;

    useEffect(() => {
        console.log(randomNumber);
    }, [])

    return (
        <div className="main-body" key="setUserSelectData">
            <SetTimer />
        </div>
    )
}


function SetTimer() {
    const { setSceneIndex } = sceneData();

    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(0);
    const [random, setRandom] = useState(0);
    const time = useRef(20);
    const timerId = useRef(null);

    useEffect(() => {
        timerId.current = setInterval(() => {
            setMin(parseInt(time.current / 60));
            setSec(time.current % 60);
            time.current -= 1;
            const newRandom = Math.round(Math.random(0, 1) * 13);
            setRandom(newRandom);
        }, 200);

        return () => clearInterval(timerId.current);
    }, []);

    useEffect(() => {
        // 만약 타임 아웃이 발생했을 경우
        if (time.current <= 0) {
            clearInterval(timerId.current);
            setSceneIndex(3);
            // dispatch event
        }
    }, [sec]);

    const imageName = questionData[random][1];

    return (
        <div className="main-body">

            <p>{random} 결과를 계산중입니다</p>
            <img className='char' id='char_body' src={'./images/char/' + imageName + '_1.png'} alt='charBody' />
            
        </div>
    )

}

export default RenderLoading;