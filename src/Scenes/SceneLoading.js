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

    return (
        <div className="main-body bg_blue" style={{
            "height": "95vh",
        }}>
            {/* <img key='loading' style={{"opacity": "0.5",}}  className='loading_Bg' src={'./images/loading_png.png'} alt='charBody' /> */}
            <p style={{
                "marginTop": "128px",
                "textAlign": "center",
                "fontFamily": "SUIT-Regular",
                "fontSize": "44px",
                "color": "white",
            }} >YOU ARE</p>
            <p style={{
                "marginTop": "-52px",
                "textAlign": "center",
                "fontFamily": "SUIT-Regular",
                "fontSize": "44px",
                "color": "white",
            }} >HERE</p>
            <p style={{
                "marginTop": "-38px",
                "textAlign": "center",
                "fontFamily": "SUIT-Regular",
                "fontSize": "44px",
                "color": "white",
            }} >|</p>
            <p style={{
                "marginTop": "-88px",
                "textAlign": "center",
                "fontFamily": "SUIT-Regular",
                "fontSize": "44px",
                "color": "white",
            }} >↓</p>
            <div style={{
                "position": "absolute",
                "margin" : "-48px 0px 0px 90px",
                "borderRadius": "50%",
                "backgroundColor": "white",
                "width": "200px",
                "height": "200px",
            }} >

            </div>

            <div className='loading_div'>
                <DrawImage />
            </div>
        </div>
    )



    function DrawImage() 
    {
        var result = [];

        //draw 5 8 10 11 first
        // {
        //     const i = 5;
        //     const randomNumber = Math.round(Math.random(0, 1) * 3) - 1;
        //     if (randomNumber > 0) {
        //         const imageName = questionData[i][1];
        //         const imagePath = imageName + "_" + randomNumber;
        //         result.push(<img key={i} className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        //     }
        // }

        // {
        //     const i = 8;
        //     const randomNumber = Math.round(Math.random(0, 1) * 3) - 1;
        //     if (randomNumber > 0) {
        //         const imageName = questionData[i][1];
        //         const imagePath = imageName + "_" + randomNumber;
        //         result.push(<img key={i} className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        //     }
        // }

        // {
        //     const i = 10;
        //     const randomNumber = Math.round(Math.random(0, 1) * 3) - 1;
        //     if (randomNumber > 0) {
        //         const imageName = questionData[i][1];
        //         const imagePath = imageName + "_" + randomNumber;
        //         result.push(<img key={i} className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
        //     }
        // }

        // {
        //     const i = 11;
        //     const randomNumber = Math.round(Math.random(0, 1) * 3) - 1;
        //     if (randomNumber > 0)
        //     {
        //         const imageName = questionData[i][1];
        //         const imagePath = imageName + "_" + randomNumber;
        //         result.push(<img key={i} className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);    
        //     }
        // }

        {
            const i = 0;
            const randomNumber = Math.random(0, 1) > 0.5 ? 1 : 2;
            if (randomNumber > 0) {
                const imageName = questionData[i][1];
                const imagePath = imageName + "_" + randomNumber;
                result.push(<img key={i} className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);
            }
        }


        for(var i = 1; i < 13; i++)
        {
            const randomNumber = Math.round(Math.random(0, 1) * 3) - 1;
            if(randomNumber <= 0)
                continue;
            if (i == 5 || i == 7 || i == 8 || i == 10 || i == 11)
                continue;
            const imageName = questionData[i][1];
            const imagePath = imageName + "_" + randomNumber;
            result.push(<img key={i} className='char' id='char_body' src={'./images/char/' + imagePath + '.png'} alt='charBody' />);    
        }


        return (
            <div>
                <div className='main-image'>
                    {result}
                </div>
                {/* <img src={'./images/' + image + '.png'} style={{ width: '480px' }} alt='' /> */}
            </div>
        )
    }
}

export default RenderLoading;