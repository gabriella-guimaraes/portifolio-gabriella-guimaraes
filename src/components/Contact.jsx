import '../style/Contact.css';
// import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import logo from '../logo.jpg';

function Contact (){

  const redirectGithub = (event) => {
    window.location.assign('https://github.com/gabriella-guimaraes');
  }

  const redirectLinkedIn = (event) => {
    window.location.assign('https://www.linkedin.com/in/gabriella-guimaraes/');
  }


  return(
    <div className="contact">
      {/* <section className="contact-call">
        <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <h1 className="contact-tittle">Contact</h1>
        </Grid>
        <Grid item xs={12} sm={4}>
          <p className="contact-text"><strong>Interested in working together? We should start a chat. I'll buy the coffe.</strong></p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button id="contactBtn" color="primary" variant="contained" size="large">Let's do this</Button>
        </Grid>
        </Grid>
      </section> */}
      <h1 className="contact-tittle">Contact</h1>
      <p className="contact-text">Interested in working together? We should start a chat. I'll buy the coffe.</p>
      <Grid container spacing={2}>
        <div className="contacts" >
          <Grid item xs={12} sm={6}>
            <EmailIcon color={'inherit'} id="contact-icons" />
            <p className="icon-span"><strong>Email:</strong></p>
            <p className="icon-span">gabigara13@gmail.com</p>
          </Grid>
        </div>
        <div className="contacts" onClick={(event) => redirectGithub()}>
          <Grid item xs={12} sm={6}>
            <GitHubIcon color={'inherit'} id="contact-icons" />
            <p className="icon-span"><strong>Github:</strong></p>
            <p className="icon-span">gabriella-guimaraes</p>
          </Grid>
        </div>
        <div className="contacts">
          <Grid item xs={12} sm={6} onClick={(event) => redirectLinkedIn()}>
            <LinkedInIcon color={'inherit'} id="contact-icons" />
            <p className="icon-span"><strong>LinkedIn:</strong></p>
            <p className="icon-span">gabriella-guimaraes</p>
          </Grid>
        </div>   
      </Grid>
        
      {/* <img className="gabi-logo" src={logo} alt={"Gabi logo"} /> */}
    </div>
  )
}
export default Contact;