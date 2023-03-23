import '../App.css';
import React, { useEffect } from 'react';
import { dummyData, sceneData, pageData, userSelectData } from '../Data/AppVars';
import ReCAPTCHA from "react-google-recaptcha";


var _startFlag = 0; 

function handleSubmit(event) {
    event.preventDefault();
}

const commonWidth = '380px';

function RenderIntroPage(prop) {
    const { SetDummy } = dummyData();
    const { setPageIndex } = pageData();
    const { setUserSelect, SetUserName, userName } = userSelectData();
    const { sceneIndex, setSceneIndex } = sceneData();

    useEffect(() => {

    }, [])
   
    
    if(_startFlag === 0)
    {
        return (
            <div className="main-body bg_blue" style={{
                "minHeight": "95vh",
            }} key="introPage">
                {/* <img key='introTitle' style={{
                    opacity: 0.3,
                }} className='title_image' id='char_body' src={'./images/title_png.png'} alt='charBody' /> */}
                <IntroTitle />
                {/* <button className='title_btn' style={{
                    backgroundColor: 'white',
                    color: '#000000',
                }} onClick={() => {
                    _startFlag = 1;
                    SetDummy(1);
                }}> 시작하기</button> */}

                <ReCAPTCHA
                style={{
                    position: "absolute",
                    top: '500px',
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
                    sitekey='6LewAyYlAAAAAHhamUVCNTeUeJU3vwiUQ9PBkJrC' onChange={() => {
                    _startFlag = 1;
                    SetDummy(1);
                }} />
            </div>
        )
    }
    else if (_startFlag === 1)
    {
        return (
            <div className="main-body" key="introPage">
                <img key='introTitle' className='title_image' id='char_body' src={'./images/intro_png.png'} alt='charBody' />
                <button className='title_btn' onClick={() => {
                    _startFlag = 2;
                    SetDummy(1);
                }}> 내 위치 알아보기</button>

            </div>
        )
    }
    else if (_startFlag === 2)
    {
        return (
            <div className="main-body" key="introPage">
                <img key='introTitle' className='call_image' id='char_body' src={'./images/call_png.png'} alt='charBody' />
                <form onSubmit={handleSubmit}>
                    <input className='title_btn_white' id="name" type="text" name="name" placeholder="5자 이내로 입력해줘" />
                    <input type="submit" value="확인" onClick={() => {
                        const name = document.getElementsByName("name")[0].value;
                        if (name.length > 0 && name.length < 6) {
                            SetUserName(document.getElementsByName("name")[0].value);
                            _startFlag = 3;
                        }
                        else {
                            alert("이름은 1~5글자 사이로 입력해주세요.");
                        }
                    }} className='title_btn_sml' />
                </form>

            </div>
        )
    }
    else
    {
        return (
            <div className="main-body" key="introPage">
                <img key='introTitle' className='call_image2' id='char_body' src={'./images/call_png.png'} alt='charBody' />
                <p/>
                <div className='talk_image' id='char_body'>
                    <img key='introtalk' className='talk_image' id='char_body' src={'./images/call_talk_bubble.png'} alt='charBody' />
                    <p className='text_in_talkImage'>{userName}님, 안녕하세요!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        style={{ marginTop: '70px'}} 
                        type="submit" value="다음으로 >" onClick={()=>{
                            setSceneIndex(sceneIndex + 1);
                            clearAlldata(setPageIndex, setUserSelect);
                    }} className='title_btn_blue_sml' />
                </form>
                
            </div>
        )
    }
    
}

// *************** IntroTitle ***************

function IntroTitle() {
    return (
        <div>
            <IntroTitleTitle />
            <IntroTitleImage />
        </div>
    )
}

function IntroTitleTitle() {
    return(
        <div>
            <div style={{
                position: 'absolute',
                top: '76px',
                width: commonWidth,
                fontSize: '54px',
                lineHeight: '56px'
            }}> 인생 난이도<br />진단 테스트 </div>
            <div style={{
                position: 'absolute',
                fontFamily: 'SUIT-Thin',
                top: '176px',
                width: commonWidth,
                fontSize: '16px',
                lineHeight: '56px'
            }}> 한국에서 나의 생존 계급은 몇급일까? </div>
        </div>
    )
}

function IntroTitleImage(){
    return (
        <div> 
            <img 
                key='introTitle' 
                className='title_image' 
                id='char_body' 
                style={{
                    position: 'absolute',
                    top: '160px',
                    width:'240px',
                    height:'194px',

                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
                src={'./images/title_img.png'} alt='charBody' />
        </div>
    )
}

// *************** ACTION ***************

function clearAlldata(setPageIndex, setUserSelect) {
    setPageIndex(0);
    setUserSelect([]);
}

export default RenderIntroPage;