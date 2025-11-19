import style from './Home.module.css';
//import '../../../Animations/bgColorChange.css'
//import "../../../Animations/slideInBlur.css"
//import { ScreenContext } from '../../../App';
import ResumeCTA from './ResumeCTA';
const Home = () => {
  
  return (
    <div className={style.home}>
      {/* Self image */}
      <section className={style.selfImg}>
        <img src="/Assets/me.jpeg" alt="Self" />
      </section>

      {/* Introduction */}
      <section className={style.introduction}>
        {/* Name */}
        <div className={style.name}>Hi, I'm Gourav Bhadra</div>
        
        {/* Developer */}
        <div className={style.developer}>Aspiring IT Professional</div>
        
        {/* Summary */}
        <div className={style.summary}>
          I am a <i>fourth-year student</i> pursuing <i> Bachelor of Technology in Computer Science and Engineering</i> from <a href="https://rcciit.org/" target="_blank">RCC Institute of Information Technology, Kolkata</a>. I am driven to apply theoretical knowledge and technical expertise to practical projects, fostering innovation and growth. I am eager to collaborate with dynamic teams, harnessing cutting-edge IT technologies to develop impactful business solutions and propel my professional development.
        </div>
        
        {/* Download Resume Button */}
        <ResumeCTA/>

      </section>
    </div>
  );
};

export default Home;
