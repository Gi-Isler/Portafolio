import gmail from "../images/gmail.png"
import linkedin from "../images/linkedin.png"
import github from "../images/logotipo-de-github.png"
import { makeStyles, Typography } from '@material-ui/core'

const Datos = () => {
    const classes = useStyles()
    const contact = [
        {
            id: "Gmail",
            title: <a href="mailto:giselaisler25@gmail.com">giselaisler25@gmail.com</a>,
            src: gmail, 
        },
        {
            id: "Github",
            title: <a href="https://www.github.com/Gi-Isler">/Gi-Isler</a>,
            src: github,
        },
        {
            id: "Linkedin",
            title: <a href="https://linkedin.com/in/gisela-isler-gonzalez">in/gisela-isler-gonzalez</a>,
            src: linkedin, 
        },
    ]


    return (
      <div container  className={classes.datos}> 
          {
              contact.map(({title, src}, index) => (
              <div item key={index}>
                <div className={classes.contact}>
                    <img src={src} alt={title}className={classes.customlogo}/>
                    <Typography Variant="h5" >
                        {title}
                    </Typography>
                </div>
              </div>  
              ))
          }
      </div>
  )
}

const useStyles = makeStyles((theme)=>({
   datos:{
       margin: theme.spacing(10),
   },
   contact:{
       flexDirection: "column",
       justifyContent: "space-around",
       maxWidth: 350,
       minHeight: 70, 
       margin: theme.spacing(7),
       padding: theme.spacing(1),
   },
    customlogo: {
        width: "50px",
        marginBottom: theme.spacing(1),
    },
}))

export default Datos;

