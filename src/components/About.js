import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import gi from "../images/yiop.jpeg";
import TypeWriterEffect from "react-typewriter-effect";
import pdf from "../images/CVGiselaIsler.pdf";

const About = ({title, dark, id}) => {
  const classes = useStyles();  
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
           <Typography variant="h3">{title}</Typography>
           <Card className={classes.card}>
                <CardMedia image={gi} className={classes.media} title="picture"/>
                <CardContent className={classes.cardcontent}>
                   <TypeWriterEffect
                      text="Hola,  Soy Gisela Isler"
                      textStyle={{fontSize: "2rem", fontWeight: "700px", color: "gray" }}
                      startDelay={100}
                      cursorColor="black"
                      typeSpeed={100}                   
                   />
                   <TypeWriterEffect
                      text="Front-End Developer"
                      textStyle={{fontSize: "1.2rem", fontWeight: "500px", marginBottom: "1rem"}}
                      startDelay={3500}
                      cursorColor="black"
                      typeSpeed={100}                   
                   />
                   <Typography variant="h6" color="textSecondary">
                      "Me gustan los desafíos, así poner a prueba mis capacidades y aplicar mis conocimientos.
                  </Typography> 
                      
                </CardContent>
                <CardActions>
                    <Button variant= "contained" className= {classes.pdfbutton}>
                      <a href={pdf}download>
                       Descarga Mi CV
                      </a>
                    </Button>
                </CardActions>
           </Card>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  section :{
      minHeight: "100vh",
  },
  sectiondark: {
      background: "#333",
      color: "#fff",
  },
  sectioncontent: {
      maxWidth: "80vw",
      margin: "0 auto",
  },
  card:{
      height: "80vh",
      display: "flex",
      marginTop: theme.spacing(6),
  },
  media: {
      width: "250px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
      margin: theme.spacing(5)
  },
  cardcontent: {
      marginTop: theme.spacing(4),
      "& h6": {
          marginTop: theme.spacing(6),
          [theme.breakpoints.down("xs")]:{
              display: "none",
          },
      },
  },
  pdfbutton: {
      position: "absolute",
      bottom: "1rem",
      right: "13rem",
      [theme.breakpoints.down("xs")]:{
          bottom: 15,
          right: "1rem",
      },
      backgroundColor: "lightgray",
      padding: theme.spacing(1.2),
      "&:hover": {
          backgroundColor: "#fff",
      },
      "& a": {
          color: "black",
          textDecoration: "none",
          fontWeight: 900,
      },
      "& a: hover": {
          color: "gray",
      },
  },
}))


export default About;


