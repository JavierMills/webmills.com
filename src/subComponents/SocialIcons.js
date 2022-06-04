import React from 'react'
import { NavLink } from 'react-router-dom';
import { Facebook, Github, Twitter, Linkedin } from '../components/AllSvgs';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';
import {motion} from 'framer-motion';

const Icons = styled(motion.div)`
initial={{transform: "scale(0)"}}
animate={{scale:[0,1,1.5,1]}}
transition:{{type: 'spring', duration:1, delay:1}}
display: flex;
flex-direction: column;
align-items: center;

position:fixed;
bottom: 0;
left: 2rem;

z-index: 3;


//separacion entre los icons
&>*:not(:last-child){
    margin:0.3rem 0;
}


`


const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

export const SocialIcons = (props) => {
  return (
      <Icons>       
                    <motion.div
                    initial={{transform: "scale(0)"}}
                    animate={{scale:[0,1,1.5,1]}}
                    transition={{type: 'spring', duration:1, delay:1}}
                    >
                        <NavLink style={{color: 'inherit'}} target='_blank'  to={{pathname:"https://github.com/JavierMills"}}>
                            <Github width={25} height={25} fill={props.theme ==='dark' ? DarkTheme.text : DarkTheme.body} />
                        </NavLink>
                    </motion.div>
                    <motion.div
                    initial={{transform: "scale(0)"}}
                    animate={{scale:[0,1,1.5,1]}}
                    transition={{type: 'spring', duration:1, delay:1.2}}
                    >
                        <NavLink to={{pathname:"https://twitter.com/JavierMills7?t=Tc5ecKkRkBMSxdNrfVRKew&s=09"}} style={{color: 'inherit'}} target='_blank'>
                            <Twitter width={25} height={25} fill={props.theme ==='dark' ? DarkTheme.text : DarkTheme.body} />
                        </NavLink>
                    </motion.div>
                    <motion.div
                    initial={{transform: "scale(0)"}}
                    animate={{scale:[0,1,1.5,1]}}
                    transition={{type: 'spring', duration:1, delay:1.4}}
                    >
                        <NavLink to={{pathname:"https://www.facebook.com/ArteMills"}} style={{color: 'inherit'}} target='_blank'>
                            <Facebook width={25} height={25} fill={props.theme ==='dark' ? DarkTheme.text : DarkTheme.body} />
                        </NavLink>
                    </motion.div>
                    <motion.div
                    initial={{transform: "scale(0)"}}
                    animate={{scale:[0,1,1.5,1]}}
                    transition={{type: 'spring', duration:1, delay:1.6}}>
                        <NavLink to={{pathname:"https://www.linkedin.com/in/ramiro-javier-martinez-cruz-816095224"}} style={{color: 'inherit'}} target='_blank'>
                            <Linkedin width={25} height={25} fill={props.theme ==='dark' ? DarkTheme.text : DarkTheme.body} />
                        </NavLink>
                    </motion.div>

                    <Line color={props.theme}
                     initial={
                        {
                            height: 0
                        }
                        } 
                        animate={{
                            height:'8rem'
                        }}
                        transition ={{
                            type:'spring', duration:1, delay:0.8
                        }}
                    /> 

                   
      </Icons>
  
  )
}
