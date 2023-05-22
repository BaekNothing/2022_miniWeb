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
                minHeight: '900px'
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
                    top: '480px',
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
            <div className="main-body" style={{
                minHeight: '900px'
            }} key="introPage">
                {/* <img key='introTitle' style={{opacity: 0.3}} 
                className='title_image' id='char_body' src={'./images/intro_png.png'} alt='charBody' />                 */}
                <DescTitle />
                <button className='title_btn'
                style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: '568px',
                }}
                onClick={() => {
                    _startFlag = 2;
                    SetDummy(1);
                }}> 내 위치 알아보기</button>

            </div>
        )
    }
    else if (_startFlag === 2)
    {
        return (
            <div className="main-body" style={{
                minHeight: '900px'
            }} key="introPage">
                {/* <img key='introTitle' className='call_image' id='char_body' src={'./images/call_png.png'} alt='charBody' /> */}
                <div
                    style={{
                        position: "absolute",
                        top:'120px',
                        width: commonWidth,
                    }}
                >   이름이 뭐야?

                </div>
                
                <form onSubmit={handleSubmit}
                    style={{
                        position: "absolute",
                        width: commonWidth,
                        top: "500px",
                    }}
                >
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
            <div className="main-body" style={{
                minHeight: '900px'
            }} key="introPage">
                <div
                    style={{
                        position: "absolute",
                        top: '120px',
                        width: commonWidth,
                    }}
                >   이름이 뭐야?

                </div>
                <p style={{marginTop:'300px'}} />
                <div className='talk_image' id='char_body'>
                    <img key='introtalk' className='talk_image' id='char_body' src={'./images/call_talk_bubble.png'} alt='charBody' />
                    <p className='text_in_talkImage'>{userName}님, 안녕하세요!</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <input
                        style={{
                            width: "130px", borderRadius:'5px', marginTop: '70px'}} 
                        type="submit" value="다음으로 >" onClick={()=>{
                            setSceneIndex(sceneIndex + 1);
                            clearAlldata(setPageIndex, setUserSelect);
                    }} className='title_btn_blue_sml' />
                </form>
            </div>
        )
    }
}

var txtPrev = "< 이전으로"
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

// *************** DescTitle ***************

function DescTitle(){
    return (
        <div>
            <DescTitleTitle />
            <DescTitleDesc />
        </div>
    )
}

function DescTitleTitle() {
    return (
        <div
            style={{
                textAlign: 'center',
                color: '#2F4FFD'
            }}
        > 
            <p 
                style={{
                    position: 'absolute',
                    top: '20px',
                    width: commonWidth,
                    fontSize: '54px',
            }}
            >"</p>
            <div 
                style={{
                    position: 'absolute',
                    top: '120px',
                    width: commonWidth,
                    fontSize: '24px',
                }}
            > 솔직히, 궁금하잖아?</div>
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    height: '80px',
                    width: '280px',
                    borderRadius: '20px',
                    paddingTop: '24px',
                    top: '170px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '14px',
                    lineHeight: '20px',
                }}
            >
                "인격체를 가볍게 순위 매기고<br/>평가하는 것은 옳지 못한 일일 뿐더러<br/>그 기준도 명확하지 않아"
            </div>
        </div>
    )
}

function DescTitleDesc() {
    return (
        <div
            style={{
                fontSize:'14px',
                lineHeight: '20px',
            }}  
        >
            <div
                style={{
                    position: 'absolute',
                    top: '316px',
                    fontFamily: 'SUIT-Thin',
                    width: commonWidth,
                }}
            > 
                응, 너의 말에 동의해 <br />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '350px',
                    fontFamily: 'SUIT-Thin',
                    width: commonWidth,
                }}
            >
                하지만, 우리는 쉽게 평가당하고, 또 순위 매기지, <br />
                때로는 우리스스로 평가당하기를 원하기도 해 <br />
                높은 점수를 가지면 우대해주길 바라고 <br />
                조건이 좋지 않다면 보살펴주길 바라지 <br />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '450px',
                    fontFamily: 'SUIT-Thin',
                    width: commonWidth,
                }}
            >
                그래서, 우리는 이런 테스트를 만들었어 <br />
                나는 평균보다 우월한가? 평균보다 불우한가? <br />
                지금의 내 위치는 어디일까? <br/>
            </div>
        </div>
    )
}

// *************** ACTION ***************

function clearAlldata(setPageIndex, setUserSelect) {
    setPageIndex(0);
    setUserSelect([]);
}

export default RenderIntroPage;