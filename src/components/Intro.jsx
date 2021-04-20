import '../style/Intro.css';
import About from './About';
import illustration from '../images/profile-pic.jpg';
import Grid from "@material-ui/core/Grid";
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

function Intro (){
  return(
    <div className="intro">
      <Navbar />
      <section className="text">
        <Grid container spacing={1}>
          <Grid item xs={4} sm={6}>
            <h1 className="intro-tittle"> Hello there, <br/>I'm Gabriella</h1>
            <p className="intro-text"><strong>Front-End Developer</strong></p>
            <p className="intro-text">I design and code beautifully simple things, and
            I love what I do.</p>
          </Grid>
          <Grid item xs={9} sm={6}>
            <img className="intro-image" src={illustration} alt={"author's self illustration"} />
          </Grid>
        </Grid>  
      </section>
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
export default Intro