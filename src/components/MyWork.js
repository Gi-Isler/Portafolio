import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import mockData from '../MockData'

const MyWork = ({title, dark, id}) => {
  const classes = useStyles();  
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
         <div className={classes.sectioncontent} id={id}>
           <Typography variant="h3">{title}</Typography>
           <Grid container className={classes.grid}>
              {
                mockData.map(({title, image, link}, index)=>(
                    <Grid item Key={index} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia image={image} className={classes.caratula} titulo="caratula"/>
                          <CardContent>
                              <Link href= {link} target="_blank" rel="noopener noreferrer" >
                                  {title}
                              </Link>    
                          </CardContent>
                        </Card>
                    </Grid>  
                ))
              }
           </Grid>
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
      padding: theme.spacing(5),
  },
  grid:{
      marginTop: theme.spacing(10),
      justifyContent: "center",
  },
  card: {
      maxWidth: 345,
      minHeight: 210,
      margin: theme.spacing(3),

      "& h6":{
          margin: theme.spacing(1.5),
          justifyItems: "center",
      },
  },
  caratula: {
      paddingTop: "56.25%", //16:9
  },
 }))

export default MyWork;

