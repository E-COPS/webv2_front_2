import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Recruitment.module.css';
import Button from '../components/Recruitment_Button';
import logo from '../images/real_logo-img.png';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Recruitment(){
  const isNormal = useMediaQuery({minWidth: 319});
  const [btnClick_1, setBtnClick_1] = useState(false);
  const [btnClick_2, setBtnClick_2] = useState(false);
  const [btnClick_3, setBtnClick_3] = useState(false);

  return (
    <body>
    {isNormal?
    <>
    <header>
      <NavBar/>
    </header>
    <main className={styles.mainContainer_padding}>
      <div className={styles.contentContainer}>
        {/* header text */}
        <div className = {styles.headerContainer}>
          <text className = {styles.headerText}>WELCOME👋<br></br>WE ARE EWHA’S CLUB</text>
          <div className = {styles.txtBtw}>
            <text className = {styles.headerText}>12TH</text>
            <img src={logo} className={styles.logoImg} alt='e-cops'/>
          </div>
          <text className = {styles.headerText}>ROOKIE RECRUITING</text>
          <div className = {styles.txtEnd}>
            <text className = {styles.headerText}>IS COMING!</text>
          </div>
        </div>
        {/* content 1 - 12기 모집 */}
        <div className={`${styles.columnContainer} ${styles.columnContainer2}`}>
          <text className ={`${styles.midText} ${styles.leftText}`}>E-COPS 12기 모집</text>
          <div className={styles.rowContainer2}>
            <text className={styles.contentText}>
            E-COPS에서 12기 신입 부원을 모집합니다.<br></br>
            보안에 관심이 많고 열정이 넘치는 <br></br>이화여대 학부생 누구나 지원 가능!!
            </text>
            <div className={styles.midTextButton}>
                <Button text='12기 지원하기'/>
            </div>
          </div>
        </div>  
        {/* content 2 - Recruiting Process */}
        <div className={styles.content3Container}>
          <text className={styles.midText}>RECRUITING PROCESS</text>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.circleBox}>
            <div className={styles.miniCircle}></div>
            <div className={styles.miniCircle2}></div>
            <text className={styles.contentTitleText}>&nbsp;&nbsp;서류접수</text>
            <text className={styles.contentWhiteText}>00.00(W)~00.00(W)<br></br>00시 마감</text>
          </div> 
          <div className={styles.circleBox}>
            <div className={styles.miniCircle}></div>
            <div className={styles.miniCircle2}></div>
            <text className={styles.contentTitleText}>서류 결과 발표</text>
            <text className={styles.contentWhiteText}>00.00(W) 00시</text>
          </div> 
          <div className={styles.circleBox}>
            <div className={styles.miniCircle}></div>
            <div className={styles.miniCircle2}></div>
            <text className={styles.contentTitleText}>오프라인 면접</text>
            <text className={styles.contentWhiteText}>00.00(W)~00.00(W)<br></br>개별 연락 예정</text>
          </div> 
          <div className={styles.circleBox}>
            <div className={styles.miniCircle}></div>
            <div className={styles.miniCircle2}></div>
            <text className={styles.contentTitleText}>&nbsp;&nbsp;&nbsp;면접</text>
            <text className={styles.contentWhiteText}>00.00(W) 00시</text>
          </div> 
        </div>
        {/* content 3 - 자주 묻는 질문 */}
        <div className={styles.content3Container}>
          <text className={styles.midText}>자주 묻는 질문</text>
        </div>
        <div className={styles.columnContainer}>
          {/* 질문 1 */}
          <div className={styles.toggle}>
            <button 
            className={styles.btnRow}
            onClick={()=>setBtnClick_1(!btnClick_1)}
            >
              <text className={styles.contentBigText}>비기너로 지원하고 싶은데 경험이 하나도 없어요. 지원해도 괜찮을까요?</text>
              <text className={styles.contentBigText}>
                {/* 버튼 클릭 여부에 따라 모양 다르게*/}
                {btnClick_1 ? '▲' : '▼'}
              </text>
            </button>
            {/* 버튼 클릭 여부에 따라 답변 text 렌더링*/}
            {btnClick_1 ? 
            (<div className={styles.textBox}>
              <text style={{fontSize: 18, lineHeight: 2}}>
                동아리에서 보안을 열정적으로 성실하게 함께 공부하실 수 있는 분이라면 보안 왕초보라도 누구나 환영합니다! 비기너 트랙은 보안 기초 지식 학습을 목표로 하기 때문에 배경 지식이나 경험의 유무를 선발에 중점적으로 고려하지 않습니다. 중요한 것은 오로지 지원자님의 보안 공부에 대한 열정입니다. 지원 과정에서 자신의 열정과 성실성을 최대한 어필해 주세요.
              </text>
            </div>)
            : 
            <div></div>}
          </div>
          {/* 질문 2 */}
          <div className={styles.toggle}>
            <button 
            className={styles.btnRow}
            onClick={()=>setBtnClick_2(!btnClick_2)}
            >
              <text className={styles.contentBigText}>챌린저 분야는 항상 같나요?</text>
              <text className={styles.contentBigText}>
                {btnClick_2 ? '▲' : '▼'}
              </text>
            </button>
            {btnClick_2 ? 
            (<div className={styles.textBox}>
              <text style={{fontSize: 18}}>학기말에 비기너 부원들의 수요조사를 받아서 가장 수요가 많은 두 분야를 다음 기수 챌린저 분야로 선정합니다.
12기의 경우 웹 해킹과 시스템 해킹의 수요가 가장 높아 12기 챌린저 분야로 선정되었습니다.</text>
            </div>)
            : 
            <div></div>}
          </div>
          {/* 질문 3 */}
          <div className={styles.toggle}>
            <button 
            className={styles.btnRow}
            onClick={()=>setBtnClick_3(!btnClick_3)}
            >
              <text className={styles.contentBigText}>1년 활동이 어떻게 되나요?</text>
              <text className={styles.contentBigText}>
                {btnClick_3 ? '▲' : '▼'}
              </text>
            </button>
            {btnClick_3 ? 
            (<div className={styles.textBox}>
              <text style={{fontSize: 18}}>1년 [ (학기+방학) × 2 ] 이상 활동해야 수료증을 발급받을 수 있습니다.
비기너로 들어온 분들은 비기너 1학기+방학을 활동하면 다음 학기는 자동으로 챌린저로 1학기+방학동안 활동하게 됩니다.
챌린저로 들어온 분들은 챌린저로 1년 이상 활동해야 합니다.</text>
            </div>)
            : 
            <div></div>}
          </div>
        </div> 
      </div>
    </main>
    <main className={styles.mainContainer_notpadding}>
      {/* content 4 - 문의사항 */}
      <div className ={styles.grayContainer}>
          <div className ={styles.greenBox}>
            <div className ={styles.midContainer}>
              <text className ={styles.midText}>더 궁금한 내용이나<br></br>문의사항이 있으신가요?</text>
            </div>
            <div className = {styles.midContainer}>
              <text className ={styles.contentText2}>
              신규 모집에 대한 모든 안내는 노션에 있습니다.<br></br>
              노션 확인 후, 동아리 활동, 리크루팅 등에 대한<br></br>
              궁금한 점이 있다면 언제든지 문의주세요.<br></br><br></br><br></br>
              ✅ 이메일: ewha.ecops@gmail.com<br></br>
              ✅ 인스타그램: @ecops_ewha
              </text>
            </div>
            <div className ={styles.midContainer}>
              <button className ={styles.qButton}>
                <a href='https://mail.google.com/mail/u/0/?fs=1&to=ewha.ecops@gmail.com&tf=cm'>이메일로 문의하기</a>
              </button>
            </div>
          </div>
      </div>
    </main>
    

    {/* bottom bars */}
    <footer>
      <NavBar/>
      <BottomBar/>
    </footer>
    </>
    :
    <span>화면 크기를 조정해주세요.</span>
    }
    </body>
  );
}

export default Recruitment;