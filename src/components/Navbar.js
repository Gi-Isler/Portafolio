import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar } from '@material-ui/core';
import logo from "../images/logoinicial.png"
import {Link, animateScroll as scroll } from "react-scroll";
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import EmojiObjectsSharpIcon from '@material-ui/icons/EmojiObjectsSharp';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import ContactsSharpIcon from '@material-ui/icons/ContactsSharp';
import MenuIcon from "@material-ui/icons/Menu";
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import {useState} from "react";


const Navbar = () => {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const links = [
  {
    id: "about",
    text: "Sobre Mi",
    icon: <InfoSharpIcon fontSize="large"/>
  },
  {
    id: "skills",
    text: "Skills",
    icon: <EmojiObjectsSharpIcon fontSize="large"/>
  },
  {
    id: "myWork",
    text: "Trabajos",
    icon: <BuildSharpIcon fontSize="large"/>
  },
  {
    id: "contact",
    text: "Contactame",
    icon: <ContactsSharpIcon fontSize="large"/>
  },
  ]

  const scrollToTop = () => {
      scroll.scrollToTop()
  }
   return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
            <img 
              src={logo} 
              className={classes.logo} 
              alt="Logo" 
              onClick={scrollToTop} 
            />
            <List className={classes.menu}>
              {
                  links.map(({id, text}, index) => (
                    <Link key={index} 
                        to={id} 
                        spy={true} 
                        activeClass="active" 
                        smooth={true} 
                        duration={500} 
                        offset={-70}>
                        {text}</Link>
                  ))
              }
            </List>  
            <IconButton edge="end" 
            className={classes.menubutton}
            onClick={()=> setOpen(!open)}
            >
            <MenuIcon fontSize= "large"/>
            </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor= "right" open={open} onClose={()=>setOpen(false)}>
          <IconButton  onClick={()=>setOpen(false)} className={classes.closessharpicon}>
            <CloseSharpIcon fontSize="large"/>
          </IconButton>
          <Divider/>
          {
                  links.map(({id, text, icon}, index) => (
                    <Link key={index} 
                      className={classes.sidebar}
                      to={id} 
                      spy={true} 
                      activeClass="active" 
                      smooth={true} 
                      duration={500} 
                      offset={-70}>
                      <ListItem component="h5">
                          <span>
                              <ListItemIcon>
                                 {icon}
                              </ListItemIcon>
                          </span>{text}
                      </ListItem>
                    </Link>
                  ))
              }
      </Drawer>
    </>  
  )

  
}

const useStyles = makeStyles((theme)=>({
  root: {
      backgroundColor: "#fafafa",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
  },
  toolbar: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
  },
  logo :{
     height: "4.3rem",
     objectFit: "contain",
     "&:hover": {
       cursor: "pointer",
     } 
  },
  menu: {
      // Responsive 
      [theme.breakpoints.down("xs")]:{
        display:"none"
      },
      // Indicación Tamaño Desktop
      "& a": {
        color: "#333",
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginLeft: theme.spacing(3),
      },
      "&:hover": {
        cursor: "pointer",
        color: "purple",
      },
  },
  menubutton:{
      display: "none",
      [theme.breakpoints.down ("xs")]:{
          display: "block",
          position:"absolute",
          top:0,
          right: 10,
      },

  },
  closessharpicon: {
      color: "gray",
      position: "absolute",
      top: 0,
      right: 10,
  },
  sidebar:{
      width: "30vh",
      [theme.breakpoints.down("xs")]:{
          width: "40vw",
      },
      "& h5":{
          margin: theme.spacing(10,0,0,4),
          fontSize: "1.4rem",
          color: "#333",
          fontWeight:"bold",
      },
      "& h5: hover": {
          cursor: "pointer",
      },
  },
}))

export default Navbar;

