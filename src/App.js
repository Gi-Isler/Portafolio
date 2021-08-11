import { makeStyles } from "@material-ui/core";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {

  const classes = useStyles ();

  return (
   
   <div className={classes.root}> 
      <Navbar/>
      <About title="Sobre Mi" id="about" dark={true} />
      <Skills title="Skills" id="skills" dark={false} />
      <MyWork title="Trabajos" id="myWork" dark={true}/>
      <Contact title="Contactame" id="contact" dark={false} />
    </div>
    
  );
}

const useStyles = makeStyles((theme)=>({
  root :{
  },
}))

export default App;


