import React from 'react';
import { Card, makeStyles, Typography } from '@material-ui/core';
import Technologies from './Technologies.js';


const Skills = ({title, dark, id}) => {
  const classes = useStyles();  
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
         <div className={classes.sectioncontent} id={id}>
           <Typography variant="h3">{title}</Typography>
            <Card className={classes.Skills}>         
              <Technologies/>
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
    maxWidth: "90vw",
    margin: "0 auto",
    padding: theme.spacing(4),
  },
}))

export default Skills;


