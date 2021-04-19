import '../style/Skills.css';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

function Skills(){
  // const useStyles = makeStyles({
  //   media: {
  //     height: 105,
  //   },
  // });

  // const classes = useStyles();
  return(
    <div className="skills">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            {/* <CardMedia className={classes.media} image={'./logo.jpg'} /> */}
            <h1 className="skill-intro">Front-End Developer</h1>
            <p className="skill-text">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h2 className="skill-tittle">Languages:</h2>
            <p className="skill-text">Javascript, HTML 5, CSS 3</p>
            <h2 className="skill-tittle">Hosting:</h2>
            <p className="skill-text">Firebase, Heroku, Vercel</p>
            <h2 className="skill-tittle">Databases:</h2>
            <p className="skill-text">Firestore, Postgress, MySQL</p>
            <h2 className="skill-tittle">Dev tools:</h2>
            <p className="skill-text" id="last">Git, Github, Visual Studio Code, Atom, Trello, Postman</p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <h1 className="skill-intro">Designer</h1>
            <p className="skill-text">I value simple content structure, clean design patterns, and
            creative interactions</p>
            <h2 className="skill-tittle">Things I enjoy designing:</h2>
            <p className="skill-text">UX, UI, Web, Mobile, Apps, Logos, concept arts, portraits</p>
            <h2 className="skill-tittle">Design tools:</h2>
            <p className="skill-text">Figma, Marvel, Canva, Adobe Photoshop, Adobe Illustrator, Autodesk Sketchbook,
            MediBang Paint Pro, Paint Tool Sai, Paper & Pen, Sketch</p>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
export default Skills;