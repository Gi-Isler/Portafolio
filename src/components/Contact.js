import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Datos from './Datos';


const Contact = ({title, dark, id}) => {
  const classes = useStyles();  
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
           <Typography variant="h3">{title}</Typography>
              <Card>
                  <Datos/>
              </Card>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  section :{
      minHeight: "100vh",
      display: "flex",
  },
  sectiondark: {
      background: "#333",
      color: "#fff",
  },
  sectioncontent: {
      maxWidth: "180vw",
      
      margin: "0 auto",
      padding: theme.spacing(5),
  },
  }))

export default Contact;


