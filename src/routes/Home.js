import Button from '../components/Home_Button';
import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import TextBox from '../components/TextBox';
import styles from './Home.module.css';
import logo from '../images/hspace.png';
import { useMediaQuery } from 'react-responsive';

function Home (){
  const isTxtBar = useMediaQuery({minWidth: 1500})
  const isMobile = useMediaQuery({maxWidth: 1000});
  return (
    <body>
    <>
    <header>
      <NavBar/>
    </header>

    <main className={`${styles.mainContainer}`}>
      <div className={styles.wrapContainer}>
      {/* row 1*/}
      <div className={styles.rowContainer}>
        <div className={`${styles.columnContainer1}`}>
          <text className={styles.titleText}>WE STAN<br/>CYBER SECURITY</text>
        </div>
        <div className={styles.columnContainer2}>
        <TextBox text={'12기 모집 마감까지 D-120 🔥'}/>
        <text className={styles.descriptionText}>
        E-COPS는 정보보안을 기초부터 시작하여 심화학습, 프로젝트를 통해 실력을 탄탄히 쌓아가고 싶은 이대생이라면 누구나 참여할 수 있는 이화여자대학교 커리어클럽 소속 동아리입니다.
        <br/><br/>E-COPS is Cyber Security club at Ewha Womans University, and anyone with a passion for cyber security can participate.
        </text>
        </div>
      </div>

      {/* row 2*/}
        <div className={styles.rowContainer}>
          <div className={styles.columnContainer1}>
            <text className={styles.midText}>
            EWHA - CONTROL OF PROGRAM SECURITY
            </text>
          </div>
          <div className={styles.midColumnContainer2}>
            <div className={styles.midTextButton}>
            <a href='./Recruitment'>
              <Button/>
            </a>
            </div>
          </div>
        </div>
      
      {/* row 3*/}
      <div className={styles.midRowContainer}>
        <div className={`${styles.midTextContainer} ${styles.background}`}>
        <div className={styles.introContainer}>
          <text className={styles.introTitleTxt}>E-COPS는 이런 동아리야</text>
        </div>    
        <div className={styles.introContainer}>
          <text className={styles.introTxt}>
          E-COPS(EWHA-CONTROL OF PROGRAM SECURITY)는<br/> 
          이화여대 학생이라면 누구나 참여할 수 있는<br/> 
          이화여자대학교 대표 사이버 보안 동아리입니다.<br/>
          함께 정보 보안을 공부하며 보안 전문가로 성장해 나가는 것을 목표로 합니다.<br/><br/>
          경력 개발 센터 우수 동아리에 이름을 올렸으며,<br/> 
          현재 인재 개발원 커리어클럽, 보안 연합 IncogNITO, SUA, hspace에 소속되어<br/> 
          내/외부적으로 활발하게 활동을 이어 나가고 있습니다.
          </text>
        </div>     
        </div>
       
      </div>
      {/* row 4*/}
      <div className={styles.contentContainer}>
        <text className={styles.introTitleTxt}>
          지금까지 E-COPS는?
        </text>
        <div className={styles.histBox}>
        {isMobile?
        <box className={styles.histColumnContainer}>
          <text className={styles.historyYear} style={{top: -10}}>History</text>
          <text className={styles.historyYear} style={{top: 80}}>2023 : YOU KNOW THE DRILL.</text>
          <text className={styles.historyYear} style={{top: 200}}>2022</text>
          <text className={styles.histDescriptContainer} style={{top: 250}}>버그바운티 활동</text>
          <text className={styles.historyYear} style={{top: 320}}>2021</text>
          <text className={styles.historyYear} style={{top: 400}}>2020</text>
          <text className={styles.historyYear} style={{top: 480}}>2019</text>
          <text className={styles.historyYear} style={{top: 560}}>2018</text>
          <text className={styles.historyYear} style={{top: 640}}>2017</text>
          <text className={styles.historyYear} style={{top: 720}}>2016</text>
          <text className={styles.historyYear} style={{top: 800}}>2015</text>
          <text className={styles.historyYear} style={{top: 880}}>2014 : THE BEGINNING OF E-COPS</text>
          <text className={styles.historyYear} style={{top: 1000}}>E-COPS'S FOOTSTEP</text>
        </box>
        :
        <box className={styles.histColumnContainer}>
          <text className={styles.historyYear} style={{top: -15}}>History</text>
          <text className={styles.historyYear} style={{top: 80}}>2023 : YOU KNOW THE DRILL.</text>
          <text className={styles.historyYear} style={{top: 200}}>2022</text>
          <text className={styles.histDescriptContainer} style={{top: 280}}>버그바운티 활동</text>
          <text className={styles.historyYear} style={{top: 360}}>2021</text>
          <text className={styles.historyYear} style={{top: 500}}>2020</text>
          <text className={styles.historyYear} style={{top: 600}}>2019</text>
          <text className={styles.historyYear} style={{top: 700}}>2018</text>
          <text className={styles.historyYear} style={{top: 800}}>2017</text>
          <text className={styles.historyYear} style={{top: 900}}>2016</text>
          <text className={styles.historyYear} style={{top: 1000}}>2015</text>
          <text className={styles.historyYear} style={{top: 1100}}>2014 : THE BEGINNING OF E-COPS</text>
          <text className={styles.historyYear} style={{top: 1200}}>E-COPS'S FOOTSTEP</text>
        </box>
        }
        </div>
      </div>
      </div>
      
      {/* row 5*/}
      {isTxtBar?
          <div className={`${styles.scrollRowContainer}`}>
            <text className={styles.scroll_text}>
              🔒&nbsp;&nbsp;&nbsp;암호학은 E-COPS에서.&nbsp;&nbsp;&nbsp;
              🔒&nbsp;&nbsp;&nbsp;웹 해킹은 E-COPS에서.&nbsp;&nbsp;&nbsp;
              🔒&nbsp;&nbsp;&nbsp;포렌식은 E-COPS에서.&nbsp;&nbsp;&nbsp;
              🔒&nbsp;&nbsp;&nbsp;리버싱은 E-COPS에서.&nbsp;&nbsp;&nbsp;
              🔒&nbsp;&nbsp;&nbsp;개발은 E-COPS에서. 
            </text>
          </div>
      :
      <div></div>
      }

      <div className={styles.wrapContainer}>
        <text className={styles.introTitleTxt}>E-COPS와 함께하는 파트너</text>
        <div className={styles.contentContainer}>
        {isMobile?
        
        <div className={styles.withImg}>
          <img className={styles.hSpaceCenter} src={logo} alt="HSpace"></img>
        </div>
        :
        <div className={styles.withImg}>
          <img className={styles.hSpace} src={logo} alt="HSpace"></img>
        </div>
        }
        </div>
      </div>


    </main>

    {/* bottom bars */}
    <footer>
      <NavBar/>
      <BottomBar/>
    </footer>
    </>


    </body>
  );
}

export default Home;