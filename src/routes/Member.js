import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import TextBox from '../components/TextBox';
import ProfileBox from '../components/ProfileBox';
import backend from '../images/backend-icon.png';
import frontend from '../images/frontend-icon.png';
import design from '../images/design-icon.png';
import member_img from '../images/rect.png';
import styles from './Member.module.css';
import { useMediaQuery } from 'react-responsive';

function Member(){
  const isMobile = useMediaQuery({maxWidth: 1000});
  const isNormal = useMediaQuery({minWidth: 319});
  return (
    <body>
    {isNormal?
    <>
    <header>
        <NavBar isCurrent={'member'}/>
    </header>
    <main className={styles.mainContainer}>
      {/* header */}
      <div className={styles.headerContainer}>
        {isMobile?
        <text className={styles.titleText}>E-COPS의 팀을<br/>소개합니다</text>
        :
        <text className={styles.titleText}>E-COPS의 팀을 소개합니다</text>
        }
        {/* link 연결하기 */}
        <text className={styles.linkText}>11기</text>
      </div>
      {/* content - Executive */}
      {isMobile?
      <div className={styles.contentContainer}>
      <div style={{justifyContent: 'center'}}>
        <TextBox text={'Executive'}/>
      </div>
      <div className={styles.smallRowContainer}>
        <ProfileBox text='회장 고민지' img={member_img}/>
        <ProfileBox text='교육 김주은' img={member_img}/>
      </div>
      <div className={styles.smallRowContainer}>
        <ProfileBox text='교육 김유경' img={member_img}/>
        <ProfileBox text='교육 남윤정' img={member_img}/>
      </div>
      <div className={styles.smallRowContainer}>
        <ProfileBox text='교육 배윤주' img={member_img}/>
        <ProfileBox text='회계 이슬' img={member_img}/>
      </div>
      <div className={styles.smallRowContainer}>
        <ProfileBox text='홍보 김하은' img={member_img}/>
        <ProfileBox text='홍보 진혜린' img={member_img}/>
      </div>
      </div>
      :
      <div className={styles.contentContainer}>
        <div style={{width: 1000,}}>
          <TextBox text={'Executive'}/>
        </div>
        <div className={styles.rowContainer}>
          <ProfileBox text='회장 고민지' img={member_img}/>
          <ProfileBox text='교육 김주은' img={member_img}/>
          <ProfileBox text='교육 김유경' img={member_img}/>
          <ProfileBox text='교육 남윤정' img={member_img}/>
          <ProfileBox text='교육 배윤주' img={member_img}/>
        </div>
        <div className={styles.rowContainer}>
          <ProfileBox text='회계 이슬' img={member_img}/>
          <ProfileBox text='홍보 김하은' img={member_img}/>
          <ProfileBox text='홍보 진혜린' img={member_img}/>
          <div style={{width: 160, height: 200, opacity: 1}}></div>
          <div style={{width: 160, height: 200, opacity: 1}}></div>
        </div>
      </div>
      }

      {/* content - E-COPS Web-TF */}
      {isMobile?
      <div className={styles.contentContainer}>
      <div style={{justifyContent: 'center'}}>
        <TextBox text={'E-COPS Web-TF'}/>
      </div>
      <div className={styles.smallRowContainer}>
        <ProfileBox big={true} text='고민지 남윤정 김하은' img={backend}/>
      </div>
      <div className={styles.smallRowContainer}>
        <ProfileBox big={true} text='고민지 김유경 임영서 서아영 장하은' img={frontend}/>
      </div>
      <div className={styles.smallRowContainer}>
        <ProfileBox big={true} text='이슬 이한선' img={design}/>
      </div>
      </div>
      :
      <div className={styles.contentContainer}>
        <div style={{width: 1000,}}>
          <TextBox text={'E-COPS Web-TF'}/>
        </div>
        <div className={styles.rowContainer}>
          <ProfileBox big={true} text='고민지 남윤정 김하은' img={backend}/>
          <ProfileBox big={true} text='고민지 김유경 임영서 서아영 장하은' img={frontend}/>
          <ProfileBox big={true} text='이슬 이한선' img={design}/>
        </div>
      </div>
      }
      

      {/* content - Our Members */}
      {isMobile?
      <div className={styles.contentContainer}>
      <div style={{justifyContent: 'center'}}>
        <TextBox text={'Our Members'}/>
      </div>
      <div style={{justifyContent: 'center', height: 'auto', marginTop: 50, paddingLeft: 20}}>
        <text className={styles.contentText}>member member member member member member member member member member member member member member</text>
      </div>
      </div>
      :
      <div className={styles.contentContainer}>
      <div style={{width: 1000,}}>
        <TextBox text={'Our Members'}/>
      </div>
      <div style={{width: 1000, height: 'auto', marginTop: 50}}>
        <text className={styles.contentText}>member member member member member member member member member member member member member member</text>
      </div>
      </div>
      }
    </main>

    {/* bottom bars */}
    <footer>
      <NavBar className={styles.secondNavBar}/>
      <BottomBar/>
    </footer>
    </>
    :
    <span>화면 크기를 조정해주세요.</span>
    }
    </body>
  );
}

export default Member;