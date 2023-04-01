import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Activity2.module.css';
import ProfileBox from '../components/ProfileBox';
import { useState } from 'react';

function Forensic(){
  const [hide,setHide]=useState(false);

    return (
      <body>
      <header>
          <NavBar/>
      </header>
      <main className={styles.mainContainer}>   
        <div className={styles.beginContainer}>
          
          <div className = {styles.galleryContainer}>
            <div className = {styles.text2Box}>
              <div className = {styles.secondText}>
                <text>2022 GALLERY</text>
                <text className = {styles.secondText_sm}>Forensics team</text>
              </div>
            </div>
            <div className={styles.rowContainer}>
          <div className={styles.columnContainer} style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
          </div>
          <div className={styles.columnContainer}  style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
          </div>
          <div className={styles.columnContainer}  style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
          </div>
          </div>
          <div className={styles.rowContainer}>
          <div className={styles.columnContainer} style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
          </div>
          <div className={styles.columnContainer}  style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
          </div>
          <div className={styles.columnContainer}  style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
          </div>
          </div>
          <div className={styles.rowContainer}>
          <div className={styles.columnContainer} style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
          </div>
          <div className={styles.columnContainer}  style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
          </div>
          <div className={styles.columnContainer}  style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
          </div>
          </div>
            {/*<div className ={styles.rowContainer}>
              <ProfileBox
               onMouseOver={()=>{setHide(true)}}
               onMouseOut={()=>{setHide(false)}} 
               img ={hide?'':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'} style ="max-width:100%;height:auto;"
              />
              <div className={`list${{hide}? '회원만가능':''}`}> </div>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            </div>
            <div className ={styles.rowContainer}>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            </div>
            <div className ={styles.rowContainer}>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
              <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            </div>
            */}
          </div>
        </div>
      </main>
  
      {/* bottom bars */}
      <footer>
        <NavBar/>
        <BottomBar/>
      </footer>
      
      </body>
    );
  }
  
 export default Forensic;