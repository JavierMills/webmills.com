import React, { useState } from 'react';
import {motion} from 'framer-motion';
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { LogoComponent } from '../subComponents/LogoComponent';
import { PowerButton } from '../subComponents/PowerButton';
import { SocialIcons } from '../subComponents/SocialIcons';
import { NavLink } from 'react-router-dom';
import {LightTheme} from './Themes';
import { YinYang } from './AllSvgs';
import { Intro } from './Intro';
import {ParticleComponent} from '../subComponents/ParticleComponent'

const MainContainer = styled.div`
background : #ffd900;
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;


h2,h2,h4,h5,h6{
  font-size: 1.4rem;  
font-family: 'Karla', sans-serif;
font-weight: 500;

}
@media (max-width: 800px){
  h2,h2,h4,h5,h6{
    font-size: 1.1rem;  
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  
  }  
}


`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const Blog = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`


const Work = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left:2rem;
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`
const About = styled(NavLink)`
//body es color blanco y text es color negro
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
`

const Skills = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`
const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`
const Center = styled.button`
position: absolute;
top: ${ props => props.click ? '85%' : '50%'};
left: ${ props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

//elemento secundario modificando.

&>:first-child{
  animation: ${rotate} infinite 1.9s linear;

}

&>:last-child{
  display: ${ props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;

}

@media (max-width: 750px){
  position: absolute;
  top: ${ props => props.click ? '85%' : '50%'};
  left: ${ props => props.click ? '89%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

//elemento secundario modificando.

&>:first-child{
  animation: ${rotate} infinite 1.9s linear;

}
@media (max-width: 550px){
  position: absolute;
  top: ${ props => props.click ? '85%' : '50%'};
  left: ${ props => props.click ? '86%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

//elemento secundario modificando.

&>:first-child{
  animation: ${rotate} infinite 1.9s linear;

}

&>:last-child{
  display: ${ props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;

}

}

@media (max-width: 420px){
  position: absolute;
  top: ${ props => props.click ? '85%' : '50%'};
  left: ${ props => props.click ? '84%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

//elemento secundario modificando.

&>:first-child{
  animation: ${rotate} infinite 1.9s linear;

}

&>:last-child{
  display: ${ props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;

}

}
`
const DarkDiv = styled.div`
background-color: #000;
position: absolute;
top:0;
bottom: 0;
right: 50%;
// 50% reprecenta o negro y el 100% representa lo blanco
width:${ props => props.click ? '50%': '0%'};
// 100% de nefro n su altura total
height:${ props => props.click ? '100%': '0%'};
z-index:1;
//height velocidad cuando sale el fondo negro, width cuando se aculta el fondo negro Y el ultimo ease es la velocidad con que sale de iz a derecha
transition: height 0.5s ease, width 1s ease 0.5s;

@media (max-width: 550px){
background-color: #000;
position: absolute;
top:0;
bottom:0;
right: 50%;
// 50% reprecenta o negro y el 100% representa lo blanco
width:${ props => props.click ? '50%': '0%'};
// 100% de nefro n su altura total
height:${ props => props.click ? '100%': '0%'};
z-index:1;
//height velocidad cuando sale el fondo negro, width cuando se aculta el fondo negro Y el ultimo ease es la velocidad con que sale de iz a derecha
transition: height 0.5s ease, width 1s ease 0.5s;
}
`


export const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick( !click );
  return (
    <ThemeProvider theme={LightTheme}>
   <MainContainer>
      <DarkDiv click={click}/>
     <Container>
          <LogoComponent theme={ click ? 'dark' : 'light'} />
          <PowerButton />
          <ParticleComponent theme={'light'} />
          <SocialIcons theme={ click ? 'dark' : 'light'} />
         
          <Center click={click}>
            <YinYang onClick={() => handleClick()} width={click ? 105 : 145} height={click ? 105 : 145} fill='currentColor'/>
            <span>Click Here</span>            
          </Center>
          <Contact target="_blank" to={{pathname:"mailto:javier_bouncing@hotmail.com"}}>
            <motion.h2
            initial={{
              y:-200,
              transition:{type: 'spring', duration: 1.5, delay:1}
            }}

            animate={{
              y:0,
              transition:{type: 'spring', duration: 1.5, delay:1}
            }}

            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              Contact...
            </motion.h2>
          </Contact>
          <Blog to="/blog" >
            <motion.h2
             initial={{
              y:-200,
              transition:{type: 'spring', duration: 1.5, delay:1}
            }}

            animate={{
              y:0,
              transition:{type: 'spring', duration: 1.5, delay:1}
            }}
             whileHover={{scale: 1.1}}
             whileTap={{scale: 0.9}}
            >
              Blog
            </motion.h2>
          </Blog>  

          <Work to="/workpage" click={+click}>
            <motion.h2
             initial={{
              y:-200,
              transition:{type: 'spring', duration: 1.5, delay:1}
            }}

            animate={{
              y:0,
              transition:{type: 'spring', duration: 1.5, delay:1}
            }}
             whileHover={{scale: 1.1}}
             whileTap={{scale: 0.9}}
            >
              Work
            </motion.h2>
          </Work>

          <BottomBar>
            <About to="/about" click={+click}>
              <motion.h2
              initial={{
                y:200,
                transition:{type: 'spring', duration: 1.5, delay:1}
              }}
  
              animate={{
                y:0,
                transition:{type: 'spring', duration: 1.5, delay:1}
              }}
               whileHover={{scale: 1.1}}
               whileTap={{scale: 0.9}}
              >
                About.
                </motion.h2>
            </About>  

            <Skills to="/myskills" >
              <motion.h2
               initial={{
                y:200,
                transition:{type: 'spring', duration: 1.5, delay:1}
              }}
  
              animate={{
                y:0,
                transition:{type: 'spring', duration: 1.5, delay:1}
              }}
               whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
              >
                MySkills.
                </motion.h2>
            </Skills> 
          </BottomBar>
     </Container>
     {click ? <Intro click={click} /> : null }
   </MainContainer>
   </ThemeProvider>
  )
}


