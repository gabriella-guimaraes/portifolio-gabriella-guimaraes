import '../style/Projects.css';
import api from '../images/gg-burguer-api.jpg';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ggBurguer from '../images/gg-burguer.jpg';
import Grid from "@material-ui/core/Grid";
import livreiro from '../images/livreiro.jpg';
import { makeStyles } from "@material-ui/core/styles";
import rickMorty from '../images/rick-and-morty.jpg';
import sIw from '../images/should-I-watch.jpg';


function Projects (){
  const useStyles = makeStyles({
    media: {
      height: 200,
      width: 200,
    },
  });

  const redirectApi = (event) => {
    window.location.assign('https://github.com/gabriella-guimaraes/SAP005-burger-queen-api');
  }

  const redirectLivreiro = (event) => {
    window.location.assign('https://livreiro.vercel.app/');
  }

  const redirectSiw = (event) => {
    window.location.assign('https://rede-social-329c5.web.app/');
  }

  const redirectBurger = (event) => {
    window.location.assign('https://sap-005-burger-queen-gabriella-guimaraes.vercel.app/');
  }

  const redirectRickAndMorty = (event) => {
    window.location.assign('https://robertakelly.github.io/SAP005-data-lovers/index.html');
  }

  const classes = useStyles();

  return(
    <div className="projects">
      <h1 className="projects-tittle">My recent work.</h1>
      <p className="projects-text">Here are a few projects I've worked on recently.
      You can see more on my <a className="link" href="https://github.com/gabriella-guimaraes" target="blank">Github</a></p>
      <section className="icons">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Card id="project" onClick={(event) => redirectApi()}>
                <CardMedia id="project-logo" className={classes.media} image={api} />
                <p className="project-description">Api developed for the <i>GG Burguer System</i></p>
            </Card>
          </Grid> 
          <Grid item xs={12} sm={3}>
            <Card id="project" onClick={(event) => redirectLivreiro()}>
                <CardMedia id="project-logo" className={classes.media} image={livreiro} />
                <p className="project-description">The Livreiro Virtual Assistant was developed in 2 days during a hackathon for bookstore customers.</p> 
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card id="project" onClick={(event) => redirectSiw()}>
                <CardMedia id="project-logo" className={classes.media} image={sIw} />
                <p className="project-description"><i>Should I Watch?</i> is a social network for sharing reviews about movies, series and TV shows.</p> 
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card id="project" onClick={(event) => redirectBurger()}>
                <CardMedia id="project-logo" className={classes.media} image={ggBurguer} />
                <p className="project-description">The <i>GG Burguer System</i> is an interface that aims to ensure greater flexibility and autonomy in the workflow of hamburger employees.</p> 
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card id="project" onClick={(event) => redirectRickAndMorty()}>
                <CardMedia id="project-logo" className={classes.media} image={rickMorty} />
                <p className="project-description">A Rick and Morty library with all information about the series characters and some curiosities.</p> 
            </Card>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}
export default Projects;