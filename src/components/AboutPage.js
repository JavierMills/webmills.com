import React from 'react';
import styled, { ThemeProvider,keyframes } from 'styled-components';
import {DarkTheme} from './Themes';
import {SocialIcons} from '../subComponents/SocialIcons';
import {PowerButton} from '../subComponents/PowerButton';
import {LogoComponent} from '../subComponents/LogoComponent';
import {ParticleComponent} from '../subComponents/ParticleComponent';
import spaceman from '../assets/Images/spaceman.png'
import {BigTitle} from '../subComponents/BigTitle'

//contenedor princcipal'
const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const Float = keyframes`
0%{ transform: translateY(-10px) }
50%{ transform: translateY(-15px) translateX(50px) }
100%{ transform: translateY(-10px) }

`

const SpaceMan = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation : ${Float} 4s ease infinite;
img{
  witdh: 100%;
  height: auto;
}


@media(max-width: 700px){
  position: absolute;
bottom: 10%;
left: 70%;
width: 20vw;
animation : ${Float} 4s ease infinite;
img{
  witdh: 10%;
  height: 30%;
}
  }
`
const Main = styled.div`
border: 2px solid ${(props) => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index:3;

line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
position: absolute;
top: 10rem;
left: calc(5rem + 5vw);
font-family: 'Ubuntu Mono' monospace;
font-style: italic;

`


export const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme} >
    
        <Box>

        <LogoComponent theme='dark'/>
        <SocialIcons  theme='dark'/>
        <PowerButton />
        <ParticleComponent  theme={'dark'}/>
      
          <SpaceMan>
            <img src={spaceman} alt='spaceman' />
          </SpaceMan>

          <Main>
          I'm a front-end developer located in Mexico(CDMX). I love to create simple yet beautiful websites with great user experience.
          <br /> <br/>
            I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
            <br /> <br/>
            I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
         
          </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />

        </Box>


     </ThemeProvider>


)

  }
    
    



