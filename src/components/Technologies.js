import html from "../images/html5.png"
import css from "../images/CSS3.png"
import js from "../images/javascript.png"
import react from "../images/react.png"
import vsc from "../images/VSC.png"
import github from "../images/logotipo-de-github.png"
import figma from "../images/figma.png"
import trello from "../images/trello.png"
import firebase from "../images/firebase.png"
import { makeStyles } from "@material-ui/core"


const Technologies = () => {
    const classes = useStyles()
    const stack = [
        {
            id: "html",
            src: html, 
        },
        {
            id: "css",
            src: css,
        },
        {
            id: "js",
            src: js, 
        },
        {
            id: "react",
            src: react, 
        },
        {
            id: "vsc",
            src: vsc, 
        },
        {
            id: "github",
            src: github, 
        },
        {
            id: "firebase",
            src: firebase, 
        },
        {
            id: "figma",
            src: figma, 
        },
        {
            id: "trello",
            src: trello, 
        },
    ]


    return (
        <div container  className={classes.tecnology}> 
        {
            stack.map(({id, src}, index) => (
            <div item key={index} xs={12} sm={6} md={4}>
              <div className={classes.stack}>
                  <img src={src} alt={id}className={classes.customlogo}/>
              </div>
            </div>  
            ))
        }
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
    tecnology:{
        margin: theme.spacing(7),
        padding: theme.spacing(2),
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
    },
    stack:{
        backgroundColor: "lightgray",
        flexDirection: "row",
        justifyContent: "center",
        maxWidth: 350,
        minHeight: 70, 
        margin: theme.spacing(8),
        padding: theme.spacing(5),
    },
     customlogo: {
         width: "50px",
         marginBottom: theme.spacing(1),
     },
 }))
 

export default Technologies;

